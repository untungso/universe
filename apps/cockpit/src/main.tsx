import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@instead/facades";
import "@instead/facades/styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <h1>Hello World</h1>
      <Button>React </Button>
    </div>
  </React.StrictMode>
);
