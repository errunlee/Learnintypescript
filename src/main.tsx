import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Youtubeform from "./reacthookFrom/Youtubeform.tsx";
import Fieldarray from "./reacthookFrom/Fieldarray.tsx";
import LazyImport from "./LazyImport.tsx";

import { Provider } from "react-redux";
import { posts } from "./rtk-query/api.ts";
import { store } from "./rtk-query/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Youtubeform />
     */}
    {/* <Fieldarray /> */}
    <Provider store={store}>
      <LazyImport />
    </Provider>
  </React.StrictMode>
);
