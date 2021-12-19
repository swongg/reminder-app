const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("AUTH");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  return res.status(200).json({ success: true, data });
});

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  return res.status(200).json({ success: true, data: null });
});

module.exports = router;
