import styled from "styled-components";
import { bg1 } from "../../img";

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
            opacity: 50%;
          }
        }

        .subtitle {
          font-size: 1.1vw;
          text-align: justify;
          text-align-last: center;
          align-self: center;
          color: #fbce33;
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
      margin: 0 auto;
    }

    .awards {
      background-color: #d9e0e8;
      display: flex;
      justify-content: center;
      height: 45vw;

      .content {
        background-color: #1f1f29;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 3vw;
        padding: 5%;
        color: white;

        .title {
          display: flex;
          flex-direction: column;
          gap: 1vw;
          h2 {
            font-size: 2.5vw;
            text-transform: uppercase;
            font-weight: 500;
            font-family: "Rubik", sans-serif;
          }
          hr {
            border: 0.1px solid #fbce33;
          }
        }

        p {
          text-align: justify;
          text-align-last: left;
          font-size: 1.5vw;
          font-family: "Rubik", sans-serif;
        }
      }

      .gallery {
        background-color: #d9e0e8;
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20%;
        padding: 5%;
      }
    }
  }
`;
