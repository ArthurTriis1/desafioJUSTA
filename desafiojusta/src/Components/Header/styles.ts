import styled from "styled-components";

export const Container = styled.div`
  .background {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://st2.depositphotos.com/3213441/12022/v/600/depositphotos_120226584-stock-illustration-pokemon-go-pokeball-seamless-texture.jpg');
    width: 100vw;
  }
  header {
    background-image: url("https://i.pinimg.com/originals/c8/0f/09/c80f0914dfbd87a92c13abbef88dee82.gif");
    background-repeat: no-repeat;
    background-position: center center;
    height: 60vh;
    overflow: hidden;
    width: 90vw;
  }
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;