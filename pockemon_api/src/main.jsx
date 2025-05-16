import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.css";
import Characters from "./components/Characters";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/Characters" element={<Characters></Characters>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>

);
