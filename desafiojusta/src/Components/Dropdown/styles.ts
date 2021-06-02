import styled from "styled-components";

export const Container = styled.div`
  select {
    background: transparent;
    border-radius: 10px;
    color: blue;
    font-family: "Press Start 2P", sans-serif;
    font-size: 1rem;
    height: 2.5rem;
    margin: 2rem;
    max-width: 80vw;
    text-align: center;
  }
  
  option:nth-child(even) {
    background: #fff;
  }

  option:nth-child(odd) {
    background: #ddd;
  }

  h1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: blue;
    font-family: "Press Start 2P";
    font-size: 1.2rem;
    margin: 10px;
  }
`;