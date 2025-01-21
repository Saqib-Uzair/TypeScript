// An enum for different order statuses: Pending, Shipped, Delivered, Cancelled.

enum Order{
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}


console.log(Order.Pending);