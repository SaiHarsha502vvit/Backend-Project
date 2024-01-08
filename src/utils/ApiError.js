/*
    Here in this file we are creating a 
    Standard Error Message 
    so That We can Find Where we went Wrong 
    while Connecting 
    This is Very Helpful....

    Here this ApiError Class Extends Error Class of JavaScript 
    And then We are overriding the Consturctor and 
    Adding Some Parameter that should be taken 
    Fist is Statuscode Which tells reason of Error 
    message which we used as Dafualt parameter and 
    Errors array where the errors are listed 
    and then Stack 

    // 1. Informational responses ( 100- 199)
    // 2. Successful responses ( 200- 299)
    // 3. Redirection messages ( 300- 399 )
    // 4. Client error responses ( 400- 499 )
    // 5. Server error responses ( 500 - 599 )
    
    


*/
class ApiError extends Error {
    constructor(statusCode,message = "Something Went Wrong",errors = [],stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
