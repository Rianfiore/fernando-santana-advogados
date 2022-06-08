import styled from "styled-components";
import BG1 from "../../img/bg1.jpg";

export const Container = styled.div`
  main {
    width: 100%;
    height: 100vh;

    section {
      width: 100%;
      height: 100vh;

      .background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: url(${BG1}) no-repeat center;
        background-size: cover;
        filter: brightness(50%);
        box-shadow: 0 0 200px rgba(0, 0, 0, 0.9) inset,
          0 0 400px rgba(0, 0, 0, 0.9) inset, 0 0 800px rgba(0, 0, 0, 0.9) inset;
      }
    }
  }
`;
