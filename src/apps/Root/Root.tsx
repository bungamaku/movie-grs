/*
 * Root.tsx
 * Samples for:
 * - Lazy load
 * - Router
 * - Code-splitting:
 *   - TestRoute, TestRoute2, TestRoute3 are all using AnotherTest component.
 *   - TestRoute1, TestRoute2, TestRoute3 chunks will be generated.
 *   - AnotherTest will be grouped into one chunk with name: TestRoute1~TestRoute2~TestRoute3.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 28th 2019
 * -----
 * Last Modified: May 28th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";
import { Route, Router, Switch } from "react-router";
import { RootConfig } from "RootConfig";

import { Main } from "./components/Main";
import createBrowserHistory from "./helpers/history";

const TestRoute = import(/*webpackChunkName: "TestRoute1" */"./components/TestRoute");

const LoadableImport = RootConfig.loadable({
  loader: () => TestRoute,
});

const LoadableImport2 = RootConfig.loadable({
  loader: () => import(/*webpackChunkName: "TestRoute2" */"./components/TestRoute2"),
});

const LoadableImport3 = RootConfig.loadable({
  loader: () => import(/*webpackChunkName: "TestRoute3" */"./components/TestRoute3"),
});

const LoadableReject = RootConfig.loadable({
  loader: () => {
    if (Date.now() % 2 === 0) {
      return new Promise<{ default: any }>((resolve, _) => {
        setTimeout(() => resolve({ default: () => <div>asu</div> }), 500);
      });
    }

    return new Promise<{ default: React.ComponentType<any> }>((_, reject) => reject("Error"));
  },
});

const LoadableDirect = RootConfig.loadable({
  loader: () => new Promise<{ default: any }>((resolve, _) => {
    setTimeout(() => resolve({ default: () => <div>asu</div> }), 500);
  }),
});

export class Root extends React.Component<{}> {
  public render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/import" component={LoadableImport} />
          <Route exact={true} path="/importo" component={LoadableImport2} />
          <Route exact={true} path="/reject" component={LoadableReject} />
          <Route exact={true} path="/direct" component={LoadableDirect} />
        </Switch>
      </Router>
    );
  }
}
