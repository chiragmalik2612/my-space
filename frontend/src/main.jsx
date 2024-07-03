import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { MyTasksContextProvider } from "./context/MyTasksContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MyTasksContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MyTasksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
