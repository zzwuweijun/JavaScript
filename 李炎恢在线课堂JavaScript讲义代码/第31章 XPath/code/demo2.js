





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


//���������һ�ڵ�
function selectSingleNode(xmlDom, xpath) {
	var node = null;
	if (typeof xmlDom.evaluate != 'undefined') {		//W3C
		var patten = /\[(\d+)\]/;
		var flag = xpath.match(patten);
		var num = 0;
		if (flag !== null) {
			num = parseInt(RegExp.$1) + 1;
			xpath = xpath.replace(patten, '[' + num + ']');
		}
		var result = xmlDom.evaluate(xpath, xmlDom, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
		if (result !== null) {
			node = result.singleNodeValue;
		}
	} else if (typeof xmlDom.selectSingleNode != 'undefined') {		//IE
		node = xmlDom.selectSingleNode(xpath);
	}
	
	return node;
}

//��������ڵ㼯��
function selectNodes(xmlDom, xpath) {
	var nodes = [];
	if (typeof xmlDom.evaluate != 'undefined') {		//W3C
		var patten = /\[(\d+)\]/;
		var flag = xpath.match(patten);
		var num = 0;
		if (flag !== null) {
			num = parseInt(RegExp.$1) + 1;
			xpath = xpath.replace(patten, '[' + num + ']');
		}
		var result = xmlDom.evaluate(xpath, xmlDom, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
		if (result != null) {
			var node = null;
			while ((node = result.iterateNext()) !== null) {
				nodes.push(node);
			}
		}
	} else if (typeof xmlDom.selectNodes != 'undefined') {		//IE
		nodes = xmlDom.selectNodes(xpath);
	}
	
	return nodes;
}

var xmlStr = '<root><user id="5">Lee</user><user id="6">Koko</user></root>';
var xmlDom = getXMLDOM(xmlStr);
var nodes = selectNodes(xmlDom, 'root/user');
alert(nodes.length);
alert(serializerXML(nodes[0]));
alert(serializerXML(nodes[1]));

/*
try {
	var node = selectSingleNode(xmlDom, 'root/user[2]');
	alert(serializerXML(node));
} catch (e) {
	throw new Error('XPath����');
}
*/


//���ַ�ʽ����XPathResult

/*
//��һ�ڵ㣬W3C��XPath�±��Ǵ�1��ʼ��
var eva = new XPathEvaluator();
var result = eva.evaluate('root/user', xmlDom, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
if (result !== null) {
	alert(serializerXML(result.singleNodeValue));
}



//��һ�ڵ�
var result = xmlDom.evaluate('root/user', xmlDom, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
if (result !== null) {
	alert(serializerXML(result.singleNodeValue));
}




//�ڵ㼯��
var result = xmlDom.evaluate('root/user', xmlDom, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
if (result != null) {
	var nodes = [];
	var node = result.iterateNext();
	while (node !== null) {
		nodes.push(node);
		node = result.iterateNext();
	}
}


alert(serializerXML(nodes[0]));
alert(serializerXML(nodes[1]));
*/











