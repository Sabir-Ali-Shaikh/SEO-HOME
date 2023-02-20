var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


let price = document.querySelectorAll(".plan")



price.forEach((card) => {
  card.addEventListener("mouseover", () => {
    console.log(card.firstElementChild);
    card.firstElementChild.style.color = "white"
  })
})
price.forEach((card) => {
  card.addEventListener("mouseout", () => {
    card.firstElementChild.style.color = "#6f77f1"
  })
})

price.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.lastElementChild.style.backgroundColor = "#FAD725"
  })
})
price.forEach((button) => {
  button.addEventListener("mouseout", () => {
    button.lastElementChild.style.backgroundColor = "white"
  })
})
