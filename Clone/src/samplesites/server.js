/* var exports = module.exports={};

var choices = ["LUCIFER","STRANGER THINGS","SOCIAL DISTANCE","SABRINA","BIG MOUTH"];

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}


exports.movieTitle = function () {
  var movie_title = choose(choices);
  return movie_title;
  
}; */

var url = require('url');
var http = require('htpp');
var fs = require('fs');
var MongoClienet = require('mongodb').MongoClient;

http.createServer(function (request, response){
    console.log("Working server");
});

MongoClienet.connect("mongo://localhost:27017"),{
  useUnifiedTopology:
    Ture
  },
  function (err, client)
  {
    
  }
};