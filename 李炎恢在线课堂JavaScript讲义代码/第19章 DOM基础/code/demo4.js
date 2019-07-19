


/*

	var box = document.getElementById('box');
	
	//alert(box.childNodes[0].nodeValue);		//获取第一个子节点
	//alert(box.childNodes[box.childNodes.length - 1].nodeValue)		//获取最后一个子节点
	
	alert(box.firstChild.nodeValue);			//获取第一个子节点
	alert(box.lastChild.nodeValue);				//获取最后一个子节点
	
	//alert(box.ownerDocument);			//HTMLDocument，返回文档对象，根节点
	//alert(document);								//HTMLDocument
	//alert(box.ownerDocument === document);
	
	//alert(box.ownerDocument.nodeName);		//#document
	//alert(box.ownerDocument.nodeType);			//9
	
	//alert(box.parentNode);			//HTMLBodyElement
	//alert(box.firstChild.nextSibling);	//HTMLSpanElement
	//alert(box.firstChild.nextSibling.nodeName);	//下一个同级节点的标签名
	//alert(box.lastChild.previousSibling.nodeName);//上一个同级节点的标签名
	
	
	//alert(box.attributes);				//NamedNodeMap，集合数组，保存着这个元素节点的属性列表
	//alert(box.attributes.length);		//3个属性
	//alert(box.attributes[0]);			//Attr ，属性节点
	//alert(box.attributes[0].nodeType);		//2，属性节点的类型值
	//alert(box.attributes[0].nodeValue);		//bbb，第一个属性的属性值
	//alert(box.attributes[0].nodeName);		//class，第一个属性的属性名
	
	//遍历的时候，是从后向前的
	alert(box.attributes['title'].nodeValue);
	
	
	alert(removeWhiteNode(box.childNodes).length);
	
	//忽略空白字符
	function filterWhiteNode(node) {
		var ret = [];
		for (var i = 0; i < node.length; i ++) {
			if (node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)) {
				continue;
			} else {
				ret.push(node[i]);
			}
		}
		return ret;
	}
	
	//移除空白字符
	function removeWhiteNode(node) {
		for (var i = 0; i < node.length; i ++) {
			if (node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)) {
				node[i].parentNode.removeChild(node[i]);
			} 
		}
		return node;
	}
*/



window.onload = function () {
	var box = document.getElementById('box');
	alert(removeWhiteNode(box).firstChild.nodeName);
};


//移除空白节点
function removeWhiteNode(node) {
	for (var i = 0; i < node.childNodes.length; i ++) {
		if (node.childNodes[i].nodeType === 3 && /^\s+$/.test(node.childNodes[i].nodeValue)) {
			node.childNodes[i].parentNode.removeChild(node.childNodes[i]);
		} 
	}
	return node;
}


























