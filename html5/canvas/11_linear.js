function doFirst() {
  //先跟HTML畫面產生關聯，並且建立事件聆聽功能
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  // 繪製格線
  context.lineWidth = 1;
  for (var i = 0; i < 20; i++) {
    var pos = i * 50;

    context.moveTo(0, pos);
    context.lineTo(canvas.width, pos);
    context.fillText(pos, 0, pos);

    context.moveTo(pos, 0);
    context.lineTo(pos, canvas.height);
    context.fillText(pos, pos, 8);
  }
  context.strokeStyle = "rgba(0,0,0,0.3)";
  context.stroke();
  //=========

  // var gradient = context.createLinearGradient(100,100,600,400);
  var gradient = context.createLinearGradient(100, 250, 600, 250);
  gradient.addColorStop(0, "#ff95ca");
  gradient.addColorStop(1, "#84c1ff");
  gradient.addColorStop(0.5, "#ffe4ca");

  context.fillStyle = gradient;
  context.fillRect(100, 100, 500, 300);
}
window.addEventListener("load", doFirst);
