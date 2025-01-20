import path from "path";

const filePath = path.join(__dirname,"data.txt");

// console.log("File Path:",filePath);

// console.log("File Extension:",path.extname(filePath));

console.log("File Name:",path.basename(filePath));