import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Auth from "@/containers/Auth";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ToastContainer position="top-right" autoClose={3000} closeOnClick />
        <Auth>
          <Home />
        </Auth>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
