var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
 
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/local');
// mongoose.Promise = global.Promise;
 
 
app.use(bodyParser.urlencoded({
    extended : true,
    limit : '50mb'
}));
 
 
app.use(bodyParser.json({
    limit : '50mb'
}));
// var studentsController = require('./controllers/students.controller');
 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.get('/', function (req, res) {
  res.sendFile(__dirname+ '/public/index.html');
});
 
// app.post("/students",);
// app.get('/students',studentsController.getStudents);
// app.delete('/students',studentsController.deleteStudent);

 
app.get('/next',function (req,res,next) {
    console.log("next first");
    next();
},function (req,res) {
    res.send('ok');
});
 
 
app.use(function (err,req,res,next) {
    console.log(err);
    res.send('This is error');
});
 
app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
});