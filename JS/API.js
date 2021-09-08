form.addEventListener("submit", function (e) {
    e.preventDefault();
    const getResult = new XMLHttpRequest();
    getResult.open('GET', 'https://musicbrainz.org/ws/2/recording/?inc=genres&fmt=json&limit=100&query=' + "" + encodeURIComponent(inputSearch.value) + "", true);
    getResult.addEventListener("readystatechange", function () {
        if (getResult.readyState === XMLHttpRequest.DONE) {
            if (getResult.status === 200) {
                const parseResult = JSON.parse(getResult.responseText)
                loopOnObject(parseResult);
            } else {
                alert("Error")
            }
        }
    })
    getResult.send();
})

let nb = 0;

function loopOnObject(parseResult) {
    for (i in parseResult.recordings) {
        nb++;
        // 
        let artistName = [];
        let album = [];
        let albumId = [];

        artistId = parseResult.recordings[i].id;
        title = parseResult.recordings[i].title;

        for (k in parseResult.recordings[i]["artist-credit"]) {
            artistName.push(parseResult.recordings[i]["artist-credit"][k].name)
        }

        // if album is undefined then set it to this

        if (parseResult.recordings[i]["releases"] === undefined) {
            album = 'undefined';
        } else {
            for (l in parseResult.recordings[i]["releases"]) {
                album.push(parseResult.recordings[i]["releases"][l].title)
                albumId.push(parseResult.recordings[i]["releases"][l].id)

            }
        }

        // TODO  put parameters later like ArtistId etc.. when needed

        addResult(artistName, title, album, nb);

    }
}
