import React from "react";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <header className="banner" />
      <h1>Seja bem vindo(a), Treinador(a) Pokémon</h1>
    </Container>
  );
};

export default Header;
