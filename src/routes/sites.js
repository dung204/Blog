const express = require("express");
const router = express.Router();
const sitesController = require("../app/controllers/SitesController");

router.get("/home", sitesController.index);
router.get("/", sitesController.redirectToIndex); // Restricted to "/"

module.exports = router;