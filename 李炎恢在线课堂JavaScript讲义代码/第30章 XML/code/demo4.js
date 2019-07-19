





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



var xmlStr = '<root><user>Lee</user></root>';
var xmlDom = getXMLDOM(xmlStr);
alert(serializerXML(xmlDom));





//PS：为了跨越所有浏览器兼容，我们放弃了从外部加载XML文件，而使用了字符串XML加载和序列化。







/*
//模拟loadXML()方法，可以简易的创建XML字符串
var xmlParser = new DOMParser();		//创建DOMParser对象
var xmlStr = '<root>\n\t<user>Lee</user>\n</root>';		//XML字符串
var xmlDom = xmlParser.parseFromString(xmlStr, 'text/xml');		//XMLDocument XMLDOM
//alert(xmlDom.getElementsByTagName('user')[0].tagName);


//模拟.xml属性序列化字符串
var serializer = new XMLSerializer();
var xml = serializer.serializeToString(xmlDom);
var errors = xmlDom.getElementsByTagName('parsererror');
if (errors.length == 0) {
	alert(xml);
} else {
	throw new Error('错误信息：' + errors[0].textContent);
}
*/

















