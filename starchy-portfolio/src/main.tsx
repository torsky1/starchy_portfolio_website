import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./app/App";
import SplashLoader from "./app/SplashLoader";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SplashLoader>
        <App />
      </SplashLoader>
    </BrowserRouter>
  </StrictMode>
);
