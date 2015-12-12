var MarkovChain = require('markovchain')
  , fs = require('fs')
  , quotes = new MarkovChain(fs.readFileSync('./test.txt'))

console.log(quotes.start('The').end(5).process())
