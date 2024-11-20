import { ReactNode } from "react";
import { Footer } from "../../blocks/footer/Footer";
import { Header } from "../../blocks/header/Header";
import { Navigation } from "../../blocks/navigation/Navigation";

import "./defaultLayout.scss";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
