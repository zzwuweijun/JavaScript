


/*
	�ظ��ύ
	var fm = document.getElementById('myForm');
	var flag = false;
	//��ֹ�ύ
	addEvent(fm, 'submit', function (evt) {
		preDef(evt);
		//ģ���ӳ�
		//���ַ�����ֻ����ͨ���ύ��ť��ֹ�ظ��ύ�ģ�
		document.getElementById('sub').disabled = true;	//��һ���ύ�󣬽���ť����
		if (flag == true) return;
		flag = true;	//��ʾ���ύ��һ����
		alert('�ύ');
		setTimeout(function () {
			fm.submit();
		}, 5000);
	});
	
	//PS��f5ֻ��ǳˢ�£����漶���ˢ�£���ô��Դͷˢ�£�����ctrl+f5����
	
	//reset�¼�,reset()����
	addEvent(fm, 'reset', function () {
		alert('Lee');
	});
	
	addEvent(document, 'click', function () {
		fm.reset();
	});
	
	��ȡ���ؼ�
	var fm = document.getElementById('myForm');
	//alert(fm.elements);		//���ؼ����ϣ�HTMLCollection
	//alert(fm.length);			//���¼��ݣ����Ƽ�
	//alert(fm[0]);					//���¼��ݣ����Ƽ�
	//alert(fm.elements.length);	//�Ƽ�
	//alert(fm.elements[0]);	//HTMLInputElement
	//alert(fm.elements['user']);
	
	
	//PS�����ؼ���ʲô�� form�����input submit textarea select ��Щ�������ؼ�����ʵ���Ǳ�Ԫ�ر�ǩ
	//PS��ͨ�������ϻ�ȡ��һ��Ԫ�أ��Ǳ��ؼ��ᱻ���Ե�
*/



addEvent(window, 'load', function () {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var sexList = fm.elements['sex'];
	//alert(sexList[0]);
	//alert(sexList[0].value);
	//alert(sexList[0].name);
	//sexList[1].disabled = true;
	//alert(sexList[0].form);		//�õ�������form����
	//alert(sexList[0].type);		//radio
	//sexList[0].type = 'checkbox';	//���Ƽ�ʹ�ô������޸�
	
	//alert(fm.elements['sub'].type);
	
	//user.focus();			//����������
	//user.blur();			//�������Ƴ�
	
	
	//��ͳģʽ��onfocus
	//addEvent(user, 'focus', function () {
	//	alert('Lee');
	//});
	addEvent(user, 'blur', function () {
		alert('blur');
	});
	addEvent(user, 'change', function () {
		alert('change');
	});
});






























