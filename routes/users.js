var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/coding", function (req, res, next) {
	const data = JSON.parse(fs.readFileSync("./coding.json", "utf8")) ?? [];

	res.send(data);
});

router.post("/coding", function (req, res, next) {
	const { user } = req.body;

	if (!user) {
		return res.send("");
	}

	const data = JSON.parse(fs.readFileSync("./coding.json", "utf8")) ?? [];

	data.push(user)

	fs.writeFileSync("./coding.json", JSON.stringify(data))

	res.send(data);
});

module.exports = router;
