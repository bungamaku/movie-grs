import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import "../../styles/index.css";

import MovieCard from "./index";

storiesOf("MovieProject/Discover/MovieCard", module).add("Example Movie Card", () => (
  <BrowserRouter>
    <MovieCard />
  </BrowserRouter>
));
