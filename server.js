const http = require('http')
const hostname = '127.0.0.1'
const port = 3002;
const server= http.createServer(function(req,res){
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	console.log("in server");
	res.end('hello ubuntu\n');
});
server .listen(port, hostname, function(){
	console.log("server running at http://"+hostname+"/"+port+"/");
});
