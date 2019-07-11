import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
