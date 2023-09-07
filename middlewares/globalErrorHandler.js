const globalErrorHandler = (err, req, res, next) => {
    // console.log(err);
    // Stack
    const stack = err.stack;
    // Actual message
    const message = err.message;
    // Status of message
    const status = err.status ? err.status : "Failed";
    const statusCode = err.statusCode ? err.statusCode : 500;

    res.status(statusCode).json({
        status,
        message,
        stack
    });
}

module.exports = globalErrorHandler;