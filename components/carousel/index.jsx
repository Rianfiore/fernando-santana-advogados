import * as S from "./styles";
import { Button } from "/components";
import { useRef, useState } from "react";

function Carousel({ children, length }) {
  const [carouselValue, setCarouselValue] = useState(0),
    contentsEl = useRef(null),
    buttonLeftEl = useRef(null),
    buttonRightEl = useRef(null);

  function calculateWidthCarousel(direction) {
    const contentsWidth = contentsEl.current.clientWidth,
      contentsLength = length,
      value = contentsWidth / contentsLength,
      limitCorrection =
        contentsLength % 2 === 0 ? value * 2 : value + value / 2,
      contentsLimit = contentsWidth / 2 - limitCorrection;

    switch (direction) {
      case "left":
        carouselValue < contentsLimit - value
          ? handleButtonStatus(carouselValue + value, false)
          : handleButtonStatus(contentsLimit, true);
        break;
      case "right":
        carouselValue > -contentsLimit + value
          ? handleButtonStatus(carouselValue - value, false)
          : handleButtonStatus(-contentsLimit, true);
        break;
      default:
        break;
    }
  }

  function handleButtonStatus(rangeLimit, isDisabled) {
    setCarouselValue(rangeLimit);
    rangeLimit <= 0 &&
      (isDisabled
        ? (buttonRightEl.current.className = "buttonDisabled")
        : (buttonRightEl.current.className = "button"));
    rangeLimit >= 0 &&
      (isDisabled
        ? (buttonLeftEl.current.className = "buttonDisabled")
        : (buttonLeftEl.current.className = "button"));
  }

  return (
    <S.Container directionAnimation={carouselValue} cards={length}>
      <span
        className="button"
        onClick={() => calculateWidthCarousel("left")}
        ref={buttonLeftEl}
      >
        <Button typeButton="slider" direction="left" arrowColor="#0f1115" />
      </span>
      <div className="viewport">
        <div className="contents" ref={contentsEl}>
          {children}
        </div>
      </div>
      <span
        className="button"
        onClick={() => calculateWidthCarousel("right")}
        ref={buttonRightEl}
      >
        <Button typeButton="slider" direction="right" arrowColor="#0f1115" />
      </span>
    </S.Container>
  );
}

export default Carousel;
