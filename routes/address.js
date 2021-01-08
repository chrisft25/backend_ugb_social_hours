const express = require("express");
const router = express.Router();
const address = require("../controllers/address");

router.get("/", address.getAll);
router.put("/", address.update);

module.exports = router;