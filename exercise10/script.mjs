import fs from "node:fs";

const text = "Hello World!";
fs.writeFile("message.txt", text, "utf8", (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
});