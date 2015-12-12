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

### Available functions

```
lc.AlchRelations(words, callback)
lc.AlchTaxonomy(words, callback)
lc.AlchConcepts(words, callback)
lc.AlchKeywords(words, callback)
lc.AlchSentiment(words, callback)
lc.AlchCategory(words, callback)

lc.getLyrics(artist, song, callback)
lc.AddToChain(words) <- adds to markov chain generator
lc.GenerateSentence() <- returns markov chain

```
