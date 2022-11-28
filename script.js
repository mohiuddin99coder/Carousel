const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]')
        
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

function getImage(imageAPI,image) {
    fetch(imageAPI)
      .then((response) => response.json())
      .then((data) => {
        image.src = data.urls.regular
      })
  }
  
  let imageAPI1 = `https://api.unsplash.com/photos/random?client_id=VUVYw0LK2mpBsk5brcR14DcIQpVvh_kXrh0jLZTVDTU`
  let imageAPI2 = `https://api.unsplash.com/photos/random?client_id=o9aJvfrmD0Jqs3O83cAhS9JF_-4LXHKjl_3uuaxuGWI`
  let imageAPI3 = `https://api.unsplash.com/photos/random?client_id=zTLe2kcjLOgR_4XdYYjY7kWOKgUrGbjP6JbhHBu2m6I`
  
  let image1 = document.querySelector('#image-1')
  let image2 = document.querySelector('#image-2')
  let image3 = document.querySelector('#image-3')
  
  getImage(imageAPI1,image1)
  getImage(imageAPI2,image2)
  getImage(imageAPI3,image3)