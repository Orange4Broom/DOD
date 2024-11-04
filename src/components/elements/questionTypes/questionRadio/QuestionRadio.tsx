import { AnswersType } from "../../../../typings/Questions";
import "./questionRadio.scss";

interface QuestionRadioProps {
  question: {
    questionText: string;
    type: string;
    answers: AnswersType[];
  };
  qIndex: number;
  handleRadioChange: (id: string) => void;
  answers: string[];
}

export const QuestionRadio: React.FC<QuestionRadioProps> = (props) => {
  const { question, qIndex, handleRadioChange, answers } = props;

  return (
    <div className="form__question" key={qIndex}>
      <h1 className="form__title">{question.questionText}</h1>
      <div className="form__options">
        {question.answers?.map((answer) => (
          <label
            key={answer.id}
            className={`form__option ${
              Array.isArray(answers) && answers.includes(answer.id)
                ? "form__option--selected"
                : ""
            }`}
          >
            <input
              type="radio"
              name={`question-${qIndex}`}
              value={answer.id}
              checked={Array.isArray(answers) && answers.includes(answer.id)}
              onChange={() => handleRadioChange(answer.id)}
              className="form__radio"
            />
            {answer.answer}
          </label>
        ))}
      </div>
    </div>
  );
};
