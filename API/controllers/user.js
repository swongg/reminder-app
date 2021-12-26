const User = require("../models/user");

async function getUserById(id) {
  return await User.findById(id).exec();
}

async function getUserByEmail(email) {
  return await User.findOne({ email }).exec();
}

async function createUser({
  firstName,
  lastName,
  email,
  password,
  providerId,
  provider,
}) {
  return new Promise(async (resolve, reject) => {
    const user = await User.findOne({ email });

    if (user) {
      reject("Email is already in use");
    }

    resolve(
      await User.create({
        providerId,
        provider,
        firstName,
        lastName,
        email,
        password,
      })
    );
  });
}

module.exports = { getUserById, getUserByEmail, createUser };
