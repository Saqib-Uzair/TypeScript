// Intersection with Optional Properties


interface User {
    id: number;
    username: string;
}

interface Profile {
    bio?: string;
    profilePicture?: string;
}


type UserProfile = User & Profile;

let up: UserProfile = {
    id: 25,
    username: "Saqib Uzair",
    bio: "Engineer", // optional properties
    profilePicture: "Picture" // optional properties
}


console.log(up);
