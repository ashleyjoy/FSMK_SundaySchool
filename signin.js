var http=require('http');
var express=require('express');
var bodyparser=require('body-parser');
var app=express();
app.use(express.static('./public'));
app.use(bodyparser.urlencoded({extended:true,}));
app.use(bodyparser.json());
app.post('/signin',function(req,res){
	console.log("does not run until some1 ppsts data");
	console.log("postin data");
console.log(req.body.name);
console.log(req.body.password);
	});


app.post('/signup',function(req,res){
	console.log("does not run until some1 ppsts data");
	console.log("postin data");
console.log(req.body.name);
console.log(req.body.password);
	});

app.post('/request',function(req,res)
{
	console.log("does not run until some1 ppsts data");
	console.log("postin data");
	console.log(req.body.tech);
	console.log(req.body.venue);
	console.log(req.body.session);
	console.log(req.body.mode);
	console.log(req.body.comment);
});


http.createServer(app).listen(8080,function(){console.log('runnin___');});
console.log('runnin__ first');
