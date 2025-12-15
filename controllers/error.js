// If you pass anything to the next() function (except the string 'route' or 'router'),
// Express regards the current request as being an error and will skip any remaining
// non-error handling routing and middleware functions.
// eslint-disable-next-line no-unused-vars
const errorHandler = async (error, req, res, next) => {
  // the following 3 lines only for development
  if (process.env.NODE_ENV === "development" && error.status === 404) {
    console.log(error.message); // log only Not Found and the path url if 404
  } else {
    console.log(error); // otherwise log the error
  }

  // for cases when we want to send success message despite of error
  // in backend.
  if (error.status === 200) {
    return res.status(200).json(error.message);
  }
  if (error.status === 404) {
    return res.status(404).json(error.message);
  }
  return res.status(error.status || 500).json({
    error: {
      message: error.message || "Oops! Something went wrong."
    }
  });
};

export default errorHandler;
