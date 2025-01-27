// Enums (to avoid magic numbers)
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 0] = "Inactive";
})(Status || (Status = {}));
function getStatus(status) {
    return status === Status.Active ? "Active" : "Inactive";
}
var disp = getStatus(Status.Active);
console.log(disp);
