// basic error
try {
    throw new Error("Something went wrong!");
}
catch (error) {
    console.error("Caught an error:", error);
}
finally {
    console.log("This is optional: this will run no matter what");
}
