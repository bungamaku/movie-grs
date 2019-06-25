import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Discover from "./index";
import "./styles/index.css";

storiesOf("MovieProject/Discover", module).add("Discover Pages", () => (
  <BrowserRouter>
    <Discover />
  </BrowserRouter>
));
