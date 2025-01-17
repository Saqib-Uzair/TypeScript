// You're working on a user management system and need to handle user data safely. Implement the following:

//     Create an interface UserProfile with the properties:
//         id (number)
//         name (string)
//         email (string)
//         isAdmin (boolean, optional)

//     Write a function getUserProfile that returns an unknown type (simulating API response).

//     Use type assertion to cast the returned data into UserProfile.



interface UserProfile {
    id:number;
    name:string;
    email:string;
    isAdmin?:boolean;
}

function getUserProfile():unknown{
    return {
        id:234,
        name:"Saqib",
        email:"saqibuzair@gmail.com",
        isAdmin:true

    }
}

let data: unknown = getUserProfile();
let user = <UserProfile> data;
console.log(user.name);
console.log(user.email);
console.log(user.id);
console.log(user.isAdmin);
