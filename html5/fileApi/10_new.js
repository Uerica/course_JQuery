function doFirst(){
	//先跟HTML畫面產生關聯，並且建立事件聆聽功能
	document.getElementById('theFile').onchange = fileChange;
	// document.getElementById('theFile').addEventListener('change',fileChange);
}
function fileChange(){
	var files = document.getElementById('theFile').files;
	var message = '';

	for(var i=0; i<files.length; i++){
		message += 'File Name: ' + files[i].name + '\n';
		message += 'File Size: ' + files[i].size + ' byte(s)\n';
		message += 'File Type: ' + files[i].type + '\n';
		message += 'Last Modified: ' + files[i].lastModifiedDate + '\n';
		message += '===================\n';

		document.getElementById('fileInfo').value = message;
	}	
}
window.addEventListener('load',doFirst);