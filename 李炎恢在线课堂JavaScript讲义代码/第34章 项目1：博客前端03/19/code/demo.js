

/*
��һ�ڿεĴ���
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

//���¼���
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
	//���ַ�����Ŀǰ������������жϵĶ���complete��������onload����ͼƬ���غ�ż���
	//���ڷ���������������¼��ݼ���

	timer = setInterval(function () {
		if (/loaded|complete/.test(document.readyState)) { 	//loaded�ǲ��ּ��أ��п���ֻ��DOM������ϣ�complete����ȫ���أ�������onload
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














