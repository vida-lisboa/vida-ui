import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const props = {
  title: "Vida Lisboa",
  logoSrc: "/logo.svg",
  useBrowserHistory: true,
  theme: {
    pageHeadingBackground: '#00a7b8',
  },
  pages: [
    {
      path: '/',
      title: 'Introduction',
      content: pageLoader(() => import("./WELCOME.md"))
    },
    {
      title: 'Basics',
      pages: [
        {
          path: "/basics/get-started",
          title: "Get started",
          content: pageLoader(() => import("./WELCOME.md"))
        },
        {
          path: "/basics/colors",
          title: "Colors",
          content: pageLoader(() => import("./basics/colors.md"))
        },
        {
          path: "/basics/typography",
          title: "Typography",
          content: pageLoader(() => import("./basics/typography.md"))
        },
      ]
    },
    {
      title: 'Components',
      pages: [
        {
          path: "/components/button",
          title: "Button",
          content: pageLoader(() => import('./components/button'))
        },
        {
          path: "/components/input",
          title: "Input",
          content: pageLoader(() => import('./components/input'))
        },
      ]
    }
  ]
};

ReactDOM.render(
  <Catalog {...props} />,
  document.getElementById("catalog")
);
