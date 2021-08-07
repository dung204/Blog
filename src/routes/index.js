const newsRouter = require("./news");
const loginRouter = require("./login");
const sitesRouter = require("./sites");

function route(app) {
  app.use("/news", newsRouter); //newsRouter is a dispatcher
  app.use("/login", loginRouter);
  app.use("/", sitesRouter); //Other standalone sitesController
}

module.exports = route;