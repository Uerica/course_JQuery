var storage = localStorage;
function doFirst(){
	//先跟HTML畫面產生關聯，並且建立事件聆聽功能
	storage.clear();

	for(var i=0; i<20; i++){
		storage.setItem('KEY '+i, 'VALUE '+i);
	}
	document.getElementById('getButton').addEventListener('click',getIndex);
}
function getIndex(){
	var index = document.getElementById('indexText').value;
	var key = storage.key(index);
	var value = storage.getItem(key);

	alert(`Index ${index} : ${key} / ${value}`);
}
window.addEventListener('load',doFirst);