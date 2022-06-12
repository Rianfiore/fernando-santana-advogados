import styled from "styled-components";

export const Card = styled.div`
  * {
    font-family: "PlayFair Display", sans-serif;
    font-weight: 400;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3vw;
  background-color: ${(props) => props.bgColor};
  padding: 1%;
  padding-top: 1.5%;
  width: 20vw;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(105%);
    box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.2),
      -5px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;

    h2 {
      font-size: 1.25vw;
      text-align: center;
      text-transform: uppercase;
      color: #fbce33;
      letter-spacing: 0.3vw;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5vw;

    hr {
      width: 50%;
      border: 0.1px solid #fbce33;
    }
    p {
      text-align: justify;
      text-align-last: center;
      font-size: 0.9vw;
      letter-spacing: 0.05vw;
    }
  }
`;
