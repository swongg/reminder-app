const auth = require("./auth");
const reminder = require("./reminder");

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("HELLO WORLD");
});

router.use("/auth", auth);
router.use("/reminder", reminder);

module.exports = router;
