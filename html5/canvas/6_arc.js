function doFirst() {
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

  //畫分4/1
  context.strokeStyle = "rgba(0,0,0,0.7)";
  context.lineWidth = 3;

  context.beginPath();
  context.moveTo(0, canvas.height / 2);
  context.lineTo(canvas.width, canvas.height / 2);
  context.stroke();

  context.moveTo(canvas.width / 2, 0);
  context.lineTo(canvas.width / 2, canvas.height);
  context.stroke();

  //畫弧度

  context.beginPath();
  context.arc(250, 200, 100, 0, Math.PI, true);
  context.stroke();

  context.beginPath();
  context.moveTo(150,200);
  context.lineTo(350,200);
  context.stroke();

  context.beginPath();
  context.moveTo(180,200);
  context.lineTo(180,300);
  context.stroke();

  context.beginPath();
  context.moveTo(320,200);
  context.lineTo(320,300);
  context.stroke();

  context.beginPath();
  context.moveTo(180,);
  context.lineTo(350,200);
  context.stroke();


}

window.addEventListener("load", doFirst);
