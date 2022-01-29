var http = require('http');

const app = http.createServer(function (req, res) {   
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write("{response:'Hello World'}");
    res.end();
});

app.listen(8080);

console.log('Serving on port 8080')