import React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <Switch>
      <Route path="/" component={RecipePage} />
    </Switch>
  );
}

export default App;
