

/*

	try - catch �ص�
	1.���Ի�ȡ������Ϣ
	2.���Ա������������̨����
	3.�������δ��󣬼���ִ�У�PS�����Ǽ���ִ�е��������ʹ��������������Ĺ�������ô������ܻ��������

	
	try {
		window.abcdef();	
	} catch (e) {					//e��ʾ���յĴ������
		alert(e);					//��ӡ������󣬻����������Ϣ
	}
			

	//PS��try��ʾ������ִ������Ĵ��룬����д��󣬾�ȥִ��catch����Ĵ��롣


	alert('');

	try {
		window.abcdef();	
	} catch (e) {					//e��ʾ���յĴ������
		//alert(e);					//��ӡ������󣬻����������Ϣ����IE�����ִ����toString();
		//alert(e.name);			//IE��֧��name
		alert(e.message);		//message�����ǿ��������õġ�
	}

	
	function box() {
		try {
			var b = {};
			//window.abcedf();			//������жϲ���
		} catch (e) {
			alert(e);				
			return;					//��Ϊִ����catch˵���д�����ô�ټ�������ִ��Ҳ���ǻ�����Ծͷ�����
		} finally {
			alert('�����Ƿ���������Ҷ���ִ�У�');
			b = null;
		}
		
		
		alert('');
		//b = null;					//�������try-catch���Ͱ�����������finllay����

	}


	box();
	
//window.abcdef();

//new Array(9999999999999999999999);			//RangeError: invalid array length��Χ����

//var box = x;			//ReferenceError: x is not defined ���ô��󣬱���δ����

//a $ b;				//SyntaxError: missing ; before statement �﷨����

//new 10;			//TypeError: 10 is not a constructor 10���ǹ��캯��

//eval('abc');

//alert(encodeURI('���׻�));
	
	
try {
	new 10;
} catch (e) {
	if (e instanceof TypeError) {					//ͨ�����ַ������Ը��Ӿ�ȷ�ĵõ��������ͣ������Ը���׼ȷ��ȥ����
		alert('���ʹ���' + e.message);
	} else {
		alert('δ֪����' + e);
	}
}

*/


























