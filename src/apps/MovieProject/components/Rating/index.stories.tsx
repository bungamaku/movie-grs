import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import "../../styles/index.css";

import Rating from "./index";

storiesOf("MovieProject/Discover/MovieCard/Rating", module).add("Rating point: 8.5", () => (
  <BrowserRouter>
    <Rating ratingPoint={8.5} />
  </BrowserRouter>
));

storiesOf("MovieProject/Discover/MovieCard/Rating", module).add("Rating point: 3", () => (
  <BrowserRouter>
    <Rating ratingPoint={3} />
  </BrowserRouter>
));
