import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import Mint from "./Mint";

const App = () => {
  
    return (
      <Switch>
        <Route exact path="/">
          <Mint/>
        </Route>
      </Switch>
    )
  
};

export default App;
