

/*
//传统的DOM加载
window.onload = function () {
	var box = document.getElementById('box');
	alert(box.innerHTML);
};

//PS：如果有图片，那么图片加载完毕后，方可执行onload里面的内容


//现代DOM加载
addEvent(document, 'DOMContentLoaded', function () {
	var box = document.getElementById('box');
	alert(box.innerHTML);
});

//PS：如果有图片，先执行节点操作的内容，然后再缓缓加载图片，也就是说，当DOM树结构加载完毕后即可执行了

//IE使用传统的DOM加载
window.onload = function () {
	var box = document.getElementById('box');
	alert(box.innerHTML);
};

//PS：IE使用传统也是图片加载完毕后再执行DOM节点操作，IE678不支持DOMCotnentLoaded


//IE678模拟DOMContentLoaded
document.write('<script id="ie_loaded" defer="defer" src="javascript:void(0)"></script>');
var ie_loaded = document.getElementById('ie_loaded');
//判断是否完全加载完毕DOM了
ie_loaded.onreadystatechange = function () {
	if (this.readyState == 'complete') {
		var box = document.getElementById('box');
		alert(box.innerHTML);
	}
};

//PS：有效，DOM加载完毕后执行了节点操作，并且后面才加载完毕图片
//PS：缺陷，如果有iframe标签，那么这种方法就会等待iframe里面的内容加载完毕才能执行节点

//现代DOM加载
addEvent(document, 'DOMContentLoaded', function () {
	var box = document.getElementById('box');
	alert(box.innerHTML);
});

//非IE的现代DOM加载事件，可以在iframe内容加载前执行




//使用doScroll
var timer = null;

timer = setInterval(function () {
	try {
		document.documentElement.doScroll('left');
		var box = document.getElementById('box');
		alert(box.innerHTML);
	} catch (e) {};
});
*/



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


















