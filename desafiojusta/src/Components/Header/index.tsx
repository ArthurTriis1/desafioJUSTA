import React from "react";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div className="background">
        <header data-testid="header-home" className="banner" /> 
      </div>      
    </Container>
  );
};

export default Header;