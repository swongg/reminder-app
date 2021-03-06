require("./db/index");
const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { urlencoded, json } = require("body-parser");
const passport = require("passport");
const {initializeAuthentication} = require("./auth");
require("dotenv").config();
const routes = require("./routes");
const cors = require("cors");
const app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// add middleware
app.use(cors());
app.use(logger("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser());
app.use(passport.initialize());

initializeAuthentication(app);
app.use("/", routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
