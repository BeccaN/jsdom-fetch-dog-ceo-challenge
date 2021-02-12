console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetchPics()
    fetchBreeds()
});

function fetchPics() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl)  
    .then(resp => resp.json())
    .then(results => addImage(results))
}

function addImage(images) {
    const imgContainer = document.querySelector("#dog-image-container")
    images.message.forEach(img => { 
        imgContainer.innerHTML += 
            `
            <img src= '${img}'>
            `
     })
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'  
    fetch(breedUrl)  
    .then(resp => resp.json())
    .then(results => {
        breeds = Object.keys(results.message)
        addBreeds(breeds)
        checkFilter()
    })
}

function addBreeds(breeds) {
    const breedContainer = document.querySelector("#dog-breeds")
    breeds.forEach(breed => {
        let li = document.createElement('li')
        li.innerText = breed
        breedContainer.appendChild(li)
        li.addEventListener('click', updateColor)
    })
}

function updateColor(event) {
    event.target.style.color = 'cyan';
}

function checkFilter() {
    let breedDropMenu = document.querySelector("#breed-dropdown")
    const breedContainer = document.querySelector("#dog-breeds")
    breedDropMenu.addEventListener('change', function(e){
        breedContainer.innerHTML = ''
        addBreeds(breeds.filter(breed => breed.startsWith(e.target.value)))
    })
}
