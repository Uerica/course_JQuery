function init() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d"); //繪圖環境2d
  context.strokeStyle = 'red';
  context.moveTo(300, 300);
  context.lineTo(500, 500);
  context.lineTo(500, -200);
  context.stroke();
}

window.addEventListener("load", init);
