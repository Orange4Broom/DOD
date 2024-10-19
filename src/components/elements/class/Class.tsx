import { useState } from "react";
import { MockDataItem } from "../../../typings/Mockdata";
import { DefaultLayout } from "../../layouts/defaultLayout/DefaultLayout";
import { TextBlock } from "../textBlock/TextBlock";

interface ClassProps {
  item: MockDataItem;
}

export const Class: React.FC<ClassProps> = ({ item }) => {
  console.log(item);

  const [answers, setAnswers] = useState<string[]>([]);
  const [inputAnswer, setInputAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  console.log(answers);

  const handleRadioChange = (radioId: string) => {
    setAnswers((prevAnswers) => {
      const question = item.questions?.find((q) =>
        q.answers.some((answer) => answer.id === radioId)
      );

      if (question) {
        const existingAnswerIndex = prevAnswers.findIndex((id) =>
          question.answers.some((answer) => answer.id === id)
        );

        if (existingAnswerIndex !== -1) {
          // Replace the existing answer
          const newAnswers = [...prevAnswers];
          newAnswers[existingAnswerIndex] = radioId;
          return newAnswers;
        } else {
          // Add the new answer
          return [...prevAnswers, radioId];
        }
      }
      return prevAnswers;
    });
  };

  const handleValidations = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputAnswers: { [key: string]: string } = {}; // Object to store input answers

    // Collect input answers
    const formData = new FormData(e.currentTarget);
    formData.forEach((value, key) => {
      inputAnswers[key] = value.toString();
    });

    // Add matching input answers to the answers array
    item.questions?.forEach((question) => {
      question.answers?.forEach((answer) => {
        if (inputAnswers[question.question] === answer.answer) {
          setAnswers((prevAnswers) => [...prevAnswers, answer.id]);
        }
      });
    });

    // Filter correct answers
    const correctAnswers = item.questions?.filter(
      (question) =>
        question.answers?.filter(
          (answer) =>
            answer.correct &&
            (answers.includes(answer.id) ||
              inputAnswers[question.question] === answer.answer)
        ).length > 0
    );

    if (correctAnswers && correctAnswers.length === item.questions?.length) {
      setIsCorrect(true);
      alert("Všechny odpovědi jsou správné!");
    } else {
      setIsCorrect(false);
      alert("Některé odpovědi jsou špatně!");
    }
  };

  return (
    <DefaultLayout title={item.title} image={item.image}>
      <div className="body">
        {!isCorrect ? (
          <>
            <TextBlock
              showTitle={"classtitle"}
              description={item.description}
            />
            <form className="form" onSubmit={handleValidations}>
              {item.questions?.map((question, qIndex) =>
                question.type === "click" ? (
                  <div className="form__question" key={qIndex}>
                    <h1 className="form__title">{question.question}</h1>
                    <div className="form__radios__wrapper">
                      {question.answers?.map((answer, aIndex) => (
                        <div className="form__radio" key={aIndex}>
                          <input
                            type="radio"
                            id={answer.id}
                            name={question.question}
                            onChange={() => handleRadioChange(answer.id)}
                          />
                          <label htmlFor={answer.id}>{answer.answer}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : question.type === "write" ? (
                  <div className="form__question" key={qIndex}>
                    <h1 className="form__title">{question.question}</h1>
                    <input
                      className="form__input"
                      placeholder="Napište odpověď"
                      type="text"
                      id={question.question}
                      name={question.question}
                      value={inputAnswer}
                      onChange={(e) => setInputAnswer(e.target.value)}
                    />
                  </div>
                ) : null
              )}
              <button className="choisebutton" type="submit">
                Potvrdit odpovědi
              </button>
            </form>
          </>
        ) : (
          <TextBlock
            showTitle={"correctanswers"}
            description={item.instructions}
          />
        )}
      </div>
    </DefaultLayout>
  );
};
