// An enum for different order statuses: Pending, Shipped, Delivered, Cancelled.
var Order;
(function (Order) {
    Order["Pending"] = "PENDING";
    Order["Shipped"] = "SHIPPED";
    Order["Delivered"] = "DELIVERED";
    Order["Cancelled"] = "CANCELLED";
})(Order || (Order = {}));
console.log(Order.Pending);
