import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/List.tsx";
import HolaReact from "./components/HolaReact.tsx";
import Ods from "./components/Ods.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HolaReact />
    {/* <App /> */}
    <Ods />
    <App />
  </StrictMode>,
);
