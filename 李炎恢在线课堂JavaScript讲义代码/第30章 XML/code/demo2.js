


function createXMLDOM() {
	var version = [
								'MSXML2.DOMDocument6.0',
								'MSXML2.DOMDocument3.0',
								'MSXML2.DOMDocument'
	];
	
	for (var i = 0; i < version.length; i ++) {
		try {
			var xmlDom = new ActiveXObject(version[i]);
			return xmlDom;
		} catch (e) {
			//����
		}
	}
	throw new Error('����ϵͳ���������֧��MSXML�⣡');
}

/*
//Ĭ��ʹ�õ��첽����
var xmlDom = createXMLDOM();
xmlDom.load('demo.xml');
alert(xmlDom.xml);


//PS���ڷ������ˣ�Ĭ��ʹ�õ����첽���ء�
//����ԭ��1.�ڷ������ˣ�ʹ�õ��첽���أ�load()��û�м�����ϣ���ȥ��ӡxmlDom.xml���л����ַ���



//ʹ��ͬ������
var xmlDom = createXMLDOM();
xmlDom.async = false;						//ͬ������false���첽����true��Ĭ�����첽
xmlDom.load('demo.xml');
alert(xmlDom.xml);


//ʹ��ͬ�������ӳٵ�PHP�ļ�
var xmlDom = createXMLDOM();
xmlDom.async = false;						//ͬ������false���첽����true��Ĭ�����첽
xmlDom.load('demo.php');				//�������PHP�ļ���ʹ����5�룬���Һ���Ĵ���û��ִ��
alert(xmlDom.xml);							//5����ִ�е�

//PS��ʹ��ͬ�����أ�����ӳ٣���ô����������ͼ����ˡ�
*/


//����Ӧ�����첽
var xmlDom = createXMLDOM();
xmlDom.async = true;						//ͬ������false���첽����true��Ĭ�����첽

xmlDom.onreadystatechange = function () {		//����¼��������load()����ǰ�棬��ͼ�������¼����ٵ�load()ִ�е��ƺ����ܼ���
	//alert(xmlDom);
	if (xmlDom.readyState == 4) {
	
		if (xmlDom.parseError.errorCode == 0) {
			//alert(this === xmlDom);				//thisִ�е���window
			alert(xmlDom.xml);
		} else {
			throw new Error('�����кţ�' + xmlDom.parseError.line + 
										 '\n������ţ�' + xmlDom.parseError.errorCode +
										 '\n������ͣ�' + xmlDom.parseError.reason);
		}
	}
}

xmlDom.load('demo.xml');				


//onreadystatechange�Ƚ����⣬�����this��ʾ window������ִ�е�object














