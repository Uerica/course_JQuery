function doFirst(){
	//先跟HTML畫面產生關聯，並且建立事件聆聽功能
	document.getElementById('theFile').onchange = fileChange;
	// document.getElementById('theFile').addEventListener('change',fileChange);
}
function fileChange(){
	var file = document.getElementById('theFile').files[0];
	var message = '';

	message += 'File Name: ' + file.name + '\n';
	message += 'File Size: ' + file.size + ' byte(s)\n';
	message += 'File Type: ' + file.type + '\n';
	message += 'Last Modified: ' + file.lastModifiedDate + '\n';
	document.getElementById('fileInfo').value = message;

	var readFile = new FileReader();
	readFile.readAsDataURL(file);
	readFile.addEventListener('load',function(){
		var myMovie = document.getElementById('myMovie');
		myMovie.src = this.result;
		myMovie.controls = true;
		myMovie.width = 510;				
	});
}
window.addEventListener('load',doFirst);