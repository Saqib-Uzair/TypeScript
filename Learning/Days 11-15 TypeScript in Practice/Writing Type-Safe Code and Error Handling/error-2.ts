class MyCustomError extends Error {

    constructor(message:string){
        super(message);
        this.name = "MyCustomError";
    }
}

function doSomethingRisky(){

    throw new MyCustomError("This is a custom error");
}

try{
    doSomethingRisky();
} catch (error: unknown){
    if (error instanceof MyCustomError){
        console.error("Caught my custom error:",error.message);
    }
    else {
        console.error("An unknown error occurred");
    }
}

