





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



var xmlStr = '<root><user id="5">Lee</user><user id="6">Koko</user></root>';
var xmlDom = getXMLDOM(xmlStr);
//alert(serializerXML(xmlDom));

//IE�е����ַ�����1.selectSingleNode() ��ȡ��һ�ڵ㣬2.selectNodes() ��ȡ�ڵ㼯��
//XPath�����ֶΣ�����·�����ң��ṹ������


//var node = xmlDom.selectSingleNode('root/user');
//alert(node.xml);
//alert(node.tagName);
//alert(node.firstChild.nodeValue);		//�����ȡֵ��ʱ���Ǳ�׼DOM

//PS��selectSingleNode�ǻ�ȡ��һ�ڵ㣬����ж������ô�ͻ᷵�ز��ҵ��ĵ�һ����
//xmlDom���������Ľڵ㣬����ָ��ָ�����root֮ǰ

//var node = xmlDom.documentElement;
//xmlDom.documentElement����rootԪ�أ����ʱ��ָ�����root֮��user֮ǰ
//var node = xmlDom.documentElement.selectSingleNode('root/user');		//�����
//var node = xmlDom.documentElement.selectSingleNode('user');			//��ȷ��
//alert(node.xml);
//xmlDom.documentElement���Ҳ�������Ľڵ����

//var node = xmlDom.selectSingleNode('user');			//������
//alert(node.xml);


//PS���ܽ������Ľڵ㣬�����Ľڵ��������XPath·����Ϻã����ܳɹ�����һ����˵��ֱ���ø��ڵ㼴�ɣ�xmlDom����ֹ����

 //XPath�涨Ĭ�ϴ�1��ʼ����IE�Ǵ�0��ʼ�ģ�JS����Ҳ�Ǵ�0��ʼ�ģ����ԣ����Ƕ���0��ʼ���
//var node = xmlDom.selectSingleNode('root/user[1]');
//alert(node.xml);


//var node = xmlDom.selectSingleNode('root/user/text()');			//text()���Ի�ȡ�ڵ��ڵ�ֵ
//alert(node.nodeValue);
//alert(node.xml);


//var node = xmlDom.selectSingleNode('//user[1]');			//˫б�ܿ��Ի�ȡ�����Ĳ�εĵ�һ��user
//alert(node.xml);

//var node = xmlDom.selectSingleNode('root//user');			//root//user��ʾ��root��Χ���ҵ��������κβ�ε�user
//alert(node.xml);


//var node = xmlDom.selectSingleNode('root/user[@id=6]');				//ͨ��Ψһ�������ҵ�user�ڵ�
//alert(node.xml);

var nodes = xmlDom.selectNodes('root[0]/user');
//alert(nodes.length);
//alert(nodes[0].xml);
//alert(nodes[1].xml);
//alert(nodes[0].xml);
alert(nodes[1].xml);







