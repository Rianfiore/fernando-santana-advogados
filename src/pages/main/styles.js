import styled from "styled-components";
import { bg1, mask } from "../../img";

export const Container = styled.div`
  main {
    width: 100%;

    .banner {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5vw;
      padding: 12.5% 0%;
      position: relative;
      top: -5vw;

      .background {
        position: absolute;
        width: 100%;
        height: 100vw;
        z-index: -1;
        background: url(${bg1}) no-repeat center;
        background-size: cover;
        filter: brightness(15%);
        box-shadow: 0 0 200px rgba(0, 0, 0, 0.9) inset,
          0 0 400px rgba(0, 0, 0, 0.9) inset, 0 0 800px rgba(0, 0, 0, 0.9) inset;
      }

      .textBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1vw;
        width: 70vw;

        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2vw;

          h1 {
            text-transform: uppercase;
            font-size: 2.5vw;
            font-weight: 400;
            letter-spacing: 0.5vw;
          }

          .prismIcon {
            img {
              width: 1vw;
            }
          }
        }

        .mainIcon {
          img {
            width: 20%;
            opacity: 75%;
          }
        }

        .subtitle {
          font-size: 1.1vw;
          text-align: justify;
          text-align-last: center;
          align-self: center;
          color: #fbd35e;
          width: 95%;
        }
      }
    }

    section {
      width: 100%;
      height: 100%;
    }
    .specialties {
      background-color: #0f1115;
      display: flex;
      justify-items: flex-start;
      justify-content: center;
    }
    .viewport {
      display: flex;
      justify-content: center;
      overflow: hidden;
      width: 85%;
      position: relative;
      top: -10vw;
      mask: url(${mask}) no-repeat center;
      mask-size: 90% 100%;

      .contents {
        position: relative;
        display: flex;
        justify-content: space-evenly;
        animation: slideOn 20s ease-in-out infinite;
        animation-play-state: ${(props) =>
          props.hoverAnimation ? "paused" : "running"};
      }
      cursor: pointer;

      @keyframes slideOn {
        0% {
          left: -100%;
        }
        50% {
          left: 100%;
        }
        100% {
          left: -100%;
        }
      }
    }
    .awards {
      background-color: #d9e0e8;
      display: flex;
      justify-items: flex-start;
      justify-content: center;
      height: 50vw;
    }
  }
`;
