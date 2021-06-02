import styled from "styled-components";

export const Container = styled.div`
  select {
    border-radius: 10px;
    font-family: "Press Start 2P", sans-serif;
    font-size: 0.7rem;
    max-width: 80vw;
    text-align: center;
  }

  option:nth-child(even) {
    background: #fff;
  }

  option:nth-child(odd) {
    background: #ddd;
  }
`;
