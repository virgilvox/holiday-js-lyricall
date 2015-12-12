var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('226659f4aa74186689f370af15c9d8c2f8464e24');
var Blather = require('blather');
var lyr = require('lyrics-fetcher');

lyr.fetch('Drake', 'hotline bling', function (err, lyrics) {
  var blatherer = new Blather()

  blatherer.addText(lyrics)

  blatherer.addText(words)

  console.log(blatherer.sentence());

});


function lyriCall(){

lyriCall.prototype.getLyrics = function(){

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
  AlchKeywords(words, function(res){
    console.log("Keywords",res);
  });

  AlchConcepts(words, function(res){
    console.log("Concepts",res);
  });

  AlchSentiment(words, function(res){
    console.log("Sentiment",res);
  });

  AlchRelations(words, function(res){
    console.log("Relations",res);
  });

  AlchCategory(words, function(res){
    console.log("Category",res);
  });

  AlchTaxonomy(words, function(res){
    console.log("Taxonomy",res);
  });
};

};


exports.lyriCall = lyriCall;
