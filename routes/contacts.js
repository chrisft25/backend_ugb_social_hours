const express = require("express");
const router = express.Router();
const contacts = require("../controllers/contacts");

router.get("/", contacts.getAll);
router.post("/", contacts.create);
router.put("/", contacts.update);
router.delete("/", contacts.delete);

module.exports = router;