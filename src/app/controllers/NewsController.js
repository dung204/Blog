class NewsController {
  
  index(req, res) {
    res.render("contents/news");
  }

  showDetails(req, res) {
    res.send("NEWS DETAIL !!!");
  }

}

module.exports = new NewsController;