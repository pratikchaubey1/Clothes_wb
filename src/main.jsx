import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./Context/Context.jsx";
import Footer from "./Footer/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ProductProvider>
        <App />
        <Footer/>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
