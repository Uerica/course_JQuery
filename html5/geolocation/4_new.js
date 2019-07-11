function doFirst(){
	var area = document.getElementById('myMap');
	// var myPosition = new google.maps.LatLng(24.9774721,121.1824813); //24.9686114,121.1899195
	var myPosition = new google.maps.LatLng(24.9686114,121.1899195); 

	var map = new google.maps.Map(area,{
		zoom: 14,
		center: myPosition,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var marker = new google.maps.Marker({
		position: myPosition,
		map: map,
		title: '中央大學電機二館',
		icon: '../../images/foot.gif'
	});
}
window.addEventListener('load',doFirst);