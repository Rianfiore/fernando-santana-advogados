import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: black;

  .about-us {
    display: flex;
    width: 100%;
    padding-top: 5vw;

    .content {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2vw;
      padding: 2.5%;

      .title {
        display: flex;
        flex-direction: column;
        gap: 0.5vw;

        h1 {
          font-size: 2.5vw;
          text-transform: uppercase;
        }

        hr {
          width: 20%;
        }
      }

      p {
        font-size: 1.5rem;
      }
    }

    .image {
      width: 50%;
      background-color: blue;
    }
  }

  .address {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .map {
      width: 100%;
      height: 40vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: red;

      .content {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-around;
        gap: 5vw;
        align-items: center;

        .lobby-photo {
          width: 15vw;
          height: 15vw;
          background-color: green;
        }

        .address-text {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1vw;
          top: 20vw;
          background-color: blue;
          padding: 2% 3%;
        }

        .title {
          position: relative;
          bottom: 20vw;
          background-color: black;
          padding: 2% 3%;
        }
      }
    }

    .cta-area {
      padding: 10vw;
    }
  }
`;
