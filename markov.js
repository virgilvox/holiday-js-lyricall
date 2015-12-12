 var Blather = require('blather');
 var lyr = require('lyrics-fetcher');

 lyr.fetch('Drake', 'hotline bling', function (err, lyrics) {
   var blatherer = new Blather()

   blatherer.addText(lyrics)

   console.log(blatherer.sentence());

 });
