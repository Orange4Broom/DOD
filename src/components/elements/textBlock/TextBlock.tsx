import stairs from "../../../../public/assets/images/stairs.png";
import "./textBlock.scss";

interface TextBlockTypes {
  showTitle: string;
  description: string | undefined;
}

export const TextBlock: React.FC<TextBlockTypes> = ({
  showTitle,
  description,
}) => {
  return (
    <div className="textblock">
      {showTitle === "howitworks" ? (
        <h1 className="textblock__title">Jak naše apka funguje?</h1>
      ) : showTitle === "goodchoise" ? (
        <h1 className="textblock__title">Skvělá volba!</h1>
      ) : showTitle === "classtitle" ? (
        <h1 className="textblock__title">Jak zde probíhá výuka?</h1>
      ) : showTitle === "correctanswers" ? (
        <h1 className="textblock__title">Skvělá práce, vše máš správně!</h1>
      ) : null}
      <p className="textblock__description">{description}</p>

      {showTitle === "goodchoise" && (
        <div className="textblock__image__wrapper">
          <img className="textblock__image" src={stairs} alt="stairs" />
        </div>
      )}
    </div>
  );
};
