import * as S from "./styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai/";

function Button({ typeButton, content, direction, arrowColor }) {
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
          <button className="textButton" aria-label="Acessar">
            {content}
          </button>
        </S.Container>
      );
    case "slider":
      return (
        <S.Container>
          <button className="sliderButton" aria-label="Próximo">
            {arrow()}
          </button>
        </S.Container>
      );
    default:
      return <h2>Erro: especifique a prop &quot typeButton &quot do botão</h2>;
  }
}

export default Button;
