


/*
	呈现
		
	if (document.compatMode == 'CSS1Compat') {
		alert(document.documentElement.clientWidth);
	} else {
		alert(document.body.clientWidth);
	}
	
	document.getElementById('box').scrollIntoView();		//将指定的节点滚动到可见范围内
	
	var box = document.getElementById('box');
	//alert(box.childNodes.length);
	//alert(box.children.length);				//忽略掉了空白节点
	alert(box.children[0].nodeName);
	
	

function contains(refNode, otherNode) {
	if (typeof refNode.contains != 'undefined' && !(BrowserDetect.browser == 'Safari' && BrowserDetect.version < 3)) {
		return refNode.contains(otherNode);
	} else if (typeof refNode.compareDocumentPosition == 'function') {
		return refNode.compareDocumentPosition(otherNode) > 16;
	} else {
		var node = otherNode.parentNode;
		do {
			if (node === refNode) {
				return true;
			} else {
				node = otherNode.parentNode;
			}
		} while (node != null)
		return false;
	}
}

	var box = document.getElementById('box');
	var p = box.firstChild;
	//alert(box.contains(p));			//判断box是不是p的父节点
	
	//alert(box.compareDocumentPosition(p) > 16);	//包含关系
	
	//alert(typeof box.contains);
	
	
	//PS：火狐旧版本不支持3.6，新版支持14
	//PS：Safari2.x不支持，3.0以上才支持
	//PS：很多更低的版本，提供的两个方案均不支持
	
	alert(contains(box,p));
	
	
	var box = document.getElementById('box');
	
	function getInnerText(element) {
		if (typeof element.textContent == 'string') {
			return element.textContent;
		} else {
			return element.innerText;
		}
	}


	function setInnerText(element, text) {
		if (typeof element.textContent == 'string') {
			element.textContent = text;
		} else {
			element.innerText = text;
		}
	}

	//alert(box.innerText);			//获取文本并过滤掉HTML，直接删掉的，火狐不支持
	//box.innerText = '<b>123</b>';	//赋值并转义HTML
	
	//alert(typeof box.textContent);
	alert(getInnerText(box));
	
	//alert(document.getElementById('box').innerHTML); //获取文本(不过滤HTML)
	//document.getElementById('box').innerHTML = '<b>123</b>'; //可解析HTML
	document.getElementById('box').innerHTML = "<script>alert('')</script>";
	
*/



window.onload = function () {
	
	var box = document.getElementById('box');
	//alert(box.outerText);
	box.outerText = '<b>123</b>';
	box.outerHTML = '<b>123</b>';
	alert(document.getElementById('box'));		//null了，表明<div>这个标签被抹去了
};

























