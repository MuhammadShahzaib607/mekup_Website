export const createError = (status, message) => {
    const error = new Error();
    error.status = status;
    error.message = message;
    return error;
}

export const createSuccess = (status, message) => {
    const success = new Object();
    success.status = status;
    success.message = message;
    return success;
}