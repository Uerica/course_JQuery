function init() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d"); //繪圖環境2d
  context.font = "bold 50px Tahoma";
  context.fillText("hihi", 100, 100);

  context.moveTo(100, 100);
  context.lineTo(400, 100);
  context.stroke();
}

window.addEventListener("load", init);
