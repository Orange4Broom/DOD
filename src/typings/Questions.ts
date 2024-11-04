export interface AnswersType {
  id: string;
  answer: string;
  correct: boolean;
}

export interface QuestionRadioProps {
  question: {
    questionText: string;
    type: string;
    answers: AnswersType[];
  };
  qIndex: number;
  handleRadioChange: (id: string) => void;
}

export interface QuestionTextProps {
  question: {
    questionText: string;
    type: string;
  };
  inputAnswer: string;
  setInputAnswer: (value: string) => void;
}

export interface QuestionTextComponentProps {
  questionText: string;
  type: string;
  answers: AnswersType[];
  qIndex: number;
}
