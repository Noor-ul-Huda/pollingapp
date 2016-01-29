var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs =require('mongojs');
var db = mongojs('pollingDb',['pollingDb']);


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.get('/data', function (req,res) {
    db.pollingDb.find({}).toArray(function(err,docs){
        console.log(docs);
        res.json(docs);
    })
    /*db.pollingDb.find(function(err,docs){
        console.log('hi');
       console.log(docs);
    })*/
})
app.get('/addquestion', function(req,res){
    res.sendFile(__dirname + '/public/templates/addquestion.html');
})

app.post('/addquestion', function (req,res) {
    questions = req.body;
    db.pollingDb.insert(req.body, function (err,doc) {
        res.json(doc);
    })
})

app.get('/pollingpage', function (req,res) {
    res.sendFile(__dirname+ '/public/templates/pollingpage.html')
})
app.listen(3000, function(){
    console.log('server listening on port *:3000');
});