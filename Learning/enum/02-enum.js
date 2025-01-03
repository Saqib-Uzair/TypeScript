// Create an enum called HttpStatus with the following values:
// OK = 200
// Created = 201
// BadRequest = 400
// Unauthorized = 401
// Print the status code for BadRequest.
// Write a function that accepts an HTTP status code and returns status
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["Createed"] = 201] = "Createed";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
})(HttpStatus || (HttpStatus = {}));
function http_code(code) {
    console.log(HttpStatus[code]);
}
http_code(400);
console.log(HttpStatus.BadRequest);
