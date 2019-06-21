import * as React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";
import Discover from "../pages/Discover";

export default function Page() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact={true} path="/" component={Discover} />
      </Switch>
    </>
  );
}
