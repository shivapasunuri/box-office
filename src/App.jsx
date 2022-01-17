import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <h1>This is home page</h1>
      </Route>
      <Route exact path="/stareda">
        This is stared page
      </Route>
      <Route>404 not found</Route>
    </Switch>
  );
}

export default App;
