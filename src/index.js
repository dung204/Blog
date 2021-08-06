const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP response logger
app.use(morgan("combined"));

// Template engine 
app.engine("hbs", handlebars({
  extname: ".hbs",
  partialsDir: path.join(__dirname, "resources/views/partials")
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routing
app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
})

// Start server
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
});