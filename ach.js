var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('226659f4aa74186689f370af15c9d8c2f8464e24');
var fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
   module.exports = fs.readFileSync(filename, 'utf8');
};

var words = require("./test.txt");
var sentiment, entities, concepts, taxonomies, relations, keywords, category;

alchemy.sentiment(words, {}, function(err, response) {
  if (err) throw err;
  sentiment = response.docSentiment;
  console.log("SENTIMENT:", sentiment);
});

alchemy.entities(words, {}, function(err, response) {
  if (err) throw err;
  entities = response.entities;
  console.log("ENTITIES", entities);
});

alchemy.relations(words, {}, function(err, response) {
  if (err) throw err;
  relations = response.relations;
  console.log("RELATIONS", relations);
});

alchemy.concepts(words, {}, function(err, response) {
  if (err) throw err;
  concepts = response.concepts;
  console.log("CONCEPTS", concepts);
});

alchemy.keywords(words, {}, function(err, response) {
  if (err) throw err;
  keywords = response.keywords;
  console.log("KEYWORDS", keywords);
});

alchemy.taxonomies(words, {}, function(err, response) {
  if (err) throw err;
  taxonomies = response.taxonomies;
  console.log("TAXONOMY", taxonomies);
});

alchemy.category(words, {}, function(err, response) {
  if (err) throw err;
  category = response.category;
  console.log("TOPIC CATEGORIZATION", category);
});
