




/*
	�������
	var width = window.innerWidth;

	if (typeof width != 'number') {
		width = document.documentElement.clientWidth;
	}

	alert(width);

	
	//�����bug(ȱ��)

	var box = {
		toString : function () {},			//IE��С BUG
		toString2 : function () {}
	};


	for (var o in box) {
		alert(o);
	}

	
	//window����֧��opera����
	//alert(window.opera);

	for (var o in window.opera) {
		document.write(o + '<br />'); 
	}
	
	alert(window.opera.version());	//opera������İ汾��
	
	if (client.engine.opera) {
		alert("Ŀǰʹ�õ���Opera��������汾Ϊ��" + client.engine.ver);
	}

	
*/



//�û������ַ���
document.write(navigator.userAgent);



	
var client = function () {					//����һ������
	
	//����
	var engine = {
		ie : false,									//�����������ȷ���Ƿ���IE����
		gecko : false,
		webkit : false,
		khtml : false,
		opera : false,
		
		//����İ汾
		ver : 0
	};
	
	//�����
	
	//ϵͳ
	
	//���ļ�������
	if (window.opera) {
		engine.opera = true;				//��ʾȷ��opera�����
		engine.ver = window.opera.version();
	}
	
	return {										//����һ�����󣬿���ͬʱ�������棬�������ϵͳ�Ķ���
		engine : engine						//ǰһ��engine�����ԣ���һ��engine�Ƕ���ֵ
	}
	
}();													//����ִ�У�����ֵ


















