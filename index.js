
const spotify = require('./spotify');
const songInfo = { band: "Colonies", song: "Morning" };

Promise.resolve()
.then(() => {
    return spotify.getSongInfo(songInfo);
})
.then((href) => {
    console.log(href);
});


