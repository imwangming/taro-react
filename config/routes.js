const routesTransform = require("../routesTransform");

const routes = [
  {
    title: "้ฆ้กต",
    path: "pages/home/index",
  },
  {
    title: "ๆ็",
    path: "pages/personal/index",
  },
];

module.exports = routesTransform(routes);
