const express = require("express");
const router = express.Router();
const ReminderCtrl = require("../controllers/reminder");

router.get("/", (req, res, next) => {
  res.send("REMINDERS");
});

router.post("/:user", ReminderCtrl.create_reminder);

router.get("/:user", ReminderCtrl.get_reminders);

router.put("/:user/:id", ReminderCtrl.edit_reminder);

router.delete("/:user/:id", ReminderCtrl.delete_reminder);

module.exports = router;
