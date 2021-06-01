import React from "react";
import Dropdown from "../Dropdown";
import Header from "../Header";

import { Container } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Dropdown />
    </Container>
  );
};

export default Layout;
