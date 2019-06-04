function doFirst() {
  // 先跟HTML畫面產生關聯，並且建立事件聆聽功能
  myMovie = document.getElementById("myMovie");
  playButton = document.getElementById("playButton");
  stopButton = document.getElementById("stopButton");
  defaultBar = document.getElementById("defaultBar");
  progressBar = document.getElementById("progressBar");

  barSize = parseInt(window.getComputedStyle(defaultBar).width);
  //   alert(window.getComputedStyle(defaultBar).width);

  playButton.addEventListener("click", playOrPause);
  stopButton.addEventListener("click", stopTheMovie);
  defaultBar.addEventListener("click", clickedBar);
}
function playOrPause() {
  if (!myMovie.paused && !myMovie.ended) {
    //不是暫停也不是結束
    //如果影片正在跑，按按鈕會暫停
    myMovie.pause(); //暫停
    playButton.innerText = "play";
  } else {
    //暫停或結束的時候
    myMovie.play(); //撥放
    playButton.innerText = "Pause";
    setInterval(update, 300);
  }
}

function update() {
  if (!myMovie.ended) {
    var size = (barSize / myMovie.duration) * myMovie.currentTime;
    progressBar.style.width = size + "px";
  } else {
    progressBar.style.width = size + "0px";
    playButton.innerText = "play";
  }
}

function stopTheMovie() {
  progressBar.style.width = "0px";
  myMovie.currentTime = 0;
  myMovie.pause();
}
function clickedBar(e) {
  var mouseX = e.clientX - defaultBar.offsetLeft; //物件與螢幕左邊的距離
  progressBar.style.width = mouseX + "px";

  var newTime = mouseX / (barSize / myMovie.duration);
  myMovie.currentTime = newTime;
}
window.addEventListener("load", doFirst);
