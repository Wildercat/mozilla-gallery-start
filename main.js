var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i > 5; i++) {
  console.log('AAA');
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  /* From the instructions:
  "Find the value of the src attribute of the current image. This can be done by running the getAttribute() function on the <img> in each case, and passing it a parameter of "src" in each case."
  It seems like we already know the src attribute, we literally just made it. Why not use the same formula we just used to make it?
  */
  thumbBar.appendChild(newImage);
  
}
/* Wiring up the Darken/Lighten button */
