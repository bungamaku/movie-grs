import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { MovieProject } from "./index";
import "./styles/index.css";

storiesOf("MovieProject", module).add("Discover Pages", () => (
  <BrowserRouter>
    <MovieProject />
  </BrowserRouter>
));
