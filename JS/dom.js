





// Query


const zoneResult = document.querySelector(".result-div")
const inputSearch = document.querySelector(".input-search")
const form = document.querySelector(".form")




function addResult(artistName, title, album, nb) {

    // Create HTML elements

    const addDiv = document.createElement('div')
    const addPindex = document.createElement("p")
    const addPtitle = document.createElement("p")
    const addPalbum = document.createElement("p")
    const addPartist = document.createElement("p")


    // add css classes
    addDiv.className = "text-result grid rangement full"
    addPindex.className = "text"
    addPtitle.className = "text"
    addPalbum.className = "text"
    addPartist.className = "text"

    addPindex.textContent = nb
    addPtitle.textContent = title
    addPalbum.textContent = album
    addPartist.textContent = artistName

    // append



    addDiv.appendChild(addPindex)
    addDiv.appendChild(addPartist)
    addDiv.appendChild(addPtitle)
    addDiv.appendChild(addPalbum)
    zoneResult.appendChild(addDiv)
}