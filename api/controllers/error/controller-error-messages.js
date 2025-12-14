export const errorMessagesForControllers = (title, next, status, addToDb, error) => {
    console.error(`Error in controller [${title}]:`, error);
    const err = new Error(error ? error.message : title);
    err.status = status;
    // addToDb is ignored in this simple implementation
    return next(err);
};
