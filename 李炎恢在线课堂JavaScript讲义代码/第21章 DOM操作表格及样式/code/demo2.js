


/*
	DOM��CSS��������⣬IE�ϲ�����ȷ
	
	alert(document.implementation.hasFeature('CSS', '2.0'));
	alert(document.implementation.hasFeature('CSS2', '2.0'));
	alert(document.implementation.hasFeature('HTML', '1.0'));
	
	���ڡ�����������
	���ڣ������ڱ�ǩ���style������ӵ���ʽ
	����������<style>��ǩ����д����ʽ
	���ӣ�����ͨ��<link href>��ǩ���ӵ�����ʽ
	
	
	//ʹ������style��ȡ����
	var box = document.getElementById('box');
	//alert(box.style);			//CSSStyleDeclaration����
	//alert(box.style.color);
	//alert(box.style.fontSize);	//��-��ȥ����������ַ���д
	//alert(box.style.background);
	//alert(box.style.float);
	//alert(box.style.cssFloat);		//��IE������Թؼ��ֱ����ֵ��÷�
	//alert(box.style.styleFloat);		//IE������ĵ��÷�ʽ
	alert(box.style.cssFloat || box.style.styleFloat);	//�����������
	
	var box = document.getElementById('box');
	box.style.color = 'red';
	box.style.fontSize = '20px';
	box.style.background = '#ccc';
	//box.style.cssFloat = 'right';
	//box.style.styleFloat = 'right';
	typeof box.style.cssFloat != 'undefined' ? box.style.cssFloat = 'right' : box.style.styleFloat = 'right';
	
	
	//DOM2��Ϊstyle�ṩ��һЩ���Է���
	var box = document.getElementById('box');
	//alert(box.style.cssText);			//�鿴CSS�ı�
	alert(box.style.length);
	
	//box.style.setProperty('color','blue');	//����ɰ汾��BUG
	box.style.removeProperty('color');
	
	alert(box.style.color);			//style����ֻ�ܻ�ȡ���������ڣ����ܻ�ȡ����������
*/



window.onload = function () {

	var box = document.getElementById('box');
	//var style = window.getComputedStyle(box, null);
	//alert(style.color);						//��������ʽ��һ���ʾĬ����ʽ�����ú����ʽ
	//var style = box.currentStyle;
	//alert(style.color);						//IE�ļ�����ʽ
	//alert(style.fontSize);
	
	var style = window.getComputedStyle ? window.getComputedStyle(box, null) : null || box.currentStyle;
	//alert(style.fontSize);
	//alert(style.border);	//���������Ծ��޷���ȡ��
	
	//alert(style.borderTopColor);
	
	//border������Ա������Ͳ�������
	
	alert(box.style.border);
	
	//������ʽ�Ļ�ȡ�����������Ի�ȡû�����õ�Ĭ����ʽ��Ҳ���Ի�ȡ���ڣ�����������
	//Ϊʲô���Ի�ȡ�����������أ�
	//��Ϊ����������������CSS�����ջ�פ����������ļ�����ʽ��

};

























