class LoginController {

  index(req, res) {
    res.render("contents/login")
  }

  result(req, res) {
    res.send("<h1>You've submitted the form</h1>");
    console.log(req.body);
  }

}

module.exports = new LoginController;