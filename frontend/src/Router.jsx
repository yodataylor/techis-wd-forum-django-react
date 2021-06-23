import React from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import About from "./containers/About";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
      </Switch>
    </>
  );
};
export default Router;
