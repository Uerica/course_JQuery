function doFirst() {
  //先跟HTML畫面產生關聯，並且建立事件聆聽功能
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  canvas.width = 400;
  canvas.height = 400;

  setInterval(drawCastle, 30);

  theClock = 0;
  function drawCastle() {
    theClock++;
    context.clearRect(0, 0, canvas.width, canvas.height);

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

    //畫地板
    context.strokeStyle = "rgba(0,0,0,0.7)";
    context.beginPath();
    context.moveTo(25, 350);
    context.lineTo(375, 350);
    context.stroke();

    //左右兩邊色塊
    context.beginPath();
    context.rect(50, 300, 50, 50);
    context.rect(300, 300, 50, 50);
    context.fillStyle = "pink";
    context.fill();
    context.stroke();

    //右邊色塊
    context.beginPath();
    context.rect(250, 250, 50, 100);
    context.fillStyle = "pink";
    context.fill();
    context.stroke();

    //拱門--綠色
    context.beginPath();
    context.moveTo(100, 350);
    context.lineTo(100, 200);
    context.lineTo(250, 200);
    context.lineTo(250, 350);
    context.lineTo(200, 350);
    context.lineTo(200, 250);
    context.arc(175, 250, 25, 0, Math.PI, true);
    context.lineTo(150, 350);

    context.fillStyle = "#FFEBB3";
    context.fill();
    context.stroke();

    //屋頂
    context.beginPath();
    context.moveTo(175, 150);
    context.lineTo(100, 200);
    context.lineTo(250, 200);
    context.closePath();
    context.fillStyle = "#CCEEFF";
    context.fill();
    context.stroke();

    //旗子
    context.beginPath();
    context.moveTo(175, 150);
    context.lineTo(175, 100);
    context.lineTo(200, 110);
    context.lineTo(175, 120);
    context.closePath();
    context.fillStyle = "#EB749A";
    context.fill();
    context.stroke();

    //車子
    // context.fillStyle = "HoneyDew";
    // context.fillRect(50 - 10, 325, 40, 25);
    // context.strokeRect(50 - 10, 325, 40, 25);

    // context.beginPath();
    // context.arc(50 + 10 - 10, 350, 5, 0, 2 * Math.PI, true);
    // context.arc(50 + 30 - 10, 350, 5, 0, 2 * Math.PI, true);

    // context.fillStyle = "#555";
    // context.fill();
    // context.stroke();

    context.fillStyle = "HoneyDew";

    let carX = (theClock % (400 + 40)) - 40;

    context.fillRect(carX, 325, 40, 25);
    context.strokeRect(carX, 325, 40, 25);
    context.beginPath();
    context.arc(carX + 10, 350, 5, 0, 2 * Math.PI, true);
    context.arc(carX + 30, 350, 5, 0, 2 * Math.PI, true);

    context.fillStyle = "#555";
    context.fill();
    context.stroke();
  }
}
window.addEventListener("load", doFirst);
