import styled from "styled-components";

export const Container = styled.div`
  .dropdown {
    width: 100%;
    position: relative;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5vw;
      padding: 5%;
      color: white;
      background-color: #0f1115;
      border: 1px solid white;
      width: 7vw;
      font-size: 0.9vw;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }

    .dropdown {
      background-color: #0f1115;
      border: 1px solid white;
      width: 100%;
      display: none;
      position: absolute;
      gap: 0.3vw;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5% 0%;

      .dropdown-item {
        width: 100%;
        color: white;
        text-align: center;
        text-transform: initial;
        font-size: 0.9vw;
      }
    }

    #dropdown-open {
      display: flex;
    }
    #dropdown-close {
      display: none;
    }
  }
`;
