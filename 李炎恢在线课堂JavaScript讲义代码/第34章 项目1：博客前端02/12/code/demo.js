



window.onload = function () {
	
	var oButton = document.getElementById('button');
	/*
	addEvent(oButton, 'click', fn1);
	addEvent(oButton, 'click', fn2);
	addEvent(oButton, 'click', fn3);
	removeEvent(oButton, 'click', fn2);
	*/
	
	var a = document.getElementById('a');
	addEvent(a, 'click', function (e) {
		e.preventDefault();
	});
	
	addEvent(oButton, 'click', function (e) {
		e.stopPropagation();
		alert('button');
	});
	
	addEvent(document, 'click', function () {
		alert('document');
	});
	
};


function fn1(e) {
	alert('1' + this.value + e.clientX);
}

function fn2(e) {
	alert('2' + this.value + e.clientX);
}

function fn3(e) {
	alert('3' + this.value + e.clientX);
}













