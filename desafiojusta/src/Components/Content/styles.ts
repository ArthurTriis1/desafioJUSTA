import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://pa1.narvii.com/6573/11b70c300551bf5a92d4474fbf7035d5a5787b84_hq.gif');
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