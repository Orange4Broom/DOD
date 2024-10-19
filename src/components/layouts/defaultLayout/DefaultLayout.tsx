import { ReactNode } from "react";
import { Footer } from "../../blocks/footer/Footer";
import { Header } from "../../blocks/header/Header";
import { Navigation } from "../../blocks/navigation/Navigation";

import "./defaultLayout.scss";

interface DefaultLayoutProps {
  title: string;
  image: string;
  children: ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  title,
  image,
  children,
}) => {
  return (
    <>
      <div className="pcoverlay">
        <h1>Aplikace je pouze přístupná pro mobilní zařízení 😎</h1>
      </div>
      <div className="layout">
        <Navigation />
        <Header title={title} image={image} />
        {children}
        <Footer />
      </div>
    </>
  );
};
