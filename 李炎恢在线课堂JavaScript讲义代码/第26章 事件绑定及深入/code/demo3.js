




//�����������¼�
function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else if (obj.attachEvent) {
		obj.attachEvent('on' + type, fn);
	}
}

//��������Ƴ��¼�
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
	
	//W3C��mouseover,mouseout
	//addEvent(box, 'mouseover', function (evt) {
	//	alert(evt.relatedTarget);									//�õ�����box������Ǹ�DOM����
	//});
	
	//addEvent(box, 'mouseout', function (evt) {
	//	alert(evt.relatedTarget);									//��box�Ƴ�������Ǹ�DOM����
	//});
	
	//addEvent(box, 'mouseover', function () {
	//	alert(window.event.fromElement.tagName);					//�õ�����box������Ǹ�DOM����
	//});
	
	//addEvent(box, 'mouseout', function () {
	//	alert(window.event.toElement.tagName);					//��box�Ƴ�������Ǹ�DOM����
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
		preDef(evt);				//��ֹĬ����Ϊ
	});
	
	//PS��return false���õ�ԭ�򣬱�������󣬵��¿��ܸ����޷���ֹĬ����Ϊ������Ƿŵ���ǰ
	//PS���ŵ���ǰ֮�󣬺���Ĵ������޷�ִ��
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





