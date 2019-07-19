


/*
		var box = document.getElementById('box');
	//alert(box);
	//alert(box.nodeName);		//获取元素节点的标签名，和tagName等价
	//alert(box.nodeType);		//获取元素节点的类型值，1
	alert(box.nodeValue);		//元素节点本身没有内容，null
	//node本身把节点指针放在元素<div></div>上，也就是说，本身是没有value
	//如果要输出<div>xxx</div>中里面包含的文本内容，那么前面innerHTML
	alert(box.innerHTML);		//获取元素节点里面的文本内容
	//node只能获取当前节点的东西
	
	文本节点  不等于  文本内容
	
	//测试Div<em>倾斜</em>结尾，如果当作元素节点的文本内容，他就是一个整体
	alert(box.innerHTML);
	
	//alert(box.childNodes);		//NodeList集合，返回当前元素节点所有的子节点列表
	//alert(box.childNodes.length);	//3个子节点
	//3个子节点为：测试Div<em>倾斜</em>结尾
	//第一个子节点为：测试Div，这个节点称作为：文本节点
	//第二个子节点为：<em>倾斜</em>，这个节点称作为：元素节点
	//第三个子节点为：结尾，这个节点称作为：文本节点
	
	//alert(box.childNodes[0]);		//Object Text表示一个文本节点对象
	//alert(box.childNodes[0].nodeType);	//3,表示文本节点
	//alert(box.childNodes[0].nodeValue);		//获取文本节点的文本内容
	//alert(box.childNodes[0].innerHTML);		//undefined无效，当前的文本，怎么可以找到里面的内容？。
	//alert(box.childNodes[0].nodeName); 		//#text，文本节点没有标签名
	
	
	//通过判断节点类型，来获取不同的输出
	for (var i = 0; i < box.childNodes.length; i ++) {
		if (box.childNodes[i].nodeType === 1) {
			alert('元素节点：' + box.childNodes[i].nodeName);
		} else if (box.childNodes[i].nodeType === 3) {
			alert('文本节点：' + box.childNodes[i].nodeValue);
		}
	}
	
	
*/






window.onload = function () {
	var pox = document.getElementById('pox');
	//pox.innerHTML = '测试<strong>Pox</strong>';
	//pox.nodeValue = '测试Pox';	//没出错，但没有赋值上，nodeValue必须在当前节点上操作
	pox.childNodes[0].nodeValue = '测试<strong>Pox</strong>';
};

























