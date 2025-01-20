import { readFileSync,writeFileSync } from "fs";

// writing to a file

writeFileSync("src/data.txt", "Hello, fs module typescript with node.js");

// reading from a file

const data = readFileSync("src/data.txt", "utf-8");
console.log("File Content:", data);