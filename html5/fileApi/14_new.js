function doFirst() {
  //先跟HTML畫面產生關聯，並且建立事件聆聽功能
  document.getElementById("dropZone").ondragover = dragover;
  document.getElementById("dropZone").ondrop = dropped;
}

function dragover(e) {
  e.preventDefault();
}

function dropped(e) {
  e.preventDefault();
  var file = e.dataTransfer.files[0];
  document.getElementById("fileName").innerText = file.name;
  var readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener("load", function() {
    var image = document.getElementById("image");
    image.src = this.result;
    image.style.maxWidth = "500px";
    image.style.maxHeight = "400px";
  });
}

window.addEventListener("load", doFirst);
