class ApiError extends Error {
    constructor(message = "An error occurred", code , errors = [], stack = ""){

        super(message)
        this.code = code
        this.data = null
        this.errors = errors
        this.success = false
        this.message = message


        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}