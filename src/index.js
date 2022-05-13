import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TaskProvider } from "./data/Task";
import { CategoryProvider } from "./data/Category";

ReactDOM.render(
  <React.StrictMode>
    <TaskProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </TaskProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
