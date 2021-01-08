const express = require("express");
const router = express.Router();
const hero = require("../controllers/hero");

router.get("/", hero.getAll);
router.put("/", hero.update);

module.exports = router;