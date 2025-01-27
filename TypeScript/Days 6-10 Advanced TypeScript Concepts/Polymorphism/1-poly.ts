// compiled time polymorphism

class Calculator{
    
    add (a:number, b:number): number;
    add (a:string, b:string): string;
    add (a:any, b:any){
        return a+b;
    }
}

const cal = new Calculator();
console.log(cal.add(1,2));
console.log(cal.add("Hello"," World"));