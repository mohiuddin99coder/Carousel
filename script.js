let imageAPI1 = `https://api.unsplash.com/photos/random?client_id=VUVYw0LK2mpBsk5brcR14DcIQpVvh_kXrh0jLZTVDTU`
let imageAPI2 = `https://api.unsplash.com/photos/random?client_id=o9aJvfrmD0Jqs3O83cAhS9JF_-4LXHKjl_3uuaxuGWI`
let imageAPI3 = `https://api.unsplash.com/photos/random?client_id=zTLe2kcjLOgR_4XdYYjY7kWOKgUrGbjP6JbhHBu2m6I`
let imageAPI4 = `https://api.unsplash.com/photos/random?client_id=NALAGfof3vLxFQ732Z61eJ50qITKv90e-r7835HDoO0`
let imageAPI5 = `https://api.unsplash.com/photos/random?client_id=ldD8t8FwjYhftLwmtP5Z9hpeHjHKcI4yY9Mrf7eCzyE`
let imageAPI6 = `https://api.unsplash.com/photos/random?client_id=Qi1x07fl4_mhztwKKL_ECwZYO8QlbGSMxDNC1nTN1OI`

let messageBox = document.querySelector('.messageBox')
let overlay = document.querySelector('.overlay')
let errMsg = document.querySelector('.errMsg')

function getImage(imageAPI, image, creater) {
  fetch(imageAPI)
    .then((response) => response.json())
    .then((data) => {
      image.setAttribute("src", data.urls.regular)
      creater.innerHTML = `By: ${data.user.name}`
    })
    .catch((error) => {
      console.log("Error: " + error)
      errMsg.textContent = error
      messageBox.classList.remove('d-none')
      overlay.classList.remove('d-none')
    })
}

let changeImg = document.querySelector('.changeImg');
changeImg.addEventListener('click', () => {
  Carousel()
  bsCarousel()
  owlCarousel()
})

let btnCarousel = document.querySelector('.btn-carousel')
let btnBootstrap = document.querySelector('.btn-bootstrap')
let btnOwl = document.querySelector('.btn-owl')

let carouselBlock = document.querySelector('.img-carousel')
let bsBlock = document.querySelector('.bootstrap-carousel')
let owlBlock = document.querySelector('.owl-Carousel')

/***********************************************************************************************
-------------------------------------Carousel-BLOCK-START------------------------------------------
********************************************************************************************** */

let image1 = document.querySelector('#image-1')
let image2 = document.querySelector('#image-2')
let image3 = document.querySelector('#image-3')

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener('click', () => {                                           // 0-prev, 1-next
    const offset = button.dataset.carouselButton === "next" ? 1 : -1                 // if button == next => offset = 1 OR if button == prev => offset = -1
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]')  // Targeting slides container

    const activeSlide = slides.querySelector("[data-active]")                        // Storing active slide in a variable
    let newIndex = [...slides.children].indexOf(activeSlide) + offset                // Creating newIndex, for slides to show after clicking on buttons
    if (newIndex < 0) newIndex = slides.children.length - 1                          // Checking if newIndex < 0, then changing the newIndex to last slide Index
    if (newIndex >= slides.children.length) newIndex = 0                             //Checking if newIndex greater Or equal to SildesLength, if true changing it to first Slide Index 
    slides.children[newIndex].dataset.active = true                                  // giving active attribute to newIndex Slide
    delete activeSlide.dataset.active                                                // deleting active attribute from previous slide
  })
})

function Carousel() {
  getImage(imageAPI1, image1)
  getImage(imageAPI2, image2)
  getImage(imageAPI3, image3)
}

btnCarousel.addEventListener('click', () => {
  // Carousel()
  carouselBlock.classList.remove('d-none')
  bsBlock.classList.add('d-none')
  owlBlock.classList.add('d-none')
})

/***********************************************************************************************
-------------------------------------Carousel-BLOCK-END------------------------------------------
********************************************************************************************** */

/***********************************************************************************************
-------------------------------------Bootstrap-BLOCK-START------------------------------------------
********************************************************************************************** */

let bsImage1 = document.querySelector('#bs-image-1')
let bsImage2 = document.querySelector('#bs-image-2')
let bsImage3 = document.querySelector('#bs-image-3')

let creater1 = document.querySelector('.photographer-1')
let creater2 = document.querySelector('.photographer-2')
let creater3 = document.querySelector('.photographer-3')

function bsCarousel() {
  getImage(imageAPI1, bsImage1, creater1)
  getImage(imageAPI2, bsImage2, creater2)
  getImage(imageAPI3, bsImage3, creater3)
}

btnBootstrap.addEventListener('click', () => {
  // bsCarousel()
  bsBlock.classList.remove('d-none')
  carouselBlock.classList.add('d-none')
  owlBlock.classList.add('d-none')
})

/***********************************************************************************************
-------------------------------------Bootstrap-BLOCK-END------------------------------------------
********************************************************************************************** */

/***********************************************************************************************
-------------------------------------Owl-BLOCK-START------------------------------------------
********************************************************************************************** */

let Img1 = document.querySelector('#img1')
let Img2 = document.querySelector('#img2')
let Img3 = document.querySelector('#img3')
let Img4 = document.querySelector('#img4')
let Img5 = document.querySelector('#img5')
let Img6 = document.querySelector('#img6')

function owlCarousel() {
  getImage(imageAPI1, Img1)
  getImage(imageAPI2, Img3)
  getImage(imageAPI3, Img2)
  getImage(imageAPI4, Img4)
  getImage(imageAPI5, Img5)
  getImage(imageAPI6, Img6)
}

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3,
      loop: false
    }
  }
})

btnOwl.addEventListener('click', () => {
  // owlCarousel()
  owlBlock.classList.remove('d-none')
  bsBlock.classList.add('d-none')
  carouselBlock.classList.add('d-none')
})

/***********************************************************************************************
-------------------------------------Owl-BLOCK-START------------------------------------------
********************************************************************************************** */
