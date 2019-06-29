import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import "../../styles/index.css";

import SearchBar from "./index";

storiesOf("MovieProject/Discover/NavBar/SearchBar", module).add("Example Search Bar", () => (
  <BrowserRouter>
    <SearchBar />
  </BrowserRouter>
));
