import React, { useEffect } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { getToken } from "./shared/utils/local-storage";
import { useAuth } from "./hooks/useAuth";
import "./index.css";

function App() {
  const { initAuth } = useAuth();
  useEffect(() => {
    initAuth();
  }, []);
  console.log(getToken());
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
