import styled from "styled-components";

export const Container = styled.div`
  li {
    font-size: clamp(10px, 1vw, 20px);
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    &:hover {
      color: #fbce33;
      transform: scale(105%);
      &:active {
        filter: brightness(75%);
      }
    }
  }
  header {
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) =>
      props.headerTransparent ? "transparent" : "#0f1115"};
    filter: ${(props) =>
      props.headerTransparent
        ? "none"
        : "drop-shadow(0px 5px 5px rgba(0,0,0,0.5))"};
    position: fixed;
    width: 100vw;
    height: 70px;
    padding: 0 10%;
    z-index: 1;
    transition: all 0.2s ease-in-out;
    hr {
      width: 100vw;
      background-color: ${(props) =>
        props.headerTransparent ? "transparent" : "white"};
      border: none;
      height: 0.2vw;
      transition: all 0.2s ease-in-out;
    }

    .content {
      display: grid;
      grid-template-columns: 25% 75%;
      align-items: center;
      margin: 0 auto;
      width: 100%;
      max-width: 1200px;
      height: 100%;
      .left-menu {
        display: flex;
        gap: 10%;
      }

      nav {
        .right-menu {
          display: flex;
          justify-content: end;
          gap: 10%;
        }
      }
    }
  }
`;
