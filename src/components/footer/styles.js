import styled from "styled-components";

export const Container = styled.div`
  footer {
    background-color: #0f1115;
    height: 150px;
    padding: 0 10%;
    z-index: 1;

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
          li {
            font-size: clamp(10px, 1vw, 20px);
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
