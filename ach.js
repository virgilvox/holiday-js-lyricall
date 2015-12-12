var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('226659f4aa74186689f370af15c9d8c2f8464e24');
var fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
   module.exports = fs.readFileSync(filename, 'utf8');
};

var words = require("./test.txt");

alchemy.sentiment(words, {}, function(err, response) {
  if (err) throw err;

  var sentiment = response.docSentiment;

  console.log("SENTIMENT:", sentiment);
});

alchemy.entities(words, {}, function(err, response) {
  if (err) throw err;

  // See http://www.alchemyapi.com/api/entity/htmlc.html for format of returned object
  var entities = response.entities;

    console.log("ENTITIES", entities);
});

alchemy.relations(words, {}, function(err, response) {
  if (err) throw err;

  // See http://www.alchemyapi.com/api/relation/htmlc.html for format of returned object
  var relations = response.relations;
  console.log("RELATIONS", relations);
});

alchemy.concepts(words, {}, function(err, response) {
  if (err) throw err;

  // See http://www.alchemyapi.com/api/concept/htmlc.html for format of returned object
  var concepts = response.concepts;
  console.log("CONCEPTS", concepts);
});

alchemy.keywords(words, {}, function(err, response) {
  if (err) throw err;

  // See http://www.alchemyapi.com/api/keyword/htmlc.html for format of returned object
  var keywords = response.keywords;
  console.log("KEYWORDS", keywords);
});

alchemy.taxonomies(words, {}, function(err, response) {
  if (err) throw err;

  // See http://www.alchemyapi.com/api/keyword/htmlc.html for format of returned object
  var taxonomies = response.taxonomies;
  console.log("TAXONOMY", taxonomies);
});

alchemy.category(words, {}, function(err, response) {
  if (err) throw err;

  // See http://www.alchemyapi.com/api/keyword/htmlc.html for format of returned object
  var category = response.category;
  console.log("TOPIC CATEGORIZATION", category);
});
