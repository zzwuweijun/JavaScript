


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
//DOM2��XML
var xmlDom = document.implementation.createDocument('', 'root', null);		//XML DOM�����Ѵ����������ṩ��<root>����ǩ
//alert(xmlDom);
//alert(xmlDom.documentElement.tagName);
//alert(xmlDom.getElementsByTagName('root')[0].tagName);

//ʹ�ñ�׼DOMȥ�����ڵ�
var user = xmlDom.createElement('user');
xmlDom.documentElement.appendChild(user);
alert(xmlDom.getElementsByTagName('user')[0].tagName);

//PS��DOM2����XML DOM�����ǲ�֧��loadXML()�������޷����׵�ͨ���ַ�������XML�ĵ�
//PS����û��load()�����أ��������ⲿ����XML�ļ�
*/

/*
//ͬ������xml�ļ�
var xmlDom = document.implementation.createDocument('', 'root', null);		//����XMLDOM����
xmlDom.async = false;												//false��ͬ����true���첽���첽true��Ĭ��
xmlDom.load('demo.xml');										//�����ⲿXML�ļ�
//alert(xmlDom.xml);													//������л����XML�ַ���
//alert(xmlDom.getElementsByTagName('user')[0].tagName);
//alert(xmlDom.getElementsByTagName('user')[0].firstChild.nodeValue);
alert(xmlDom.getElementsByTagName('user')[0].textContent);			//�൱��XHTML�ڵ��е�innerHTML

//PS��DOM2����û��.xml���������л�XML�ַ���


//�첽����XML�ļ�
var xmlDom = document.implementation.createDocument('', 'root', null);		//����XMLDOM����
xmlDom.async = true;												//false��ͬ����true���첽���첽true��Ĭ��
xmlDom.onload = function () {								//�첽���أ�ͨ��onload���ɣ�������IE�еľ���״̬�¼�
	alert(xmlDom.getElementsByTagName('user')[0].textContent);
};
xmlDom.load('demo.xml');


//PS��load()����ֻ֧��Firefox����������°汾��Opera������������������֧��

*/



//1.���ܼ��׵�ʹ���ַ���������XML������������IE��loadXML()����
//2.���ܹ���IE��������ͨ��.xml���л�XML�ַ������


//ģ��loadXML()���������Լ��׵Ĵ���XML�ַ���
var xmlParser = new DOMParser();		//����DOMParser����
var xmlStr = '<root>\n\t<user>Lee</user>\n</root>';		//XML�ַ���
var xmlDom = xmlParser.parseFromString(xmlStr, 'text/xml');		//XMLDocument XMLDOM
//alert(xmlDom.getElementsByTagName('user')[0].tagName);


//ģ��.xml�������л��ַ���
var serializer = new XMLSerializer();
var xml = serializer.serializeToString(xmlDom);
alert(xml);

















