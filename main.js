var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
console.log('AAA');
/* Looping through images */
for (let i = 1; i < 6; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  newImage.onclick = function() {
    console.log(getAttribute('src'));
  }
  thumbBar.appendChild(newImage);
  
}
/* Wiring up the Darken/Lighten button */
