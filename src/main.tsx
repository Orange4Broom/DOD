import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MockDataTypes } from "./typings/Mockdata";
import { Home } from "./components/blocks/home/Home";
import "./index.scss";
import { Class } from "./components/elements/class/Class";
import vyt1 from "../public/assets/images/vyt1.png";
import home from "../public/assets/images/home.png";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  const MockUpData: MockDataTypes = [
    {
      id: "1",
      type: "main",
      path: "/home",
      title: "Den otevřených dveří",
      image: `${home}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      instructionsForIT:
        "Svěle pokud tě zajímají počítače tak  se vydej po schodech a pak zatoč doleva až na konec chodby kde narazíš na učebnu VYT1, kde si naskenuješ QR kód pro více informací.",
      instructionsForLice:
        "Výtečně, pokud tě zajímá ekonomika a peníze tak se můžeš vydat po schodech a pak zatočit doprava hned narazíš na první dvěře kde se nachází učbna ekonomiky, u ní si naskenuj QR kód pro více informací.",
    },
    {
      id: "2",
      type: "class",
      path: "/vyt1",
      title: "VYT1",
      image: `${vyt1}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      instructions:
        "Vyjděte z třídy a vydejte se do 1. patra a pak doprava na konec chodby kde se nachází učebna VYT4.",
      questions: [
        {
          question: "Jaké jsou barvy školy?",
          type: "click",
          answers: [
            { id: "8", answer: "oranžová a modrá", correct: true },
            { id: "9", answer: "žlutá a černá", correct: false },
            { id: "10", answer: "zelená a bílá", correct: false },
            { id: "11", answer: "červená a černá", correct: false },
          ],
        },
        {
          question: "Jaké hlavní programovací jazyky jsou vyučovány na G+SOŠ?",
          type: "click",
          answers: [
            { id: "12", answer: "Python + C#", correct: false },
            { id: "13", answer: "ASP a Java", correct: false },
            { id: "14", answer: "PHP a Java", correct: true },
            { id: "15", answer: "Javascript a C", correct: false },
          ],
        },
        {
          question: "Kolik je na škole tříd?",
          type: "write",
          answers: [{ id: "90", answer: "12", correct: true }],
        },
      ],
    },
  ];
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
