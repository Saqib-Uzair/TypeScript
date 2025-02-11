class Temperature{
    private _celsius:number;

    constructor (_celsius:number){
        this._celsius = _celsius;
    }


    // getter method celsius

    get celsius():number{
        return this._celsius;
    }


    // setter method celsius

    set celsius(value:number){
        this._celsius = value;
    }

    // getter method fahrenheit 

    get fahrenheit(){
        return ((this._celsius * 9/5) + 32 );
    }

    // setter method fahrenheit

    set fahrenheit(f_c:number){
        f_c = ((f_c-32) * 5/9);
        this._celsius=f_c;
        
    }

}

let temp = new Temperature(0);
console.log(temp.celsius);
console.log(temp.fahrenheit);