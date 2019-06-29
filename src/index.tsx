/*
 * index.tsx
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 3rd 2019
 * -----
 * Last Modified: June 21st 2019
 * Modified By: Bunga Amalia Kurniawati (bungasokia@gmail.com)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";

import { MovieProject } from "./apps/MovieProject";
import { Nested } from "./apps/Nested";
import { Root } from "./apps/Root/Root";
import { Separated } from "./apps/Separated";
import { ENV, initGlobalVar } from "./common/constants/index";

const { GRAPHQL_URL } = ENV;
initGlobalVar();

// React render test
ReactDOM.render(<MovieProject />, document.getElementById("root"));

console.log("graphql", GRAPHQL_URL);

// Deliberate runtime error to see if the output sourcemap is correct
const asu = (x: number): undefined | { a: number } => {
  return x > 0 ? { a: x } : undefined;
};
const retval = asu(0);
console.log(retval!.a);
