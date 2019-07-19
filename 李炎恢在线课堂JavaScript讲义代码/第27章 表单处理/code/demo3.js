


/*
	value的获取
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	
	alert(user.value);			HTML DOM获取
	alert(content.value);
	
	PS：在HTML中input有value属性，textarea没有value属性
	PS：在js中input 和 textarea都有value属性
	
	//使用标准DOM获取
	//alert(user.getAttribute('value'));
	//alert(content.getAttribute('value'));		//兼容性会有问题，IE可以获取，非IE获取不到
	
	//alert(user.getAttribute('value'));				//标准DOM无法获取更改后的value
	alert(user.value);
	
	alert(user.defaultValue);			//获取一开始的value值，不会改变
	
	
	user.select();		//选定文本
	
	//选择部分文本
	//user.setSelectionRange(2,3);		//从第0个位置到第1个位置的文本
	//user.setSelectionRange(0,user.value.length);
	//user.focus();			//焦点移入
	
	
	//PS：非IE从第N个到第M个位置
	
	//IE文本范围的概念，这个知识，我们没有讲过，这里就先简单用一下
	//W3C也有一个范围的概念，叫做DOM范围，以后有时间系统的讲解
	

	var range = user.createTextRange();		//range对象，文本范围
	range.collapse(true);							//将文本指针移到开头
	range.moveStart('character',2);			//逐字移动，0
	range.moveEnd('character',1);			//同上
	range.select();

	
	//PS：IE是从第N个开始选择M个
	
	//跨浏览器选定部分文本
	function getSelectText(text, start, num) {
		if (text.setSelectionRange) {
			text.setSelectionRange(start,num);
			text.focus();
		} else if (text.createTextRange) {
			var range = text.createTextRange();		
			range.collapse(true);							
			range.moveStart('character',start);			
			range.moveEnd('character',num - start);				//用最后的位置 - 开始的位置 = 个数		
			range.select();
		}
	}
	
	
	getSelectText(user, 1, 3);
*/



addEvent(window, 'load', function () {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	
	//select 事件
	addEvent(user, 'select', function () {
		//alert(this.value);
		//alert(this.selectionStart);
		//alert(this.selectionEnd);
		//alert(this.value.substring(this.selectionStart, this.selectionEnd));
		//alert(document.selection.createRange().text);
		document.getElementById('p').innerHTML = getSelectText(user);
	});
	
	function getSelectText(text) {
		if (typeof text.selectionStart == 'number') {
			return text.value.substring(text.selectionStart, text.selectionEnd);
		} else if (document.selection) {
			return document.selection.createRange().text;
		}
	}
	
	//非IE选定文本且释放鼠标后触发select事件
	//IE是只要选定了一个字符，就触发select事件，但你的速度比较快，就可以选择多个，但不稳定
	
	//document.selection对象可以选择
	//document.selection有一个方法可以创建文本范围对象：createRange();
	//createRange()有一个属性是text，可以得到你选择的文本
	
});





























