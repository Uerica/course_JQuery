function doFirst() {
  //先跟HTML畫面產生關聯，並且建立事件聆聽功能
  image = document.getElementById("image");
  image.addEventListener("dragstart", startDrag);
  image.addEventListener("dragend", endDrag);

  rightbox = document.getElementById("rightbox");
  // rightbox.addEventListener('dragenter',function(e){e.preventDefault();});
  rightbox.addEventListener("dragover", function(e) {
    e.preventDefault();
  });
  rightbox.addEventListener("drop", dropped);
}
function startDrag(e) {
  var data = '<img src="../../img/456.png">';
  e.dataTransfer.setData("image/jpeg", data);
}
function endDrag() {
  image.style.visibility = "hidden";
}
function dropped(e) {
  e.preventDefault();
  rightbox.innerHTML = e.dataTransfer.getData("image/jpeg");
}
window.addEventListener("load", doFirst);
