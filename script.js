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
    
    let videoHTML = `
      <video width="400" controls>
        <source src="./MARIO_GIF.mp4" type="video/mp4">
      </video> 
    `
    
    marioAlbum.insertAdjacentHTML("beforeend", videoHTML)
  })


let currentSlide = 0;
let slideWidth = 750
let delta = slideWidth

let transitionSlidePlus = () => {
  let jsGallery = document.querySelector(".js-gallery")
  if (currentSlide < 15) {
    currentSlide++
    jsGallery.style.transform = `translateX(-${delta * currentSlide}px)`
    // delta += slideWidth
  }
  else {
    jsGallery.style.transform = `translateX(-${0})`
    // delta = slideWidth
    currentSlide = 1
  }
}

let transitionSlideMinus = () => {
  let jsGallery = document.querySelector(".js-gallery")
  if (currentSlide > 0) {
    currentSlide--
    jsGallery.style.transform = `translateX(-${delta * currentSlide}px)`
    // delta += slideWidth
  }
  else {
    jsGallery.style.transform = `translateX(-${0})`
    // delta = slideWidth
    currentSlide = 1
  }
}


let nextButton = document.querySelector(".next")
let backButton = document.querySelector(".back")

nextButton.addEventListener("click", transitionSlidePlus)
backButton.addEventListener("click", transitionSlideMinus)
// setInterval(transitionSlide, 3000)


{/* <h2>${mario.amiibo[i].amiiboSeries}</h2> */}
// leftButton.addEventListener("click", moveLeft)



