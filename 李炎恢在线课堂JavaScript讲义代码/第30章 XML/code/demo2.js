


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
//默认使用的异步加载
var xmlDom = createXMLDOM();
xmlDom.load('demo.xml');
alert(xmlDom.xml);


//PS：在服务器端，默认使用的是异步加载。
//两个原因：1.在服务器端，使用的异步加载，load()还没有加载完毕，就去打印xmlDom.xml序列化的字符串



//使用同步加载
var xmlDom = createXMLDOM();
xmlDom.async = false;						//同步设置false，异步设置true，默认是异步
xmlDom.load('demo.xml');
alert(xmlDom.xml);


//使用同步记载延迟的PHP文件
var xmlDom = createXMLDOM();
xmlDom.async = false;						//同步设置false，异步设置true，默认是异步
xmlDom.load('demo.php');				//加载这个PHP文件，使用了5秒，并且后面的代码没有执行
alert(xmlDom.xml);							//5秒后才执行的

//PS：使用同步加载，如果延迟，那么整个浏览器就假死了。
*/


//我们应该用异步
var xmlDom = createXMLDOM();
xmlDom.async = true;						//同步设置false，异步设置true，默认是异步

xmlDom.onreadystatechange = function () {		//这个事件必须放在load()方法前面，意图先载入事件，再当load()执行的似乎才能激活
	//alert(xmlDom);
	if (xmlDom.readyState == 4) {
	
		if (xmlDom.parseError.errorCode == 0) {
			//alert(this === xmlDom);				//this执行的是window
			alert(xmlDom.xml);
		} else {
			throw new Error('错误行号：' + xmlDom.parseError.line + 
										 '\n错误代号：' + xmlDom.parseError.errorCode +
										 '\n错误解释：' + xmlDom.parseError.reason);
		}
	}
}

xmlDom.load('demo.xml');				


//onreadystatechange比较特殊，里面的this表示 window而不是执行的object














