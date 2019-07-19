



/*

addEvent(window, 'load', init);		
addEvent(window, 'load', init);		//�ڶ���Ӧ����ʧ���ע���

function init() {
	alert('Lee');
}

addEvent(window, 'load', function () {
	var box = document.getElementById('box');
	addEvent(box, 'click', function () {				//Ŀ�Ĵﵽ��ÿ�ζ�ִ�У���Ӱ��
		alert('Lee');
	});
	addEvent(box, 'click', toBlue);						//thisû�д��ݹ�ȥ
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

//W3C�Դ�����������¼���ɾ���¼�

1.�������⣬���
window.addEventListener('load', function () {
	alert('Lee');
}, false);

window.addEventListener('load', function () {
	alert('Mr.Lee');
}, false);

window.addEventListener('load', function () {
	alert('Mriss.Lee');
}, false);

2.��ͬ�������ε����⣬���
window.addEventListener('load', init, false);
window.addEventListener('load', init, false);
window.addEventListener('load', init, false);
function init() {
	alert('Lee');
}

3.�Ƿ���Դ���this�����
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

4.���һ������ķ������᲻�ᱻ���ǣ�����ֻ��ִ��һ�Σ����
window.addEventListener('load', function () {
	var box = document.getElementById('box');
	box.addEventListener('click', function () {
		alert('Lee');
	}, false);
	box.addEventListener('click', toBlue, false);
},false);

//�������ߣ�W3C�ǱȽ������Ľ������Щ���⣬�ǳ�����
//����IE8��֮ǰ�����������֧�֣����ǲ������Լ����¼�����Ȼ��IE9�Ѿ���ȫ֧����


//ð�ݺͲ���
W3C��������ð�ݺͲ���ʽ
window.addEventListener('load', function () {
	var box = document.getElementById('box');
	box.addEventListener('click', function () {
		alert('div');
	}, true);
	document.addEventListener('click', function () {
		alert('document');
	}, true)
},false);

//IE���¼��󶨻���

//1.�������⣬����ˣ����в�ͬ��˳��ͬ����������

window.attachEvent('onload', function () {
	alert('Lee');
});

window.attachEvent('onload', function () {
	alert('Mr.Lee');
});

window.attachEvent('onload', function () {
	alert('Miss.Lee');
});


//2.��ͬ�������ε����⣬δ���
window.attachEvent('onload', init);
window.attachEvent('onload', init);

function init() {
	alert('Lee');
}

//3.�Ƿ���Դ���this
window.attachEvent('onload', function () {
	var box = document.getElementById('box');
	box.attachEvent('onclick', function () {
		//alert(this === box);
		alert(this === window);			//���ܴ���this
	});
});

//4.���һ������ķ������᲻�ᱻ���ǣ�����ֻ��ִ��һ��
window.attachEvent('onload', function () {
	var box = document.getElementById('box');
	box.attachEvent('onclick', function () {
		alert('Lee');
	});
	box.attachEvent('onclick', function () {
		alert('Mr.Lee');
	});
});

IE���¼��л���
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


//event����Ļ�ȡ
window.attachEvent('onload', function () {
	var box = document.getElementById('box');
	//box.onclick = function (evt) {			//��ͳ����IE�޷�ͨ��������ȡevt
	//	alert(evt);
	//}
	box.attachEvent('onclick', function (evt) {		//IE���ִ��¼��󶨻����ǿ��Ե�
		//alert(evt)
		//alert(evt.type);
		//alert(evt.srcElement.tagName);
		alert(window.event.srcElement.tagName);
	});
});
*/

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

//���������ȡĿ�����
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



















