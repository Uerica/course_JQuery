function init() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d"); //繪圖環境2d
  context.fillRect(300, 300, 500, 500);
  context.clearRect(400, 400, 100, 100);
  context.clearRect(600, 400, 100, 100);
  context.clearRect(400, 600, 300, 100);
  context.stroke(400, 100);
  context.fill();
  context.clearRect(0, 0, canvas.width, 100);
}

window.addEventListener("load", init);
