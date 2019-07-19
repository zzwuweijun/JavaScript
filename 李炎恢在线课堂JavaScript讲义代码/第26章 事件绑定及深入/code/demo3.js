




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

/*
addEvent(window, 'load', function () {
	var box = document.getElementById('box');
	
	//W3C的mouseover,mouseout
	//addEvent(box, 'mouseover', function (evt) {
	//	alert(evt.relatedTarget);									//得到移入box最近的那个DOM对象
	//});
	
	//addEvent(box, 'mouseout', function (evt) {
	//	alert(evt.relatedTarget);									//从box移出最近的那个DOM对象
	//});
	
	//addEvent(box, 'mouseover', function () {
	//	alert(window.event.fromElement.tagName);					//得到移入box最近的那个DOM对象
	//});
	
	//addEvent(box, 'mouseout', function () {
	//	alert(window.event.toElement.tagName);					//从box移出最近的那个DOM对象
	//});
	
	addEvent(box, 'mouseover', function (evt) {
		alert(getTarget(evt));
	});
	
});


function getTarget(evt) {
	var e = evt || window.event;
	if (e.srcElement) { //IE
		if (e.type == 'mouseover') {
			return e.fromElement.tagName;
		} else if (e.type == 'mouseout') {
			return e.toElement.tagName;
		}
	} else if (e.relatedTarget) {	//W3C
		return e.relatedTarget;
	}
}

addEvent(window, 'load', function () {
	var link = document.getElementsByTagName('a')[0];
	//link.onclick = function () {
	//	return false;
	//	alert('Lee');
	//};
	
	addEvent(link, 'click', function (evt) {
		preDef(evt);				//阻止默认行为
	});
	
	//PS：return false不好的原因，必须在最后，导致可能根本无法阻止默认行为，最好是放到最前
	//PS：放到最前之后，后面的代码又无法执行
});

addEvent(window, 'load', function () {
	var text = document.getElementById('text');
	addEvent(text, 'contextmenu', function (evt) {
		preDef(evt);
		var menu = document.getElementById('menu');
		var e = evt || window.event;
		menu.style.left = e.clientX + 'px';
		menu.style.top = e.clientY + 'px';
		menu.style.display = 'block';
		
		addEvent(document, 'click', function () {
			menu.style.display = 'none';
		});
	});
});


addEvent(window, 'beforeunload', function (evt) {
	preDef(evt);
});
*/


function preDef(evt) {
	var e = evt || window.event;
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
}

addEvent(document, 'mousewheel', function (evt) {
	alert(WD(evt));
})

addEvent(document, 'DOMMouseScroll', function (evt) {
	alert(WD(evt));
});


function WD(evt) {
	var e = evt || window.event;
	if (e.wheelDelta) {
		return e.wheelDelta;
	} else if (evt.detail) {
		return -evt.detail * 30;
	}
}





