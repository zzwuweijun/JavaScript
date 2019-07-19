






/*
		IE中的XML
		
		创建XML DOM
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
			//跳过
		}
	}
	throw new Error('您的系统或浏览器不支持MSXML库！');
}

/*
//载入XML文件，两种方式：1.加载XML字符loadXML()；2.加载XML外部文件load()
//因为XML和XHTML一样，都是通过DOM节点操作的，所以之前的知识都可以用上

var xmlDom = createXMLDOM();
xmlDom.loadXML('<root>\n<user>Lee</user>\n</root>');		//加载XML字符串
//alert(xmlDom.xml);																//序列化XML，打印字符串

var user = xmlDom.getElementsByTagName('user')[0];
//alert(user.nodeType);
//alert(user.tagName);
//alert(user.innerHTML);		//innerHTML不是标准DOM
//alert(user.firstChild.nodeValue);



var xmlDom = createXMLDOM();
xmlDom.load('demo.xml');				//加载外部XML文件
//alert(xmlDom.xml);
var user = xmlDom.getElementsByTagName('user')[0];
alert(user.nodeType);
alert(user.tagName);
//alert(user.innerHTML);		//innerHTML不是标准DOM
alert(user.firstChild.nodeValue);




var xmlDom = createXMLDOM();
xmlDom.load('demo.xml');	
var bbb = xmlDom.createElement('bbb');
var root = xmlDom.documentElement;
root.appendChild(bbb);
var bbbText = xmlDom.createTextNode('kkk');
bbb.appendChild(bbbText);
alert(xmlDom.xml);


//PS：XML和XHTML一样，可以通过标准DOM来操作。

*/






