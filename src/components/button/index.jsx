import * as S from "./styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai/";

export const Button = ({ typeButton, content, direction, arrowColor, ref }) => {
  console.log(ref);
  const arrow = () => {
    switch (direction) {
      case "left":
        return <AiOutlineArrowLeft color={arrowColor} size="2vw" />;
      case "right":
        return <AiOutlineArrowRight color={arrowColor} size="2vw" />;
      default:
        return <AiOutlineArrowRight color={arrowColor} size="2vw" />;
    }
  };

  switch (typeButton) {
    case "text":
      return (
        <S.Container>
          <button className="textButton">{content}</button>
        </S.Container>
      );
    case "slider":
      return (
        <S.Container>
          <button className="sliderButton">{arrow()}</button>
        </S.Container>
      );
    default:
      return <h2>Erro: especifique a prop "typeButton" do botão</h2>;
  }
};
