var buttonNext = document.querySelector('.next');
var buttonPrev = document.querySelector('.prev');
var photos = document.querySelectorAll('.photos img');
var i = 0;

buttonNext.onclick = function () {
  photos[i].style.display = 'none';
  i++;
  
  if (i >= photos.length) {
    i = 0;
  }

  photos[i].style.display = 'block';
}

buttonPrev.onclick = function () {
  photos[i].style.display = 'none';
  i--;
  
  if (i < 0) {
    i = photos.length - 1;
  }

  photos[i].style.display = 'block';
}