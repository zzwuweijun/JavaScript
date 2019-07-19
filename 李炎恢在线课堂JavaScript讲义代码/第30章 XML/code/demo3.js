


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
//DOM2级XML
var xmlDom = document.implementation.createDocument('', 'root', null);		//XML DOM对象已创建，并且提供了<root>根标签
//alert(xmlDom);
//alert(xmlDom.documentElement.tagName);
//alert(xmlDom.getElementsByTagName('root')[0].tagName);

//使用标准DOM去创建节点
var user = xmlDom.createElement('user');
xmlDom.documentElement.appendChild(user);
alert(xmlDom.getElementsByTagName('user')[0].tagName);

//PS：DOM2级的XML DOM对象是不支持loadXML()方法，无法简易的通过字符串创建XML文档
//PS：有没有load()方法呢？就是在外部加载XML文件
*/

/*
//同步加载xml文件
var xmlDom = document.implementation.createDocument('', 'root', null);		//创建XMLDOM对象
xmlDom.async = false;												//false是同步，true是异步，异步true是默认
xmlDom.load('demo.xml');										//载入外部XML文件
//alert(xmlDom.xml);													//输出序列化后的XML字符串
//alert(xmlDom.getElementsByTagName('user')[0].tagName);
//alert(xmlDom.getElementsByTagName('user')[0].firstChild.nodeValue);
alert(xmlDom.getElementsByTagName('user')[0].textContent);			//相当于XHTML节点中的innerHTML

//PS：DOM2级是没有.xml属性来序列化XML字符的


//异步加载XML文件
var xmlDom = document.implementation.createDocument('', 'root', null);		//创建XMLDOM对象
xmlDom.async = true;												//false是同步，true是异步，异步true是默认
xmlDom.onload = function () {								//异步加载，通过onload即可，类似于IE中的就绪状态事件
	alert(xmlDom.getElementsByTagName('user')[0].textContent);
};
xmlDom.load('demo.xml');


//PS：load()方法只支持Firefox浏览器，和新版本的Opera浏览器，其他浏览器不支持

*/



//1.不能简易的使用字符串来创建XML，比如类似与IE的loadXML()方法
//2.不能够像IE中那样，通过.xml序列化XML字符串输出


//模拟loadXML()方法，可以简易的创建XML字符串
var xmlParser = new DOMParser();		//创建DOMParser对象
var xmlStr = '<root>\n\t<user>Lee</user>\n</root>';		//XML字符串
var xmlDom = xmlParser.parseFromString(xmlStr, 'text/xml');		//XMLDocument XMLDOM
//alert(xmlDom.getElementsByTagName('user')[0].tagName);


//模拟.xml属性序列化字符串
var serializer = new XMLSerializer();
var xml = serializer.serializeToString(xmlDom);
alert(xml);

















