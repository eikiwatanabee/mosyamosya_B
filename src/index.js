'use strict'

// for( const i = 0; i < 11; i++){
//   let member = 
//    `<div class = "image-container">`
//   +`<img src = "/src/img2/item${i+1}.jpg">`
//   +`<p><p>`
//   +`<p><p>`
//   +`</div>`

// }

const image = document.getElementById("image-bottom");
const view = document.getElementById("view-more");

view.addEventListener("click", function() {
  image.style.display = "flex";
  view.style.display = "none";

}, false);