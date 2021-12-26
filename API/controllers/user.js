const User = require("../models/user");

getUserById = () => {
  return User.findById(id).exec();
};

module.exports = { getUserById };
