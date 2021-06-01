import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: rgba(0, 0, 255, 0.5);
  color: rgb(0, 0, 200);
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  button {
    background: transparent;
    color: rgb(0, 0, 200);
  }

  button:hover {
    background: red;
    color: white;
  }

  img {
    width: 105%;
  }

  p {
    font-size: 1.2rem;
    margin: 10px;
    text-align: center;
  }

  h1 {
    font-family: "Press Start 2P";
    font-size: 1.5rem;
    margin: 15px;
    text-align: center;
    text-transform: capitalize;
  }

  h3 {
    font-weight: normal;
    text-transform: capitalize;
  }
`;
