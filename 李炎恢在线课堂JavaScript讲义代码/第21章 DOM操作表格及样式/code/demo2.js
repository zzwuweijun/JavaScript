


/*
	DOM对CSS的能力检测，IE上并不精确
	
	alert(document.implementation.hasFeature('CSS', '2.0'));
	alert(document.implementation.hasFeature('CSS2', '2.0'));
	alert(document.implementation.hasFeature('HTML', '1.0'));
	
	行内、内联、链接
	行内：就是在标签里的style属性添加的样式
	内联：就是<style>标签里书写的样式
	链接：就是通过<link href>标签链接到的样式
	
	
	//使用行内style获取属性
	var box = document.getElementById('box');
	//alert(box.style);			//CSSStyleDeclaration对象
	//alert(box.style.color);
	//alert(box.style.fontSize);	//把-号去掉，后面的字符大写
	//alert(box.style.background);
	//alert(box.style.float);
	//alert(box.style.cssFloat);		//非IE浏览器对关键字保留字的用法
	//alert(box.style.styleFloat);		//IE浏览器的调用方式
	alert(box.style.cssFloat || box.style.styleFloat);	//跨浏览器兼容
	
	var box = document.getElementById('box');
	box.style.color = 'red';
	box.style.fontSize = '20px';
	box.style.background = '#ccc';
	//box.style.cssFloat = 'right';
	//box.style.styleFloat = 'right';
	typeof box.style.cssFloat != 'undefined' ? box.style.cssFloat = 'right' : box.style.styleFloat = 'right';
	
	
	//DOM2级为style提供了一些属性方法
	var box = document.getElementById('box');
	//alert(box.style.cssText);			//查看CSS文本
	alert(box.style.length);
	
	//box.style.setProperty('color','blue');	//火狐旧版本的BUG
	box.style.removeProperty('color');
	
	alert(box.style.color);			//style属性只能获取和设置行内，不能获取内联和链接
*/



window.onload = function () {

	var box = document.getElementById('box');
	//var style = window.getComputedStyle(box, null);
	//alert(style.color);						//计算后的样式，一般表示默认样式和设置后的样式
	//var style = box.currentStyle;
	//alert(style.color);						//IE的计算样式
	//alert(style.fontSize);
	
	var style = window.getComputedStyle ? window.getComputedStyle(box, null) : null || box.currentStyle;
	//alert(style.fontSize);
	//alert(style.border);	//复合型属性就无法获取了
	
	//alert(style.borderTopColor);
	
	//border这个属性被计算后就不存在了
	
	alert(box.style.border);
	
	//计算样式的获取，不仅仅可以获取没有设置的默认样式，也可以获取行内，内联和链接
	//为什么可以获取内联和链接呢？
	//因为不管你在那里设置CSS，最终会驻留在浏览器的计算样式里

};

























