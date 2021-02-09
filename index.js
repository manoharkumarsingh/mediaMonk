var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var Slice = function() {
  var sliceDiv = document.getElementById('slice');
  var gridX = 7;
  var gridY = 2;
  var w = sliceDiv.offsetWidth;
  var h = sliceDiv.offsetHeight;
  var img = document.querySelectorAll('#slice img')[0].src;
  var delay = 0.05;

  console.log(w, h, img);

  this.create = function() {
      for (let x = 0; x < gridX; x++) {
          var width = x * w / gridX + "px";
          // var div = document.createElement("div");
          // document.getElementById('slice').appendChild(div);
          // div.style.left = width;
          // div.setAttribute("class", 'img'+x);
          // div.style.top = 0; 
          // div.style.width = w / gridX + "px";
          // div.style.height = h + "px";
          // div.style.backgroundImage = "url(" + img + ")";
          // div.style.backgroundPosition = "-" + width;
          // div.style.backgroundSize = w + "px";
          // div.style.transitionDelay = x * delay + "s";
          // console.log(div)
        org_html = document.getElementById("slidesContainer"+x).innerHTML;
        new_html = '<div class="numbertext">'+ (x+1) +"/"+ (gridX)+'</div><div class="img" style="margin-left: 45%; top: 0px; width: '+w / gridX+'px; height:250px; background-image: url('+img+'); background-position: -'+width+'; background-size: '+w+'px; transition-delay: '+x * delay +'s;background-repeat: no-repeat"></div>';

        document.getElementById("slidesContainer"+x).innerHTML = new_html;
      } 

  }

  this.create();
  sliceDiv.classList.add('active'); 
}

window.onload = function() {
  var slice = new Slice();
};






