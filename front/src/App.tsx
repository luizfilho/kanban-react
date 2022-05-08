import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Auth from "@/containers/Auth";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-right" autoClose={3000} closeOnClick />
      <Auth>
        <Home />
      </Auth>
    </ThemeProvider>
  );
}

export default App;
