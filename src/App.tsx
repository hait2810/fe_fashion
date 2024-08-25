import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Loader from "./components/Loader";
import { Router } from "./routes/Router";
const queryClient = new QueryClient()
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3490dc',
      },
    },
  });
  return <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader/>}>
        <Router />
      </Suspense>
    </ThemeProvider>
  </QueryClientProvider>
}

export default App;
