var AlchemyAPI = require('alchemy-api');
var Blather = require('blather');
var lyr = require('lyrics-fetcher');


function lyriCall(apikey){

var alchemy = new AlchemyAPI(apikey);

var blatherer = new Blather()

lyriCall.prototype.getLyrics = function(artist, song, callback){
  lyr.fetch(artist, song, function (err, lyrics) {
    callback(lyrics);
  });
};

lyriCall.prototype.AddToChain = function(text){
  blatherer.addText(text);
};

lyriCall.prototype.GenerateSentence = function(){
  return blatherer.sentence();
};

lyriCall.prototype.AlchSentiment = function(words, callback){
  alchemy.sentiment(words, {}, function(err, response) {
    if (err) throw err;
    callback(response.docSentiment);
  });
};

lyriCall.prototype.AlchRelations = function(words, callback) {
  alchemy.relations(words, {}, function(err, response) {
    if (err) throw err;
    callback(response.relations);
  });
};

lyriCall.prototype.AlchConcepts = function(words, callback) {
  alchemy.concepts(words, {}, function(err, response) {
    if (err) throw err;
    return response.concepts;
  });
};

lyriCall.prototype.AlchKeywords = function(words, callback) {
  alchemy.keywords(words, {}, function(err, response) {
    if (err) throw err;
    callback(response.keywords);
  });
};

lyriCall.prototype.AlchTaxonomy = function(words, callback) {
  alchemy.taxonomies(words, {}, function(err, response) {
    if (err) throw err;
    callback(response.taxonomies);
  });
};

lyriCall.prototype.AlchCategory = function(words, callback) {
  alchemy.category(words, {}, function(err, response) {
    if (err) throw err;
    callback(response.category);
  });
};

lyriCall.prototype.AlchAll = function(words){
  this.AlchKeywords(words, function(res){
    console.log("Keywords",res);
  });

  this.AlchConcepts(words, function(res){
    console.log("Concepts",res);
  });

  this.AlchSentiment(words, function(res){
    console.log("Sentiment",res);
  });

  this.AlchRelations(words, function(res){
    console.log("Relations",res);
  });

  this.AlchCategory(words, function(res){
    console.log("Category",res);
  });

  this.AlchTaxonomy(words, function(res){
    console.log("Taxonomy",res);
  });
};

};


exports.lyriCall = lyriCall;
