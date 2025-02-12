namespace Company{
    export namespace HR{
        export function getEmployeeCount():number{
            return 50;
        }
    }

    export namespace IT{
        export function getDevelopersCount():number{
            return 30;
        }
    }
}



console.log(Company.HR.getEmployeeCount());
console.log(Company.IT.getDevelopersCount());