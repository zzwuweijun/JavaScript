

/*
	style��ȡ���ڵ�CSS��С
	var box = document.getElementById('box');
	alert(typeof box.style.width);
	alert(box.style.height);
	
	��ȡ������CSS��С�����û������ֵ����IE���ȡĬ�ϴ�С��IE�����Ϊ0
	var style = window.getComputedStyle ? window.getComputedStyle(box, null) : null || box.currentStyle;
	alert(style.width);
	alert(style.height);
	
	ʹ��CSSStyleSheet�����е�cssRules����(rules)
	var sheet = document.styleSheets[0];
	var rule = (sheet.cssRules || sheet.rules)[0];
	alert(rule.style.width);
	alert(rule.style.height);
	
	�����ֶ����ܻ�ȡʵ�ʴ�С
	alert(box.clientWidth);
	alert(box.clientHeight);
	
	//û�е�λ����Ĭ����px
	//alert(typeof box.clientWidth);���ص�����������number������ֵ�������ַ�����
	//��������������ĵ�λ�����س����Ľ������ת��Ϊpx����
	//�߿����߾ݣ�������clientWidth��clientHeight��ʵ�ʴ�С����
	//�ڱ߾�����Ӵ�С���������������ʵ�ʴ�С�����ѹ������Ĵ�С���ȥ
	//��û���ڱ߾�͹�����������£�û������CSS��С����ôIE����������Ϊ0
*/



window.onload = function () {

	var box = document.getElementById('box');
	var style = window.getComputedStyle ? window.getComputedStyle(box, null) : null || box.currentStyle;
	alert(style.width);
	alert(style.height);
};
























