import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/blocks/home/Home";
import "./index.scss";
import { Class } from "./components/elements/class/Class";
import { MockUpData } from "./data/TestData";
import "react-toastify/dist/ReactToastify.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          {MockUpData.map((item) => (
            <Route
              key={item.id}
              path={item.path}
              element={
                item.type === "main" ? (
                  <Home item={item} />
                ) : (
                  <Class item={item} />
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
