import GasosLogo from "../../../assets/images/logo.png";
import "./navigation.scss";

export const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <img className="navigation__image" src={GasosLogo} alt="Gasos Logo" />
    </nav>
  );
};
