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
      {showTitle === "howitworks" && (
        <>
          <p className="textblock__title">Rozmístění</p>
          <p className="textblock__description">
            Po škole jsou rozmístěny QR kódy v jednotlivých učebnách a
            stanovištích. Návštěvníci je mohou skenovat pomocí svého telefonu.
          </p>
        </>
      )}
      {showTitle === "howitworks" && (
        <>
          <p className="textblock__title">QR kódy</p>
          <p className="textblock__description">
            Každý QR kód odemkne úkol spojený s konkrétní učebnou nebo částí
            školy. Úkoly jsou zaměřeny na objevování školního prostředí,
            vybavení a informací o jednotlivých oborech.
          </p>
        </>
      )}
      {showTitle === "howitworks" && (
        <>
          <p className="textblock__title">Trasa</p>
          <p className="textblock__description">
            Aplikace vede návštěvníky postupně přes jednotlivé části školy, čímž
            je provádí interaktivní trasou.
          </p>
        </>
      )}
      {showTitle === "howitworks" && (
        <>
          <p className="textblock__title">Pomoc</p>
          <p className="textblock__description">
            Po načtení QR kódu v učebně se zobrazí kvíz a po správném
            zodpovězení vám řekne kam jít dál do dalších učeben a když se
            zaseknete neváhejte se obrátit na učitele.
          </p>
        </>
      )}

      {showTitle === "goodchoise" && (
        <div className="textblock__image__wrapper">
          <img className="textblock__image" src={stairs} alt="stairs" />
        </div>
      )}
    </div>
  );
};
