function responseFailure(res, status, failureMessage, failureResult) {
    return res.status(status).json({
        status: status,
        successResult:{},
        failureMessage: failureMessage,
        failureResult: failureResult
    });
}
function responseSuccess(res, status, successResult) {
    return res.status(status).json({
        status: status,
        successResult:successResult,
        failureMessage: "",
        failureResult: {}
    });
}



module.exports = {
    responseFailure: responseFailure,
    responseSuccess: responseSuccess
}