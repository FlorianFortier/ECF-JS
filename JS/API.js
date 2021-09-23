noResult();
form.addEventListener("submit", function (e) {
    deleteResult();
    e.preventDefault();

    // request title 

    if (Select.value === 'Title') {
        const getResult = new XMLHttpRequest();
        getResult.open('GET', 'https://musicbrainz.org/ws/2/recording?fmt=json&limit=100&query=recording:' + '"' + encodeURIComponent(inputSearch.value) + '"', true);
        getResult.addEventListener("readystatechange", function () {
            if (getResult.readyState === XMLHttpRequest.DONE) {
                if (getResult.status === 200) {
                    const parseResult = JSON.parse(getResult.responseText)
                    console.log(Select.value);
                    // console.log(parseResult);
                    loopOnObject(parseResult);

                } else {
                    alert("Error")
                }
            }
        })
        getResult.send();
    }

    // request artist 

    else if (Select.value === 'Artist') {
        const getResult = new XMLHttpRequest();
        getResult.open('GET', 'https://musicbrainz.org/ws/2/recording?fmt=json&limit=100&query=artist:' + '"' + encodeURIComponent(inputSearch.value) + '"', true);
        getResult.addEventListener("readystatechange", function () {
            if (getResult.readyState === XMLHttpRequest.DONE) {
                if (getResult.status === 200) {
                    const parseResult = JSON.parse(getResult.responseText)
                    console.log(Select.value);
                    // console.log(parseResult);
                    loopOnObject(parseResult);

                } else {
                    alert("Error")
                }
            }
        })
        getResult.send();
    }

    //request Album

    else if (Select.value === 'Album') {
        const getResult = new XMLHttpRequest();
        getResult.open('GET', 'https://musicbrainz.org/ws/2/recording?fmt=json&limit=100&query=release:' + '"' + encodeURIComponent(inputSearch.value) + '"', true);
        getResult.addEventListener("readystatechange", function () {
            if (getResult.readyState === XMLHttpRequest.DONE) {
                if (getResult.status === 200) {
                    const parseResult = JSON.parse(getResult.responseText)
                    console.log(Select.value);
                    // console.log(parseResult);
                    loopOnObject(parseResult);

                } else {
                    alert("Error")
                }
            }
        })
        getResult.send();
    }

    // request everything

    else if (Select.value === 'Everything') {
        const getResult = new XMLHttpRequest();
        getResult.open('GET', 'https://musicbrainz.org/ws/2/recording/?inc=genres&fmt=json&limit=100&query=' + "" + encodeURIComponent(inputSearch.value) + "", true);
        getResult.addEventListener("readystatechange", function () {
            if (getResult.readyState === XMLHttpRequest.DONE) {
                if (getResult.status === 200) {
                    const parseResult = JSON.parse(getResult.responseText)
                    console.log(Select.value);

                    loopOnObject(parseResult);
                } else {
                    alert("Error")
                }
            }
        })
        getResult.send();
    }

    if (inputSearch.value === "") {
        noResult();
    }

    let nb = 0;

    // function, that get values from the objects and push it to arrays, then we call the addResult function  

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

            // if album is undefined then set it to undifined   

            if (parseResult.recordings[i]["releases"] === undefined) {
                album = 'undefined';
            } else {
                for (l in parseResult.recordings[i]["releases"]) {
                    album.push(parseResult.recordings[i]["releases"][l].title)
                    albumId.push(parseResult.recordings[i]["releases"][l].id)

                }
            }


            addResult(artistName, title, album, nb);

        }
        calculerSommeResult(nb);
        nb = 0;
    }
})
