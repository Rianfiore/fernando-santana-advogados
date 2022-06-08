import styled from "styled-components";

export const Container = styled.div`
  header {
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    width: 100vw;
    height: 60px;
    padding: 0 10%;

    .content {
      display: grid;
      grid-template-columns: 25% 75%;
      align-items: center;
      margin: 0 auto;
      width: 100vw;
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
          li {
            text-transform: uppercase;
            cursor: pointer;
            transition: color 0.25s ease-in-out;
            &:hover {
              color: #fbce33;
            }
          }
        }
      }
    }
  }
`;
