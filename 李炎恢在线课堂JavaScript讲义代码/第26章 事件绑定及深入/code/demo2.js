



/*

addEvent(window, 'load', init);		
addEvent(window, 'load', init);		//第二次应该是失误多注册的

function init() {
	alert('Lee');
}

addEvent(window, 'load', function () {
	var box = document.getElementById('box');
	addEvent(box, 'click', function () {				//目的达到，每次都执行，不影响
		alert('Lee');
	});
	addEvent(box, 'click', toBlue);						//this没有传递过去
});


function toRed() {
	this.className = 'red';
	removeEvent(this, 'click');
	addEvent(this, 'click', toBlue);	
}

function toBlue() {
	this.className = 'blue';
	removeEvent(this, 'click');
	addEvent(this, 'click', toRed);									
}

//W3C自带的两个添加事件和删除事件

1.覆盖问题，解决
window.addEventListener('load', function () {
	alert('Lee');
}, false);

window.addEventListener('load', function () {
	alert('Mr.Lee');
}, false);

window.addEventListener('load', function () {
	alert('Mriss.Lee');
}, false);

2.相同函数屏蔽的问题，解决
window.addEventListener('load', init, false);
window.addEventListener('load', init, false);
window.addEventListener('load', init, false);
function init() {
	alert('Lee');
}

3.是否可以传递this，解决
window.addEventListener('load', function () {
	var box = document.getElementById('box');
	box.addEventListener('click', toBlue, false);
},false);


function toRed() {
	this.className = 'red';
	this.removeEventListener('click', toRed, false);
	this.addEventListener('click', toBlue, false);
}

function toBlue() {
	this.className = 'blue';
	this.removeEventListener('click', toBlue, false);
	this.addEventListener('click', toRed, false);
}

4.添加一个额外的方法，会不会被覆盖，或者只能执行一次，解决
window.addEventListener('load', function () {
	var box = document.getElementById('box');
	box.addEventListener('click', function () {
		alert('Lee');
	}, false);
	box.addEventListener('click', toBlue, false);
},false);

//综上所诉：W3C是比较完美的解决了这些问题，非常好用
//但是IE8和之前的浏览器并不支持，而是采用了自己的事件，当然，IE9已经完全支持了


//冒泡和捕获
W3C可以设置冒泡和捕获方式
window.addEventListener('load', function () {
	var box = document.getElementById('box');
	box.addEventListener('click', function () {
		alert('div');
	}, true);
	document.addEventListener('click', function () {
		alert('document');
	}, true)
},false);

//IE的事件绑定机制

//1.覆盖问题，解决了，但有不同，顺序不同，倒过来的

window.attachEvent('onload', function () {
	alert('Lee');
});

window.attachEvent('onload', function () {
	alert('Mr.Lee');
});

window.attachEvent('onload', function () {
	alert('Miss.Lee');
});


//2.相同函数屏蔽的问题，未解决
window.attachEvent('onload', init);
window.attachEvent('onload', init);

function init() {
	alert('Lee');
}

//3.是否可以传递this
window.attachEvent('onload', function () {
	var box = document.getElementById('box');
	box.attachEvent('onclick', function () {
		//alert(this === box);
		alert(this === window);			//不能传递this
	});
});

//4.添加一个额外的方法，会不会被覆盖，或者只能执行一次
window.attachEvent('onload', function () {
	var box = document.getElementById('box');
	box.attachEvent('onclick', function () {
		alert('Lee');
	});
	box.attachEvent('onclick', function () {
		alert('Mr.Lee');
	});
});

IE的事件切换器
window.attachEvent('onload', function () {
	var box = document.getElementById('box');
	box.attachEvent('onclick', toBlue);
});


function toRed() {
	var that = window.event.srcElement;
	that.className = 'red';
	that.detachEvent('onclick', toRed);
	that.attachEvent('onclick', toBlue);
}

function toBlue() {
	var that = window.event.srcElement;
	that.className = 'blue';
	that.detachEvent('onclick', toBlue);
	that.attachEvent('onclick', toRed);
}


//event对象的获取
window.attachEvent('onload', function () {
	var box = document.getElementById('box');
	//box.onclick = function (evt) {			//传统方法IE无法通过参数获取evt
	//	alert(evt);
	//}
	box.attachEvent('onclick', function (evt) {		//IE的现代事件绑定机制是可以的
		//alert(evt)
		//alert(evt.type);
		//alert(evt.srcElement.tagName);
		alert(window.event.srcElement.tagName);
	});
});
*/

//跨浏览器添加事件
function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else if (obj.attachEvent) {
		obj.attachEvent('on' + type, fn);
	}
}

//跨浏览器移除事件
function removeEvent(obj, type, fn) {
	if (obj.removeEventListener) {
		obj.removeEventListener(type, fn, false);
	} else if (obj.detachEvent) {
		obj.detachEvent('on' + type, fn);
	}
}

//跨浏览器获取目标对象
function getTarget(evt) {
	if (evt.target) {		//W3C
		return evt.target;
	} else if (window.event.srcElement) {		//IE
		return window.event.srcElement;
	}
}


addEvent(window, 'load', function () {
	var box = document.getElementById('box');
	addEvent(box, 'click', toBlue);
});

function toRed(evt) {
	var that = getTarget(evt);
	that.className = 'red';
	removeEvent(that, 'click', toRed);
	addEvent(that, 'click', toBlue);
}

function toBlue(evt) {
	var that = getTarget(evt);
	that.className = 'blue';
	removeEvent(that, 'click', toBlue);
	addEvent(that, 'click', toRed);
}



















