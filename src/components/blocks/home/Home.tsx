import React, { useState } from "react";
import scanQR from "../../../assets/images/scanqr.png";
import { MockDataItem } from "../../../typings/Mockdata";
import { TextBlock } from "../../elements/textBlock/TextBlock";
import { DefaultLayout } from "../../layouts/defaultLayout/DefaultLayout";

interface HomeProps {
  item: MockDataItem;
}

export const Home: React.FC<HomeProps> = ({ item }) => {
  const [choise, setChoise] = useState<number>(0);
  return (
    <DefaultLayout title={item.title} image={item.image}>
      <div className="body">
        {choise === 0 ? (
          <>
            <TextBlock
              showTitle={"howitworks"}
              description={item.description}
            />
            <span className="body__image__wrapper">
              <img className="body__image" src={scanQR} alt="scanqr" />
            </span>
            <div className="choisebuttons__wrapper">
              <h1 className="choisebuttons__title">
                Vyber si co tě více zajímá?
              </h1>
              <button
                className="choisebutton"
                onClick={() => {
                  setChoise(1);
                  scroll(0, 0);
                }}
              >
                Zajímají mě počítače?
              </button>
              <button
                className="choisebutton"
                onClick={() => {
                  setChoise(2);
                  scroll(0, 0);
                }}
              >
                Zajímají mě peníze a finance?
              </button>
            </div>
          </>
        ) : choise === 1 ? (
          <TextBlock
            showTitle={"goodchoise"}
            description={item.instructionsForIT}
          />
        ) : choise === 2 ? (
          <TextBlock
            showTitle={"goodchoise"}
            description={item.instructionsForLice}
          />
        ) : null}
      </div>
    </DefaultLayout>
  );
};
