





//跨浏览器返回XML DOM对象
function getXMLDOM(xmlStr) {
	var xmlDom = null;
	
	if (typeof window.DOMParser != 'undefined') {
		xmlDom = (new DOMParser).parseFromString(xmlStr, 'text/xml');
		var errors = xmlDom.getElementsByTagName('parsererror');
		if (errors.length > 0) {
			throw new Error('错误信息：' + errors[0].textContent);
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
				//跳过
			}
		}
		xmlDom.loadXML(xmlStr);
		if (xmlDom.parseError != 0) {
				throw new Error('错误信息：' + xmlDom.parseError.reason);
		}
		return xmlDom;
	} else {
		throw new Error('您的系统或浏览器不支持XML DOM对象！');
	}
	
	return xmlDom;
}


//序列化XML
function serializerXML(xmlDom) {
	var xml = '';
	
	if (typeof window.XMLSerializer != 'undefined') {
		xml = (new XMLSerializer()).serializeToString(xmlDom);
	} else if (typeof xmlDom.xml != 'undefined') {
		xml = xmlDom.xml;
	}
	
	return xml;
}


//跨浏览器单一节点
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

//跨浏览器节点集合
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
	throw new Error('XPath有误！');
}
*/


//两种方式创建XPathResult

/*
//单一节点，W3C的XPath下标是从1开始的
var eva = new XPathEvaluator();
var result = eva.evaluate('root/user', xmlDom, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
if (result !== null) {
	alert(serializerXML(result.singleNodeValue));
}



//单一节点
var result = xmlDom.evaluate('root/user', xmlDom, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
if (result !== null) {
	alert(serializerXML(result.singleNodeValue));
}




//节点集合
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











