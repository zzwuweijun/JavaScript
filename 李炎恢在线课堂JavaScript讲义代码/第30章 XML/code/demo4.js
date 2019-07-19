





//�����������XML DOM����
function getXMLDOM(xmlStr) {
	var xmlDom = null;
	
	if (typeof window.DOMParser != 'undefined') {
		xmlDom = (new DOMParser).parseFromString(xmlStr, 'text/xml');
		var errors = xmlDom.getElementsByTagName('parsererror');
		if (errors.length > 0) {
			throw new Error('������Ϣ��' + errors[0].textContent);
		}
	} else if (typeof window.ActiveXObject != 'undefined') {
		var version = [
									'MSXML2.DOMDocument6.0',
									'MSXML2.DOMDocument3.0',
									'MSXML2.DOMDocument'
		];
		
		for (var i = 0; i < version.length; i ++) {
			try {
				var xmlDom = new ActiveXObject(version[i]);
			} catch (e) {
				//����
			}
		}
		xmlDom.loadXML(xmlStr);
		if (xmlDom.parseError != 0) {
				throw new Error('������Ϣ��' + xmlDom.parseError.reason);
		}
		return xmlDom;
	} else {
		throw new Error('����ϵͳ���������֧��XML DOM����');
	}
	
	return xmlDom;
}


//���л�XML
function serializerXML(xmlDom) {
	var xml = '';
	
	if (typeof window.XMLSerializer != 'undefined') {
		xml = (new XMLSerializer()).serializeToString(xmlDom);
	} else if (typeof xmlDom.xml != 'undefined') {
		xml = xmlDom.xml;
	}
	
	return xml;
}



var xmlStr = '<root><user>Lee</user></root>';
var xmlDom = getXMLDOM(xmlStr);
alert(serializerXML(xmlDom));





//PS��Ϊ�˿�Խ������������ݣ����Ƿ����˴��ⲿ����XML�ļ�����ʹ�����ַ���XML���غ����л���







/*
//ģ��loadXML()���������Լ��׵Ĵ���XML�ַ���
var xmlParser = new DOMParser();		//����DOMParser����
var xmlStr = '<root>\n\t<user>Lee</user>\n</root>';		//XML�ַ���
var xmlDom = xmlParser.parseFromString(xmlStr, 'text/xml');		//XMLDocument XMLDOM
//alert(xmlDom.getElementsByTagName('user')[0].tagName);


//ģ��.xml�������л��ַ���
var serializer = new XMLSerializer();
var xml = serializer.serializeToString(xmlDom);
var errors = xmlDom.getElementsByTagName('parsererror');
if (errors.length == 0) {
	alert(xml);
} else {
	throw new Error('������Ϣ��' + errors[0].textContent);
}
*/

















