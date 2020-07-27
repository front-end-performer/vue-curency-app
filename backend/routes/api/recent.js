const express = require("express");

const historyController = require("../../controllers/conversion-controllers");

const router = express.Router();

router.get("/", historyController.getHistorys);

module.exports = router;
