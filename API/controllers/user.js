const User = require("../models/user");
import { User } from "../models/user";

getUserById = async(() => {
  return await User.findById(id).exec();
});

module.exports = { getUserById };
