


/*
	��ȡform����ķ���
	//var fm = document.getElementById('myForm');
	//var fm = document.getElementsByTagName('form')[0];
	//var fm = document.forms[0];			//HTML DOMͨ��0�±��ȡ
	//var fm = document.forms['yourForm'];	//HTML DOMͨ��name�±��ȡ
	var fm = document.yourForm;		//���¼��ݵķ��������Ƽ�ʹ��
	
	submit�¼�������һЩ����
	//��ֹ�ύ
	//addEvent(fm, 'submit', function (evt) {
	//	preDef(evt);
	//});

	//PS��submit�¼����ô�ͳ�ķ�ʽ��fm.onsubmit = function () {};
	
	//���ʣ�submit�¼���ΪʲôҪ��form�����������أ�Ϊʲô������input�е�sumit��ť�����أ�
	
	var sub = document.getElementById('sub');
	//addEvent(sub, 'submit', function (evt) {
	//	preDef(evt);
	//});
	
	//PS����submit�¼�ע�ᵽinput�е�submit��ť�����޷�����submit�¼���
	//PS�������submit�¼��󶨵�form�����ϣ��ſ��Դ���submit�¼�
	//PS��ֻ��������submit�¼��������ǵ��input�е�submit��ť����
	
	////addEvent(fm, 'submit', function (evt) {
	//	alert('Lee');
	//});
	
	addEvent(sub, 'click', function (evt) {
		alert('Lee');
	});
	
	//ʹ��fm.submit()�÷�submit��ťʵ���ύ
	//var button = document.getElementById('button');
	//addEvent(button, 'click', function () {
	//	fm.submit();				//�����÷�submit��ť�ύ��
	//});
	
	var strong = document.getElementsByTagName('strong')[0];
	addEvent(strong, 'click', function () {
		fm.submit();				
	});
	
*/




addEvent(window, 'load', function () {
	var fm = document.getElementById('myForm');
	//��ֹ�ύ
	addEvent(fm, 'submit', function (evt) {
		preDef(evt);
	});
	
	//ʵ��ctrl+enterʵ���ύ
	addEvent(document, 'keydown', function (evt) {
		var e = evt || window.event;
		if (e.ctrlKey && e.keyCode == 13) fm.submit();
	});
});






























