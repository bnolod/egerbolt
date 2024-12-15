import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./contexts/themeContext";
import { CartProvider } from "./contexts/cartContext";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);
