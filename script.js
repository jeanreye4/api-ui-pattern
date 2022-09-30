let url = 'https://amiiboapi.com/api/amiibo/?character=mario'
let marioAlbum = document.querySelector(".mario-album")
let leftButton = document.querySelector(".moveLeft")
let rightButton = document.querySelector(".moveRight")

let array
let current = 0
  
fetch(url)
  .then((res) => {
      return res.json()
  }).then((mario) => {
    console.log(mario)
    
    for (let i = 0; i < mario.amiibo.length; i++) {
      console.log(mario.amiibo[i].image)
      let htmlTemplate = `
        <li class="gallery__item js-gallery-item" style="background-image: url('${mario.amiibo[i].image}')">
        </li> 
      `;

      marioAlbum.insertAdjacentHTML("beforeend", htmlTemplate)
    }
  })


let currentSlide = 1;
let slideWidth = 1000
let delta = slideWidth

let transitionSlide = () => {
  let jsGallery = document.querySelector(".js-gallery")
  if (currentSlide < 15) {
    jsGallery.style.transform = `translateX(-${delta}px)`
    delta += slideWidth
    currentSlide++
  }
  else {
    jsGallery.style.transform = `translateX(-${0})`
    delta = slideWidth
    currentSlide = 1
  }
}

setInterval(transitionSlide, 3000)


{/* <h2>${mario.amiibo[i].amiiboSeries}</h2> */}
// leftButton.addEventListener("click", moveLeft)
// function moveLeft() {

// }

// rightButton.addEventListener("click", moveRight) 
// function moveRight() {

// }

// let handleNext = () => {
//     current++
//     document.querySelector('img').src = array[current].image
// }
/*mario.forEach(mario) {
let ul =document.querySelect(UL)
li = document.createElement('li')
*/




