import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
      <Router />
    </ThemeProvider>
  </QueryClientProvider>
}

export default App;
