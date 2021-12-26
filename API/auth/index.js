const { setup } = require("./utils");
const { JWTStrategy } = require("./strategies");

const pipe =
  (...functions) =>
  (args) =>
    functions.reduce((arg, fn) => fn(arg), args);

const initializeAuthentication = (app) => {
  setup();

  pipe(JWTStrategy)(app);
};

module.exports = { initializeAuthentication };
