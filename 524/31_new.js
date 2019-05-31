$(document).ready(function(){
	divWidth = $('#sliderBoard').width();		//div
	imgCount = $('#content li').length;
	// alert(imgCount)
	for(var i=0;i<imgCount;i++){
		$('#contentButton').append('<li></li>');
	}
	$('#contentButton li:nth-child(1)').addClass('clickMe');

	$('#content li').width(divWidth);			//ul li
	$('#content').width(divWidth * imgCount);	//ul

	index = 0;
	$('#contentButton li').click(function(){
		index = $(this).index();
		// alert(index);

		$(this).addClass('clickMe');
		$('#contentButton li').not(this).removeClass('clickMe');

		$('#content').animate({
			left: divWidth * index * -1,
		});
	});

	setInterval(function(){
		index += 1;
		$("#contentButton li").removeClass("clickMe");
		$("#contentButton li:nth-child(" + ((index % imgCount) + 1) + ")").addClass(
		  "clickMe"
		);
		$("#content").animate(
		  {
			left: divWidth * (index % imgCount) * -1
		  },
		  500
		);
	  }, 3000);
});