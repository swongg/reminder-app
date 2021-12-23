const { model, Schema } = require("mongoose");


const user = new Schema({
  email: String,
  reminders: [],
});

module.exports = model("user", user);


