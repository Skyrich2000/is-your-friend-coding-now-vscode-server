var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/coding", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/coding", function (req, res, next) {
  const { user } = req.body;

  res.send(`respond with a resource ${user}`);
});

module.exports = router;
