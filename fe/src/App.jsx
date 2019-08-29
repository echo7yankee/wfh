import React from "react";
//React router dom
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import Login from "./Components/auth/Login";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
