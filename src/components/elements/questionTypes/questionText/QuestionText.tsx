interface QuestionTextProps {
  questionText: string;
  inputAnswer: string;
  setInputAnswer: (value: string) => void;
  qIndex: number;
}

export const QuestionText: React.FC<QuestionTextProps> = (props) => {
  const { questionText, inputAnswer, setInputAnswer, qIndex } = props;
  return (
    <div className="form__question" key={qIndex}>
      <h1 className="form__title">{questionText}</h1>
      <input
        className="form__input"
        placeholder="Napište odpověď"
        type="text"
        id={questionText}
        value={inputAnswer}
        onChange={(e) => setInputAnswer(e.target.value)}
      />
    </div>
  );
};
