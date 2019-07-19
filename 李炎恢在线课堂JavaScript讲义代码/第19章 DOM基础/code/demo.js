



/*
	节点分为三类：
	1.元素节点：其实就是标签，<div></div>
	2.文本节点：其实就是标签内的纯文本，测试Div
	3.属性节点：其实就是标签的属性，id="box"
	
	查找元素：
	getElementById();  参数传递一个元素的id值，这样就可以获取到该元素节点
	
	为什么查找不到元素？
	DOM操作必须等待HTML文档加载完毕，才可以获取
	
	怎样获取？
	1.把<script>移后
	
	HTMLDivElement表示Div的节点对象
	
	IE是以COM实现的DOM，所以只会返回一个object
	
	
	2.用将来会学到的onload事件，来加载HTML
	window.onload = function () {
		//这里存放当网页所有内容都加载完毕后，再执行的代码
	};
	
	
	一个页面只能允许一个id，表示唯一性。
	getElementById建议区分大小写，以免不兼容
	如果是IE5.0-，不兼容getElementById，可以做个判断
	
	if (document.getElementById) {
		var box = document.getElementById('box');
		alert(box);
	} else {
		alert('您的浏览器不兼容，请更换~');
	}
	
	//alert(box.tagName);		//获取这个元素节点的标签名
	//alert(box.innerHTML);		//获取这个元素节点里的文本(包含HTML标签)，纯文本不能包含标签
	innerHTML获取的是这个元素的文本内容，而不是文本节点
	
	//alert(box.id);			//获取这个元素节点id属性的值，注意不是属性节点
	//alert(box.title);			//获取title属性的值
	//alert(box.style);			//获取style属性对象
	//alert(box.style.color);	//获取style属性对象中color属性的值
	//alert(box.class);			//貌似是保留字
	//alert(box.className);	//获取class属性的值
	以上是HTML属性的直接调用，当然后面还有几种方式可以调用
	
	alert(box.bbb);				//自定义属性，直接获取，非IE不支持
	如果有浏览器不支持，那么必须做兼容操作，或者尽可能不去使用
*/


window.onload = function () {
	var box = document.getElementById('box');
	
};




























