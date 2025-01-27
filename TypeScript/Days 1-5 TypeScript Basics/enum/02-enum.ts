// Create an enum called HttpStatus with the following values:

    // OK = 200
    // Created = 201
    // BadRequest = 400
    // Unauthorized = 401

// Print the status code for BadRequest.
// Write a function that accepts an HTTP status code and returns status

enum HttpStatus{
    OK = 200,
    Createed = 201,
    BadRequest = 400,
    Unauthorized = 401
}

function http_code(code: number){
    console.log(HttpStatus[code])
}

http_code(400)
console.log(HttpStatus.BadRequest);