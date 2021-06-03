import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(329.54deg, red 30%, #fcfcfc 60%);
  height: 100%;
  width: 100%;

  .cardDetailsContainer {
    align-items: center;
    background-image: url("https://pa1.narvii.com/6573/11b70c300551bf5a92d4474fbf7035d5a5787b84_hq.gif");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: rgb(200, 0, 0);
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    max-width: 100vw;
    overflow: hidden;
  }

  input {
    padding: 1rem;
    position: absolute;
    width: 10rem;
  }

  img {
    width: 40vw;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: normal;
  }

  p:last-child {
    margin-bottom: 1.5rem;
  }

  h1 {
    font-family: "Press Start 2P";
    font-size: 2rem;
    margin-top: 3rem;
    text-align: center;
    text-transform: capitalize;
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 25px;
    text-transform: capitalize;
  }

  h3:last-child {
    margin-top: 10px;
  }

  @media screen and (max-width: 1024px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
      position: relative;
      width: 20vw;
    }

    .cardDetailsContainer {
      height: 75%;
      width: 90vw;
    }
  }
`;
