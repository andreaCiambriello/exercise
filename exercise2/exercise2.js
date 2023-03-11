const crypto = require("crypto");

const id = crypto.randomBytes(4).toString("hex");

console.log(id);