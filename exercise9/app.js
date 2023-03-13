const { createServer } = require("node:http");

function createApp() {
    return createServer((request, response) => {
        response.statusCode = 200;

        response.setHeader("Content-Type", "text/html");

        response.end("<html><div><h1>Welcome to the World Wide Web!</h1></div></html>");
    });
}

module.exports = createApp;