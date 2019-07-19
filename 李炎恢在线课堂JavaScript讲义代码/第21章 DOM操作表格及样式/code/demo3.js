


/*
	box.id = 'pox';				//交换ID之后，就会附加那个ID的样式
	
	box.style.fontFamily = 'Arial';
	
	var pox = document.getElementById('pox');
	pox.style.color = 'white';
	
	pox.id = 'box';
	
	//这么会引发各种怪异的现象，连锁反应，最终是灾难性的
	
	非常不建议通过变换ID来改变他的CSS样式
	
	
	
*/


window.onload = function () {
	
	var box = document.getElementById('box');

	//class调用，其实是可以叠加的
	//box.className = 'bbb';
	//叠加的意思是，如果样式相同，那么后面一个会覆盖前面一个，如果不同就进行叠加效果
	
	
	//box.className = 'ccc';
	//box.className = 'aaa bbb ccc';		//这么写，有点冗余，
	
	//box.className = 'aaa bbb ccc ddd';	//感觉特别冗余了，越多越冗余
	
	//box.className = 'aaa ccc ddd';			//超级麻烦了，
	
	//你想添加那个，必须把原来的完整不漏的带着，删除那个，还要把原来的都带着，特别累，而且容易错
	
	
	//addClass('ccc');				//原来的保留，附加这个
	//addClass('ddd');
	//box.className = 'ccc';	//这个就是把原来的清空掉，用这个
	
	//addClass('aaa');
	
	//alert(box.className);
	//hasClass(box, 'aaaa');
	
	addClass(box, 'ccc');
	addClass(box, 'ddd');
	
	//box.className = 'eee';
	
	removeClass(box, 'bbb');
	removeClass(box, 'ddd');
};



//判断一个class是否存在
//如果有，返回true，没有返回false
//box.className的字符串为'aaa bbb'
//element.className 表示 'aaa bbb'
//match是正则表达式里的一个方法
//如果element.className  'aaa bbb'里面有正则的字符串'aaa'
//match就是查找字符串'aaa bbb'里面是否有/aaa/，如果有，就把这个字符返回
//element.className没有ccc，那么就返回null
//转换成布尔值
//问题，你放一个aa，也能返回true
//aa不是aaa，所以这个正则不精确
//new RegExp('(\\s|^)' + cName + '(\\s|$)')通过这个正则，我们严格精确的找到了指定的class


//检查class是否存在
function hasClass(element, cName) {
	return !!element.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'));
}


//添加一个class
function addClass(element, cName) {
	if (!hasClass(element, cName)) {
		element.className += ' ' + cName;
	}
}

//移除一个class
function removeClass(element, cName) {
	if (hasClass(element, cName)) {
		element.className = element.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ');
	}
}


















