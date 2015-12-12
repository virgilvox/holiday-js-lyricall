var lyr = require('lyrics-fetcher');

lyr.fetch('Drake', 'hotline bling', function (err, lyrics) {
    console.log(err || lyrics);
});
