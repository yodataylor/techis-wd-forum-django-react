import React from "react";
import { Route, Switch } from "react-router";
import { Home, Edit } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route path={"/edit(/:id)?"} component={Edit} />
    </Switch>
  );
};
export default Router;
