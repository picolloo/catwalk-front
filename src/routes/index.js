import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import New from "../pages/New";
import Edit from "../pages/Edit";
import Details from "../pages/Details";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new" component={New} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
