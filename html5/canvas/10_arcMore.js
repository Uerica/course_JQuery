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

  context.beginPath();

  context.lineWidth = 8;
  context.strokeStyle = "pink";

  context.arc(300, 300, 150, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();

	context.lineWidth = 5;
	context.strokeStyle = '#abc';

	context.translate(300,300);
	context.moveTo(0,0);
	context.lineTo(0,-120);

	// context.moveTo(300,300);
	// context.lineTo(300,180);
	
	context.stroke();
}
window.addEventListener("load", doFirst);
