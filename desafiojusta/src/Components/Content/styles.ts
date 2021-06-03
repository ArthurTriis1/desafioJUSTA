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
    flex-direction: column;
    height: 100%;
    justify-content: center;
    max-width: 100vw;
    overflow: hidden;
  }

  input {
    padding: 1rem;
    position: absolute;
    width: 10rem;
  }

  img {
    width: 33vw;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    font-weight: normal;
  }

  p:last-child {
    margin-bottom: 1.5rem;
  }

  h1 {
    font-family: "Press Start 2P";
    font-size: 1.5rem;
    margin-top: 3rem;
    text-align: center;
    text-transform: capitalize;
  }

  h3 {
    text-transform: capitalize;
  }

  h3:last-child {
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    input {
      position: relative;
    }

    .cardDetailsContainer {
      height: 50%;
    }
  }
`;
