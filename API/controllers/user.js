const User = require("../models/user");

getUserById = async(() => {
  return await User.findById(id).exec();
});


module.exports = { getUserById };

