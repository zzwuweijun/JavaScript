






/*
		IE�е�XML
		
		����XML DOM
		var xmlDom = new ActiveXObject('MSXML2.DOMDocument6.0');
		alert(xmlDom);

*/



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
//����XML�ļ������ַ�ʽ��1.����XML�ַ�loadXML()��2.����XML�ⲿ�ļ�load()
//��ΪXML��XHTMLһ��������ͨ��DOM�ڵ�����ģ�����֮ǰ��֪ʶ����������

var xmlDom = createXMLDOM();
xmlDom.loadXML('<root>\n<user>Lee</user>\n</root>');		//����XML�ַ���
//alert(xmlDom.xml);																//���л�XML����ӡ�ַ���

var user = xmlDom.getElementsByTagName('user')[0];
//alert(user.nodeType);
//alert(user.tagName);
//alert(user.innerHTML);		//innerHTML���Ǳ�׼DOM
//alert(user.firstChild.nodeValue);



var xmlDom = createXMLDOM();
xmlDom.load('demo.xml');				//�����ⲿXML�ļ�
//alert(xmlDom.xml);
var user = xmlDom.getElementsByTagName('user')[0];
alert(user.nodeType);
alert(user.tagName);
//alert(user.innerHTML);		//innerHTML���Ǳ�׼DOM
alert(user.firstChild.nodeValue);




var xmlDom = createXMLDOM();
xmlDom.load('demo.xml');	
var bbb = xmlDom.createElement('bbb');
var root = xmlDom.documentElement;
root.appendChild(bbb);
var bbbText = xmlDom.createTextNode('kkk');
bbb.appendChild(bbbText);
alert(xmlDom.xml);


//PS��XML��XHTMLһ��������ͨ����׼DOM��������

*/






