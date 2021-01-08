const express = require("express");
const router = express.Router();
const cards = require("../controllers/cards");

router.get("/", cards.getAll);
router.post("/", cards.create);
router.put("/", cards.update);
router.delete("/", cards.delete);

module.exports = router;