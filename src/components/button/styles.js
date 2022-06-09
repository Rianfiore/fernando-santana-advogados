import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  padding: 1vw 1vw;
  background-color: transparent;
  color: #fbce33;
  border-color: #fbce33;
  text-transform: uppercase;
  font-size: 1.2vw;
  letter-spacing: 0.25vw;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(105%);
  }
`;
