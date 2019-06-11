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
    var myMovie = document.getElementById("myMovie");
    myMovie.src = this.result;
    myMovie.controls = true;
    myMovie.width = 510;
  });
}

window.addEventListener("load", doFirst);
