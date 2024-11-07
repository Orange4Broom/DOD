import vyt1 from "../assets/images/vyt1.png";
import home from "../assets/images/home.png";
import { MockDataTypes } from "../typings/Mockdata";

export const MockUpData: MockDataTypes = [
  {
    id: "1",
    type: "main",
    path: "/home",
    title: "Den otevřených dveří",
    image: `${home}`,
    description:
      "Po příchodu si návštěvník může vybrat jeden ze dvou oborů – informační technologie nebo ekonomické lyceum.",
    instructionsForIT:
      "Svěle pokud tě zajímají počítače tak  se vydej po schodech a pak zatoč doleva až na konec chodby kde narazíš na učebnu VYT1, kde si naskenuješ QR kód pro více informací.",
    instructionsForLice:
      "Výtečně, pokud tě zajímá ekonomika a peníze tak se můžeš vydat po schodech a pak zatočit doprava hned narazíš na první dvěře kde se nachází učbna ekonomiky, u ní si naskenuj QR kód pro více informací.",
  },
  {
    id: "2",
    type: "class",
    path: "/vyt1",
    title: "VYT 1",
    image: `${vyt1}`,
    description:
      "VYT 1 je počítačová učebna, která je vybavena pro výuku Javy a síťových technologií. Studenti pracují s moderními počítači a softwary pro programování v Javě a správu sítí.",
    instructions:
      "Vyjděte z třídy a vydejte se do 1. patra a pak doprava na konec chodby kde se nachází učebna VYT4.",
    questions: [
      {
        questionText: "Jaké jsou barvy školy?",
        type: "click",
        answers: [
          { id: "8", answer: "oranžová a modrá", correct: true },
          { id: "9", answer: "žlutá a černá", correct: false },
          { id: "10", answer: "zelená a bílá", correct: false },
          { id: "11", answer: "červená a černá", correct: false },
        ],
      },
      {
        questionText:
          "Jaké hlavní programovací jazyky jsou vyučovány na G+SOŠ?",
        type: "click",
        answers: [
          { id: "12", answer: "Python + C#", correct: false },
          { id: "13", answer: "ASP a Java", correct: false },
          { id: "14", answer: "PHP a Java", correct: true },
          { id: "15", answer: "JavaScript a C", correct: false },
        ],
      },
      {
        questionText: "Kolik je na škole tříd? (číslice)",
        type: "write",
        answers: [{ id: "90", answer: "12", correct: true }],
      },
    ],
  },
  {
    id: "3",
    type: "class",
    path: "/vyt4",
    title: "VYT 4",
    image: `${vyt1}`,
    description:
      "Učebna VYT4 je nejmoderněji vybavená místnost pro studenty oboru informačních technologií, zaměřená na výuku počítačové grafiky. Studenti zde pracují na výkonných počítačích s profesionálním grafickým softwarem, jako je Adobe a mají přístup k 3D tiskárně pro tvorbu fyzických modelů. Tento prostor poskytuje ideální podmínky pro kreativní projekty a praktické učení.",
    instructions:
      "Vyjděte z třídy a vydejte se do 2. patra a pak doleva na konec chodby kde se nachází učebna VYT4.",
    questions: [
      {
        questionText: "V kolika učebnách IT se učí studenti?",
        type: "click",
        answers: [
          { id: "20", answer: "4", correct: true },
          { id: "21", answer: "3", correct: false },
          { id: "22", answer: "1", correct: false },
          { id: "23", answer: "5", correct: false },
        ],
      },
      {
        questionText:
          "Jaké hlavní programovací jazyky jsou vyučovány na G+SOŠ?",
        type: "click",
        answers: [
          { id: "24", answer: "Python + C#", correct: false },
          { id: "25", answer: "ASP a Java", correct: false },
          { id: "26", answer: "PHP a Java", correct: true },
          { id: "27", answer: "JavaScript a C", correct: false },
        ],
      },
      {
        questionText: "Kolik je na škole tříd? (Čísla)",
        type: "write",
        answers: [{ id: "99", answer: "12", correct: true }],
      },
    ],
  },
];
