// var size = parseInt($('#names li').css('fontSize'));
// alert(size);

$('#smallButton').click(function(){
	changeSize('small');
});
$('#bigButton').click(function(){
	changeSize('big');
});

function changeSize(size){
	var currentSize = parseInt($('#names li').css('fontSize'));

	if(size=='small'){
		newSize = currentSize - 1;
	}else if(size=='big'){
		newSize = currentSize + 1;
	}

	$('#names li').css('fontSize', newSize+'px');
}