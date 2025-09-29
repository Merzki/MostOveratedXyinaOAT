import { StrictMode } from "react";
import ScrollPage from "./sections/ScrollPage";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScrollPage />
  </StrictMode>
);
