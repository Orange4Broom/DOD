import React from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./components/blocks/home/Home";
import { Class } from "./components/elements/class/Class";
import { MockUpData } from "./data/ProdData";
import "./index.scss";

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
