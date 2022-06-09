import * as S from "./styles";

export const Card = ({ color, icon, title, subtitle, children }) => {
  const changeColor = () => {
    switch (color) {
      case "primary":
        return "#15142b";
      case "secondary":
        return "#1f1f29";
      default:
        return "#1d1b38";
    }
  };

  return (
    <S.Card bgColor={changeColor}>
      <div className="title">
        {icon}
        <h2>{title}</h2>
      </div>
      <div className="content">
        <hr></hr>
        <p>{subtitle}</p>
        {children}
      </div>
    </S.Card>
  );
};
