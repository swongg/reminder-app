const auth = require("./auth");
const reminder = require("./reminder");

const express = require("express");
const router = express.Router();

router.use(`${process.env.BASE_API_URL}/auth`, auth);
router.use(`${process.env.BASE_API_URL}/reminder`, reminder);

module.exports = router;
