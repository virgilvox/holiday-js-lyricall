 var Blather = require('blather');
 var lyr = require('lyrics-fetcher');
 var fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var words = require("./test.txt");


 lyr.fetch('Drake', 'hotline bling', function (err, lyrics) {
   var blatherer = new Blather()

   blatherer.addText(lyrics)

   blatherer.addText(words)

   console.log(blatherer.sentence());

 });
