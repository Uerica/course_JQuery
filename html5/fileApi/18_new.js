function doFirst(){
	//先跟HTML畫面產生關聯，並且建立事件聆聽功能
	document.getElementById('dropZone').ondragover = dragOver;
	document.getElementById('dropZone').ondrop = dropped;
}

function dragOver(e){
	e.preventDefault();
}
function dropped(e){
	e.preventDefault();
	var files = e.dataTransfer.files;
	var readFile = new FileReader();

	for(var i=0; i<files.length; i++){
		readFile.readAsDataURL(files[i]);
		readFile.addEventListener('load',function(){
			// 動態新增<img>
			var image = document.createElement('img');
			image.src = this.result;

			var dropZone = document.getElementById('dropZone');
			// dropZone.appendChild(image);
			dropZone.insertBefore(image,dropZone.firstChild);
		});
	}
}
window.addEventListener('load',doFirst);