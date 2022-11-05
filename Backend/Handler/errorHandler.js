import AppError from "../utils/appError.js";

/**
 * This function is not used anywhere till now.
 * @param {Object} err 
 * @returns {Object} err
 */
const handleCastError = (err) => {
  const message = `Invalid ${err.path} : ${err.value}`;
  return new AppError(message, 400);
};

/**
 * This function will handle Duplicate entries to the database.
 * @param {Object} err 
 * @returns {Object} err
 */
const handleDuplicateDBError = (err) => {
  const value = err.errmsg.match(/(["'])(?:\\.|[^\\])*?\1/);
  const message = `Duplicate field Value : ${value}. please try with another`;
  return new AppError(message, 400);
};

/**
 * This function handles the case where the field validations fail.
 * @param {Object} err 
 * @returns {Object} err
 */
const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data : ${errors.join(". ")}`;
  return new AppError(message, 400);
};

/**
 * This function builds a error object and passes it in response object in Development Environment.
 * @param {Object} err 
 * @param {Object} res 
 */
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

/**
 * This function Function send error occurring in Prod Environment.
 * @param {Object} err 
 * @param {Object} res 
 */
const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    console.log("ERROR", err);
    res.status(500).json({
      status: "Fail",
      message: "Something went wrong"
    });
  }
};

/**
 * This function is responsible to for handling the all the mentioned above errors by routing them commonly.
 * @param {Object} err 
 * @param {Object} _req //This is not in use for now. 
 * @param {Object} res 
 * @param {Object} _next //This is not in use for now.
 */
const errorHandler = (err, _req, res, _next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    if (err.name == "CastError") error = handleCastError(err);
    if (err.code == 11000) error = handleDuplicateDBError(err);
    if (err.name == "ValidationError") error = handleValidationError(err);
    sendErrorProd(error, res);
  }
};

export default errorHandler;
