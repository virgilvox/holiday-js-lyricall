var LyriCall = require('./lyriCall.js');

var lc = new LyriCall.lyriCall();

lc.getLyrics('Drake', 'hotline bling', function(song){
  lc.AddToChain(song);
  console.log(lc.GenerateSentence());
});
