class ApiResponse {
    constructor(code, message = "success", data = null) {
        this.code = code
        this.message = message
        this.data = data
        this.success = code < 400
    }    
}