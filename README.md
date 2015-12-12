# holiday-js-lyricall

## API usage

This library combines a couple of things:

Blather = markov chain generator

Alchemy = language analysis API

lyrics-fetcher = self explanatory

```
var LyriCall = require('./lyriCall.js');

var lc = new LyriCall.lyriCall(<API KEY>);

lc.getLyrics('Drake', 'hotline bling', function(song){
  lc.AlchRelations(song, function(relations){
    console.log(relations);
  });
});
```
