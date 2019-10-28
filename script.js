var buttonNext = document.querySelector('.next');
var buttonPrev = document.querySelector('.prev');
var photos = document.querySelectorAll('.photos img');
var i = 0;

buttonNext.onclick = function () {
  photos[i].classList.remove('showed');
  i++;
  
  if (i >= photos.length) {
    i = 0;
  }

  photos[i].classList.add('showed');
}

buttonPrev.onclick = function () {
  photos[i].classList.remove('showed');
  i--;
  
  if (i < 0) {
    i = photos.length - 1;
  }

  photos[i].classList.add('showed');
}