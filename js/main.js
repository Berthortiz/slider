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












// let btnHonkaiStarRail = document.getElementById("thumb__honkai-star-rail");
// let btnGenshinImpact = document.getElementById("thumb__genshin-impact");
// let btnHonkaiImpact = document.getElementById("thumb__honkai-impact-3rd");



// thumbs.forEach((thumb,i)=>{
//     thumb.addEventListener('click', () =>{
//         let position = i;
//         let widthSlider = 100 / sliderItem.length;  
//         let translate = position * widthSlider;
//         containerSliders.style.transform = `translateX(-${translate}%)`
   
    
//     thumbs.forEach((thumb, i)=>{
//         thumb.classList.remove('overlay-active')
//     })    

//     thumb.classList.add('overlay-active')
    
//    })    
// })    

// let btnZenlessZoneZero = document.getElementById("thumb__zenless-zone-zero");