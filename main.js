var LyriCall = require('./lyriCall.js');

var lc = new LyriCall.lyriCall('226659f4aa74186689f370af15c9d8c2f8464e24');

lc.getLyrics('Drake', 'hotline bling', function(song){
  lc.AlchRelations(song, function(relations){
    console.log(relations);
  });
});
