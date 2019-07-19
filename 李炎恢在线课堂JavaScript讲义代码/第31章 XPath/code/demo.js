





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



var xmlStr = '<root><user id="5">Lee</user><user id="6">Koko</user></root>';
var xmlDom = getXMLDOM(xmlStr);
//alert(serializerXML(xmlDom));

//IE中的两种方法：1.selectSingleNode() 获取单一节点，2.selectNodes() 获取节点集合
//XPath查找手段，就是路径查找，结构树查找


//var node = xmlDom.selectSingleNode('root/user');
//alert(node.xml);
//alert(node.tagName);
//alert(node.firstChild.nodeValue);		//这里获取值的时候还是标准DOM

//PS：selectSingleNode是获取单一节点，如果有多个，那么就会返回查找到的第一个。
//xmlDom就是上下文节点，它的指针指向的是root之前

//var node = xmlDom.documentElement;
//xmlDom.documentElement就是root元素，这个时候指针就在root之后，user之前
//var node = xmlDom.documentElement.selectSingleNode('root/user');		//错误的
//var node = xmlDom.documentElement.selectSingleNode('user');			//正确的
//alert(node.xml);
//xmlDom.documentElement这个也是上下文节点对象

//var node = xmlDom.selectSingleNode('user');			//错误了
//alert(node.xml);


//PS：总结上下文节点，上下文节点对象必须和XPath路径配合好，方能成功。但一般来说，直接用根节点即可，xmlDom，防止混淆

 //XPath规定默认从1开始，但IE是从0开始的，JS数组也是从0开始的，所以，我们都从0开始最好
//var node = xmlDom.selectSingleNode('root/user[1]');
//alert(node.xml);


//var node = xmlDom.selectSingleNode('root/user/text()');			//text()可以获取节点内的值
//alert(node.nodeValue);
//alert(node.xml);


//var node = xmlDom.selectSingleNode('//user[1]');			//双斜杠可以获取不关心层次的第一个user
//alert(node.xml);

//var node = xmlDom.selectSingleNode('root//user');			//root//user表示在root范围内找到不关心任何层次的user
//alert(node.xml);


//var node = xmlDom.selectSingleNode('root/user[@id=6]');				//通过唯一的属性找到user节点
//alert(node.xml);

var nodes = xmlDom.selectNodes('root[0]/user');
//alert(nodes.length);
//alert(nodes[0].xml);
//alert(nodes[1].xml);
//alert(nodes[0].xml);
alert(nodes[1].xml);







