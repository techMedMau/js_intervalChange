var timer = null,
  index = 0,
  pics = new Array(24),
  size = pics.length;
(prev = document.querySelector("#Prev")),
  (next = document.querySelector("#Next"));

function loadPic() {
  for (var i = 0; i < pics.length; i += 1) {
    let num = i + 1;
    pics[i] = "./images/pic" + num + ".jpg";
  }
}

loadPic();

function stopAutoPlay() {
  if (timer) {
    clearInterval(timer); 
  }
}


function startAutoPlay() {
  timer = setInterval(function () {
    index++;
    if (index >= size) {
      index = 0;
    }
    changeImg(index);
  }, 1000);
}

function changeImg(index) {
  document.querySelector(".img_resp").src = pics[index];
}

function slideImg() {
  var main = document.querySelector("#Space");

  main.onmouseover = function () {
    stopAutoPlay(); 
  };
  main.onmouseout = function () {
    startAutoPlay();
  };
  main.onmouseout(); 

 
  next.onclick = function () {
    index++;
    if (index >= size) {
      index = 0;
    }
    changeImg(index);
  };

  prev.onclick = function () {
    index--;
    if (index < 0) {
      index = size - 1;
    }
    changeImg(index);
  };
}

slideImg();
