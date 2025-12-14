export default (err, req, res, next) => {
    // if header was already sent, delegate to default express error handler
    if (res.headersSent) {
        return next(err);
    }

    // log the error
    console.error('Error:', err);

    // set status code
    const statusCode = err.status || 500;
    res.status(statusCode);

    // determine error message
    const message = err.message || 'An unexpected error occurred';

    // send response
    res.json({
        status: statusCode,
        message: message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};
