import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(329.54deg, #fff 30%, red 60%);
  height: 30vh;
  padding-top: 1.5rem;
  width: 100%;

  select {
    background: transparent;
    border-radius: 10px;
    font-family: "Press Start 2P", sans-serif;
    font-size: 1rem;
    height: 2.5rem;
    margin: 2rem;
    max-width: 85vw;
    overflow: hidden;
    padding-left: 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
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
    font-family: "Press Start 2P";
    font-size: 1.2rem;
    justify-content: center;
    margin: 10px;
  }

  @media screen and (max-width: 320px) {
    h1 {
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0.5rem;
    }

    select {
      font-size: 0.8rem;
      width: 80%;
    }
  }
`;
