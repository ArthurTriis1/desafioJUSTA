import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PokePage from "./Pages/PokePage";
import DataProvider from "./Provider/Context";
import GlobalStyles from "./Styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/:pokemon" component={PokePage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </DataProvider>
  );
};

export default App;
