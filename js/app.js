window.addEventListener('load', function () {
  baguetteBox.run('.gallery');
});

//declare input as variable representing input entered in search bar
let input = document.querySelector('#search');

//declare a as variable representing the links in .gallery div
let a = document.querySelectorAll('.gallery a');

// Arrow function noticing when the key goes up, do the following
input.addEventListener('keyup', () => {
  let lowerLetter = input.value.toLowerCase();
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < a.length; i++) {
    let caption = a[i].getAttribute('data-caption').toLowerCase();

    //if the letter entered does exist in the caption
    if (caption.indexOf(lowerLetter) > -1) {

      //keep the display of that link as it was
      a[i].style.display = '';
    } else {

      //else, don't display that link
      a[i].style.display = 'none';
    }
  }
});