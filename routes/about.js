const express = require("express");
const router = express.Router();
const about = require("../controllers/about");

router.get("/", about.getAll);
router.put("/", about.update);

module.exports = router;