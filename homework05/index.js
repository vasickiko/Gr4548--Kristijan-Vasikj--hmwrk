const http = require("http");

const server = http.createServer((req, res) => {
if (req.method === "POST" && req.url === "/user") {
    let data = "";

    req.on("data", (chunk) => {
    data += chunk;
    });

    req.on("end", () => {
    try {
        const parsedBody = JSON.parse(data); 
        const username = parsedBody.username;

        if (!username) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            return res.end(`Check if you spelled "username" right.`);
        }

        const usernamePattern = /^[a-zA-Z\d]{5,15}$/;

        if (usernamePattern.test(username)) {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(`Hello --> ${username}`);
        } else {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("Invalid username format.");
        }
    } 
    catch (error) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Error: " + error.message); 
    }
    });
} else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Hello World!");
}
});

server.listen(3000, () => console.log("Server started at port 3000!"));




// phone = "+389 123-123-123";
// pattern = /^\+389 \d{2}-\d{3}-\d{3}$/;

// address = Street Name 123, cityName
// pattern = /^[A-Za-z\s]+ \d{1,3}, [A-Za-z\s]+$/
