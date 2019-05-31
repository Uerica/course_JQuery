function doFirst() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  var pic = new Image();
  pic.src = "../../img/dau01.jpg";
  pic.addEventListener("load", function() {
    context.drawImage(pic, 0, 0, canvas.width, canvas.height);
  });
}
window.addEventListener("load", doFirst);
