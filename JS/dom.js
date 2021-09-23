
// Query Selector


const zoneResult = document.querySelector(".result-div");
const inputSearch = document.querySelector(".input-search");
const form = document.querySelector(".form");
const Select = document.querySelector("#select");
const sommeZone = document.querySelector("result-zone");



// function that create and apply  html element et define styles

function addResult(artistName, title, album, nb) {

    // Create HTML elements

    const addDiv = document.createElement('div');
    const addPindex = document.createElement("p");
    const addPtitle = document.createElement("p");
    const addPalbum = document.createElement("p");
    const addPartist = document.createElement("p");


    // add css classes

    addDiv.className = "text-result grid rangement full";
    addPindex.className = "text";
    addPtitle.className = "text";
    addPalbum.className = "text";
    addPartist.className = "text";

    // define text content

    addPindex.textContent = nb;
    addPtitle.textContent = title;
    addPalbum.textContent = album;
    addPartist.textContent = artistName;

    // append

    addDiv.appendChild(addPindex);
    addDiv.appendChild(addPartist);
    addDiv.appendChild(addPtitle);
    addDiv.appendChild(addPalbum);
    zoneResult.appendChild(addDiv);
}

// delete last results

function deleteResult() {

    zoneResult.innerHTML = "";

}


// function that get the sum of search results

function calculerSommeResult(nb) {

    const somme = document.createElement("p");
    somme.className = "text";
    somme.textContent = nb + "Résultat trouvées";
    zoneResult.prepend(somme);

}

// function, that show if there's no results from the response

function noResult() {
    const noTextResult = document.createElement("p");
    noTextResult.className = "text row jtcn";
    noTextResult.textContent = "pas de résultat de recherche";
    zoneResult.appendChild(noTextResult);
}

function loadingAnimation() {
    const loader = document.createElement("div");
    zoneResult.appendChild(loader);
    loader.className = "loader";
}