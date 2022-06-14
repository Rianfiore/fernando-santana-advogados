import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-items: flex-start;
  justify-content: center;

  .button {
    position: relative;
    margin: 0 2%;
    margin-top: 10vw;
    height: 100%;
  }

  .buttonDisabled {
    position: relative;
    margin: 0 2%;
    margin-top: 10vw;
    height: 100%;

    div {
      button {
        opacity: 0.2;
        cursor: default;
        &:hover {
          transform: scale(1);
        }
      }
    }
  }

  .viewport {
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: ${(props) => (props.cards % 2 == 0 ? "100%" : "63%")};
    position: relative;
    top: -10vw;

    .contents {
      position: relative;
      display: flex;
      transform: translate(${(props) => props.directionAnimation}px, 0);
      transition: transform 0.5s ease-in-out;
      gap: 1vw;
      cursor: pointer;
    }
  }
`;
