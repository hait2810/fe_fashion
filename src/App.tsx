import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { Router } from "./routes/Router";
import { Toaster } from "sonner";
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
    <Toaster position="top-center" closeButton/>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<>
        <Header />
        <Loader />
        <Footer />
      </>}>
        <Router />
      </Suspense>
      <ScrollToTop />
    </ThemeProvider>
  </QueryClientProvider>
}

export default App;
