const router = require("express").Router();

router.get("/", (req, res) => {
    // req: request, res: response
    res.render("home.pug");
});

router.get("/about", (req, res) => {
    res.render("about.pug");
});

router.get("/location", (req, res) => {
    res.render("location.pug");
  });

router.get("/mission", (req, res) => {
    // req: request, res: response
    res.render("mission.pug");
  });


  router.get("/contact", (req, res) => {
    // req: request, res: response
    res.render("contact.pug");
  });

module.exports = router;