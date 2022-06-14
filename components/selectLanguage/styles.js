import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  transform: scale(1vw);

  .select {
    display: flex;
    align-items: center;
    gap: 0.5vw;
    padding: 0.25vw 0.5vw;
    border: 1px solid #fff;
    transform: scale(1vw);
  }

  .options {
    position: absolute;
    left: 20vw;
    top: 1.25vw;
    z-index: 1;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1vw;
    border: 1px solid #fff;
    background-color: rgba(0, 0, 0, 0.7);

    .option {
      padding: 0.25vw 0.5vw;
      &:hover {
        background-color: #fff;
        color: black;
      }
    }
  }
`;
