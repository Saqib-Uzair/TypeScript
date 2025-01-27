// Enums (to avoid magic numbers)

enum Status {
    Active = 1,
    Inactive = 0
}

function getStatus(status: Status): string {

    return status === Status.Active? "Active": "Inactive";
}

let disp  = getStatus(Status.Active);

console.log(disp);