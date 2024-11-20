import { useState } from "react";
import { MockDataItem } from "../../../typings/Mockdata";
import { DefaultLayout } from "../../layouts/defaultLayout/DefaultLayout";
import { TextBlock } from "../textBlock/TextBlock";
import likeImage from "../../../assets/images/like.png";
import { QuestionRadio } from "../questionTypes/questionRadio/QuestionRadio";
import { QuestionText } from "../questionTypes/questionText/QuestionText";
import { useToastify } from '../../../hooks/useToastify';

interface ClassProps {
  item: MockDataItem;
}

export const Class: React.FC<ClassProps> = ({ item }) => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [inputAnswer, setInputAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const notify = useToastify().notify;

  console.log(answers);

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

    // Add matching input answers to the answers array
    item.questions?.forEach((question) => {
      question.answers?.forEach((answer) => {
        if (inputAnswer === answer.answer) {
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
            (answers.includes(answer.id) || inputAnswer === answer.answer)
        ).length > 0
    );

    if (correctAnswers && correctAnswers.length === item.questions?.length) {
      setIsCorrect(true);
      scroll(0, 0);
      notify("success", "Všechny odpovědi jsou správné! 😎");
    } else {
      setIsCorrect(false);
      notify("error", "Některé odpovědi jsou špatně! 😢");
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
                  <QuestionRadio
                    key={qIndex}
                    question={question}
                    qIndex={qIndex}
                    handleRadioChange={handleRadioChange}
                    answers={answers}
                  />
                ) : question.type === "write" ? (
                  <QuestionText
                    key={qIndex}
                    questionText={question.questionText}
                    inputAnswer={inputAnswer}
                    setInputAnswer={setInputAnswer}
                  />
                ) : null
              )}
              <button className="choisebutton" type="submit">
                Potvrdit odpovědi
              </button>
            </form>
          </>
        ) : (
          <>
            <TextBlock
              showTitle={"correctanswers"}
              description={item.instructions}
            />
            <div className="correctanswerlike">
              <img src={likeImage} alt="likeImage" />
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};
