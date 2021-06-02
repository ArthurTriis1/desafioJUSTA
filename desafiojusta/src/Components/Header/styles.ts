import styled from "styled-components";

export const Container = styled.div`
  header {
    background-image: url("https://i.pinimg.com/originals/c8/0f/09/c80f0914dfbd87a92c13abbef88dee82.gif");
    background-repeat: no-repeat;
    background-position: center center;
    height: 70vh;
    overflow: hidden;
    width: 80vw;
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

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
