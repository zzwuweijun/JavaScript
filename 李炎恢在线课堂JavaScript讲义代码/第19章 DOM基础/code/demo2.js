






/*
	var box = document.getElementById('box');
	alert(box.innerHTML);										//获取当前元素节点的文本内容(包含HTML)
	
	var box = document.getElementById('box');
	box.innerHTML = '玩转<strong>JS</strong>';	//赋值，可以解析HTML，不是单纯的文本了(包含了HTML)

	var box = document.getElementById('box');
	box.id = 'kkk';		//直接调用的属性也可以赋值
	
	var li = document.getElementsByTagName('li');		//参数传递一个标签名即可
	//alert(li);			//返回一个数组集合，HTMLCollection
	//alert(li.length);	//返回li数组的数量
	//alert(li[0]);		//HTMLLIElement，li的节点对象
	//alert(li.item(0));	//同上，意义一致。HTMLLIElement
	//alert(li[0].tagName);	//LI
	//alert(li[0].innerHTML);	//1
	
	获取body节点对象
	var body = document.getElementsByTagName('body')[0];
	//alert(body);				//返回 HTMLBodyElement对象，body节点
	
	var all = document.getElementsByTagName("*");
	//alert(all.length); 
	
	//火狐浏览器的firebug打开后，会自动创建一个div，所以会多算一个
	
	alert(all[0].tagName);
	//IE浏览器比火狐和谷歌多一个节点，是把<!的文档声明也算进去了
	
	//alert(all[0].innerHTML);
	
	var box = document.getElementsByName('test')[0];
	alert(box);
	
	//IE浏览器在获取不合法的HTML中的name时，会获取不到
	//也就是说name 属性本身不是div里的属性，所以IE就忽略掉了
	
	
	var input = document.getElementsByName('test')[0];
	alert(input.value);
	alert(input.checked);
	
	//input中有合法的name属性，所以，IE也就支持了。
	
	
	var box = document.getElementById('box');
	alert(box.bbb);		//自定义，W3C不合法，非IE不支持，但IE支持
	
	alert(box.getAttribute('style'));		//非IE返回的是style字符串，IE返回的是对象，这里有个不兼容

	alert(box.getAttribute('bbb'));	//自定义，就全部兼容了
	
	//alert(box.className);
	//alert(box.getAttribute('class'));		//IE无法获取
	//alert(box.getAttribute('className'));//IE可以获取，非IE无法获取
	
	//跨浏览器获取className
	if (box.getAttribute('className') == null) {
		alert(box.getAttribute('class'));
	} else {
		alert(box.getAttribute('className'));
	}
	
	var box = document.getElementById('box');
	//alert(box.onclick); //均返回函数式
	alert(box.getAttribute('onclick'));	//IE7及一下会返回函数式，非IE返回字符串
	
	//box.setAttribute('title', '标题');		//创建一个属性和属性值
	//box.setAttribute('align', 'center');
	//box.setAttribute('bbb', 'cccc');
	box.setAttribute('style', 'color:green');		//IE7及以下，style和onclick没有效果，避免使用
*/

window.onload = function () {
	var box = document.getElementById('box');
	box.removeAttribute('style');
};































