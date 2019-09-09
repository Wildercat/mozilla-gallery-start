var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
/* Looping through images */
for (let i = 1; i < 6; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  
  thumbBar.appendChild(newImage);
  newImage.onclick = function(evnt) {
    // console.log(evnt.target.getAttribute('src'));
    let iSrc = evnt.target.getAttribute('src');
    switchImg(iSrc);
  }
}
function switchImg(iSrc) {
  displayedImage.setAttribute('src', iSrc);
}
/* Wiring up the Darken/Lighten button */
btn.onclick