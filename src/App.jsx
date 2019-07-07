import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home } from "containers";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}

export default App;
