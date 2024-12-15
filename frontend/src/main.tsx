import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "./contexts/themeContext";
import { CartProvider } from "./contexts/cartContext";
import App from "./App";

// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App/>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);
