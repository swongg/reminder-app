const { model, Schema } = require("mongoose");

const user = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  reminders: [],
});

module.exports = model("user", user);
