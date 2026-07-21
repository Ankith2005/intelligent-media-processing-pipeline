const express = require("express");
const router = express.Router();

const { getResult } = require("../controllers/resultController");

router.get("/:processing_id", getResult);

module.exports = router;