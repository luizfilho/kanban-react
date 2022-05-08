import React, { useEffect } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { getToken } from "./shared/utils/local-storage";
import { useAuth } from "./hooks/useAuth";
import Auth from "@/containers/Auth";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Auth>
        <Home />
      </Auth>
    </ThemeProvider>
  );
}

export default App;
