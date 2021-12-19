const auth = require("./auth");
const reminder = require("./reminder");

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("HELLO WORLD");
});

// router.use(`${process.env.BASE_API_URL}/auth`, auth);
// router.use(`${process.env.BASE_API_URL}/reminder`, reminder);
router.use("/auth", auth);
router.use("/reminder", reminder);



module.exports = router;
