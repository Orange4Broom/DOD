import "./header.scss";

interface HeaderProps {
  title: string;
  image: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { title, image } = props;
  return (
    <header className="header">
      <img className="header__image" src={image} alt="image" />
      <div className="header__overlay"></div>
      <h1 className="header__title">{title}</h1>
    </header>
  );
};
