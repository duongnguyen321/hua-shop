import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./assets/styles/index.scss";
import App from "./App";
if (localStorage.getItem("accessToken") && localStorage.getItem("userid")) {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("accessToken");
  axios.defaults.headers.common["userid"] = localStorage.getItem("userid");
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
