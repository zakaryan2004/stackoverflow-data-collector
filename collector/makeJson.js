var stackexchange = require('stackexchange');
var fs = require('fs');;
var tagsCount = 100;
//var forEach = require('async-foreach').forEach;
//var link = ["https://api.stackexchange.com/2.2/tags?pagesize=" + tagsCount + "order=desc&sort=popular&site=stackoverflow&filter=!bNKX0pf0krrMgC"]
//var wikiLinks = require("./data/wikiLinks.json");

var pages = [];
var i = 0;
var f = "data/stackOverAPI.json";

var stackexchange = require('stackexchange');

var options = { version: 2.2 };
var context = new stackexchange(options);

var filter = { 
 filter:"!bNKX0pf0krrMgC",
 pagesize: tagsCount,
 tagged: 'node.js',
};

// Get all the questions (http://api.stackexchange.com/docs/questions) 
context.tags.tags(filter, function(err, results){
 if (err) throw err;
 
 console.log(results.items); 
 console.log("Has more:" + results.has_more);
 fs.writeFile(f,JSON.stringify(results.items), function(err, result) {
    if(err) console.log('Failed to write to file. Error: ', err);
  })
});