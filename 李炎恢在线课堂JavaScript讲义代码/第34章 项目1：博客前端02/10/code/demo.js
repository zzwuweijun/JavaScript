



/*
window.onload = function () {
	alert('1');
};

window.onload = function () {
	alert('2');
};

window.onload = function () {
	alert('3');
};

addEvent(window, 'load', function () {
	alert('1');
});

addEvent(window, 'load', function () {
	alert('2');
});

addEvent(window, 'load', function () {
	alert('3');
});

*/



window.onload = function () {
	
	var oButton = document.getElementById('button');
	
	addEvent(oButton, 'click', fn);
	//removeEvent(oButton, 'click', fn);
	
};


function fn(e) {
	alert(e.clientX);
	//alert(this);
	//alert(b);
}















