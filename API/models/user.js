const { model, Schema } = require("mongoose");

const user = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  providerId: String,
  provider: String,
  reminders: [],
});

module.exports = model("user", user);

