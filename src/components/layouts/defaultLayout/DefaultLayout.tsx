import { ReactNode } from "react";
import { Footer } from "../../blocks/footer/Footer";
import { Header } from "../../blocks/header/Header";
import { Navigation } from "../../blocks/navigation/Navigation";

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
    <div className="layout">
      <Navigation />
      <Header title={title} image={image} />
      {children}
      <Footer />
    </div>
  );
};
