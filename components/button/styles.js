import styled from "styled-components";

export const Container = styled.div`
  button {
    display: flex;
    justify-content: center;
    padding: 1vw 1vw;
    background-color: transparent;
    color: #fbce33;
    border-color: #fbce33;
    text-transform: uppercase;
    font-size: 1.2vw;
    font-weight: 600;
    letter-spacing: 0.25vw;
    cursor: pointer;
  }

  .textButton {
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(105%);
      background-color: #fbce33;
      color: #15132b;
      &:active {
        transition: none;
        filter: brightness(75%);
      }
    }
  }

  .sliderButton {
    border-radius: 100%;
    border: none;
    background-color: #fbce33;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(115%);
      &:active {
        transition: none;
        transform: scale(100%);
        filter: brightness(75%);
      }
    }
  }
`;
