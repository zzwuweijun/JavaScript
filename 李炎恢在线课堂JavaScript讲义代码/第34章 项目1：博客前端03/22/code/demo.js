



/*
$(function () {
	
	var box = document.getElementById('box');
	
	
	setInterval(function () {
		box.style.left = getStyle(box, 'left') + 1 + 'px'
	}, 50);

	
	//alert(getStyle(box, 'left'));
	//box.style.left = 500 + 'px';
	
});
*/

$(function () {
	$('#button').click(function () {
		$('#box').animate({
			'alter' : -200,
		});
	});
});



























