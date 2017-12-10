var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var https = require('https');
var Client = require('node-rest-client').Client;

var client = new Client();


app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.get('/', function(request,response)
	   {
	console.log("In the '/' path...");
  response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
    });

app.post('/submit',function(request,response){

  console.log("Submitting the request..");
  console.log("Request Body received:");
	console.log(request.body);
  headers = {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Authorization': 'Bearer N7HKwqlUpMb4yDt0p4mRASmCVoru8QOXlMyMRihzablGBTQe17x+WW+iDV+bmxgfw2/IUaqWFiY9jzhBQCQDLg=='
	};
	method = "POST";
	host = "ussouthcentral.services.azureml.net";
	path = "/workspaces/87d2d38691514eac8f0baa4409e6bab3/services/64590943a7874f68a81d11e126df9c6f/execute?api-version=2.0&details=true";

	var args = {
	 host: host,
	 method: method,
	 headers: headers,
	 path: path,
	 data: JSON.stringify(request.body)
 };
 var url = "https://"+host+path;
 client.post(url,args,function(data,response){
	 console.log("XHR Response"+response);
 });

 client.registerMethod("postMethod", url, "POST");

 client.methods.postMethod(args, function (data, response) {
	 console.log("XHR Response"+response);
 });


console.log("===== OPTIONS DATA========");
console.log(args);
 var req = https.request(args, function(res) {
	 console.log("Inside the response....");
	res.setEncoding('utf-8');
	console.log(res);
	var responseString = '';

	// res.on('data', function(data) {
	// 	responseString += data;
	// });
  //
	// res.on('end', function() {
	//  console.log(responseString);
	//  var responseObject = JSON.parse(responseString);
	//  success(responseObject);
	//  });
	// });
  //
	// req.write(dataString);
	// req.end();
},
function(err){
	console.log(err);
});

	console.log("Completed...");
  response.json("true");
});

app.listen(8888);
console.log("Running on port 8888");
