import GasosLogo from "../../../../public/assets/images/logo.png";
import { Icon } from "../../elements/icon/Icon";
import "./navigation.scss";

export const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <img className="navigation__image" src={GasosLogo} alt="Gasos Logo" />
      <Icon name={"bars"} type={"fas"} color="#FFF" />
    </nav>
  );
};
