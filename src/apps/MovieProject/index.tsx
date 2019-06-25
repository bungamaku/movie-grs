import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./pages";
import "./styles/index.css";

export default function MovieProject() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
