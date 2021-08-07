// Other standalone branches
class SitesController {
  
  index(req, res) {
    res.render("contents/home");
  }

  redirectToIndex(req, res) {
    res.redirect("/home");
  }

}

module.exports = new SitesController;