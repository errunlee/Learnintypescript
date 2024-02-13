import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Youtubeform from "./reacthookFrom/Youtubeform.tsx";
import Fieldarray from "./reacthookFrom/Fieldarray.tsx";
import LazyImport from "./LazyImport.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Youtubeform />
     */}
    {/* <Fieldarray /> */}
    <LazyImport />
  </React.StrictMode>
);
