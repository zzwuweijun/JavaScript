

/*
上一节课的代码
function addDomLoaded(fn) {
	if (document.addEventListener) {//W3C
		addEvent(document, 'DOMContentLoaded', function () {
			fn();
			removeEvent(document, 'DOMContentLoaded', arguments.callee);
		});
	} else {
		var timer = null;
		timer = setInterval(function () {
			try {
				document.documentElement.doScroll('left');
				fn();
			} catch (e) {};
		});
	}
}


addDomLoaded(function () {
	var box = document.getElementById('box');
	alert(box.innerHTML);
});

//向下兼容
window.onload = function () {
	
};



//alert(document.readyState);

var isReady = false;
var timer = null;
function doReady(fn) {
	if (timer) clearInterval(timer);
	if (isReady) return;
	isReady = true;
	fn();
}

function addDomLoaded(fn) {
	//这种方法，目前在主流浏览器判断的都是complete，类似与onload，即图片加载后才加载
	//用于非主流浏览器的向下兼容即可

	timer = setInterval(function () {
		if (/loaded|complete/.test(document.readyState)) { 	//loaded是部分加载，有可能只是DOM加载完毕，complete是完全加载，类似于onload
			doReady(fn);
		}
	}, 1);

	timer = setInterval(function () {
		if (document && document.getElementById && document.getElementsByTagName && document.body) {
			doReady(fn);
		}
	}, 1);
}




*/








addDomLoaded(function () {
	var box = document.getElementById('box');
	alert(box.innerHTML);
});














