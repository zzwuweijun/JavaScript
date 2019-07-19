



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


//alert(Math.ceil(5.1));

$(function () {
	$('#button').click(function () {
		$('#box').animate({
			'attr' : 'x',
			'start' : 100,
			'alter' : 50,
			'target' : 0,
			'step' : 7
		});
	});
});



























