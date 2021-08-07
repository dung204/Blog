const express = require("express");
const router = express.Router(); // a router aka. a dispatcher
const newsController = require("../app/controllers/NewsController"); //instance from a class contain function handlers

router.get("/:slug", newsController.showDetails);
router.get("/", newsController.index);

module.exports = router; 