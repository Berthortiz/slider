let containerSliders = document.getElementById("sliders");
let sliderItem = document.querySelectorAll(".slider");
let thumbs = document.querySelectorAll(".thumb__overlay");


thumbs.forEach((thumb, i)=>{
  thumb.addEventListener('click', ()=>{
  let counter = i;
  let widthSlider = (-100 / sliderItem.length) * counter;
  containerSliders.style.transform = `translateX(${widthSlider}%)`;
    thumbs.forEach((thumb)=>{
      thumb.classList.remove("overlay-active");
    })
  thumb.classList.add("overlay-active")
  })
    

})
