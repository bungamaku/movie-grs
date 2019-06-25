import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

// automatically import all files ending in *.stories.tsx
const req = require.context("../src/apps", true, /\.stories\.tsx$/);

addParameters({
  options: {
    theme: themes.dark
  }
});

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
