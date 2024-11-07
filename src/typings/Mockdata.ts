export interface Answer {
  id: string;
  answer: string;
  correct: boolean;
}

export interface Question {
  questionText: string;
  type: "click" | "write";
  answers: Answer[];
}

export interface MockDataItem {
  id: string;
  type: "main" | "class";
  path: string;
  title: string;
  image: string;
  description: string;
  instructions?: string;
  instructionsForIT?: string;
  instructionsForLice?: string;
  questions?: Question[];
}

export type MockDataTypes = MockDataItem[];
