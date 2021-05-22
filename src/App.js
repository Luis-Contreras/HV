import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import HV from "./Pages/HV";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HV} />
      </Switch>
    </Router>
  );
};

export default App;
