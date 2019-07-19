

/*
//��ͳ��DOM����
window.onload = function () {
	var box = document.getElementById('box');
	alert(box.innerHTML);
};

//PS�������ͼƬ����ôͼƬ������Ϻ󣬷���ִ��onload���������


//�ִ�DOM����
addEvent(document, 'DOMContentLoaded', function () {
	var box = document.getElementById('box');
	alert(box.innerHTML);
});

//PS�������ͼƬ����ִ�нڵ���������ݣ�Ȼ���ٻ�������ͼƬ��Ҳ����˵����DOM���ṹ������Ϻ󼴿�ִ����

//IEʹ�ô�ͳ��DOM����
window.onload = function () {
	var box = document.getElementById('box');
	alert(box.innerHTML);
};

//PS��IEʹ�ô�ͳҲ��ͼƬ������Ϻ���ִ��DOM�ڵ������IE678��֧��DOMCotnentLoaded


//IE678ģ��DOMContentLoaded
document.write('<script id="ie_loaded" defer="defer" src="javascript:void(0)"></script>');
var ie_loaded = document.getElementById('ie_loaded');
//�ж��Ƿ���ȫ�������DOM��
ie_loaded.onreadystatechange = function () {
	if (this.readyState == 'complete') {
		var box = document.getElementById('box');
		alert(box.innerHTML);
	}
};

//PS����Ч��DOM������Ϻ�ִ���˽ڵ���������Һ���ż������ͼƬ
//PS��ȱ�ݣ������iframe��ǩ����ô���ַ����ͻ�ȴ�iframe��������ݼ�����ϲ���ִ�нڵ�

//�ִ�DOM����
addEvent(document, 'DOMContentLoaded', function () {
	var box = document.getElementById('box');
	alert(box.innerHTML);
});

//��IE���ִ�DOM�����¼���������iframe���ݼ���ǰִ��




//ʹ��doScroll
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


















