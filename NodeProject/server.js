var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.get('/', function(request,response)
	   {
	console.log("In the '/' path...");
  response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
    });

app.get('/submit',function(request,response){
  console.log("Submitting the request..");
  console.log("Completed...");
  response.json("true");
});

app.listen(8888);
console.log("Running on port 8888");
