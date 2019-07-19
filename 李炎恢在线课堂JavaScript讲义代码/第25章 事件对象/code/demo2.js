



/*
	keydown，按下任意键，按下的意思就是按下立即触发
	keyup，是弹起任意键，弹起就是按下然后释放触发
	keypress，是按下字符键，abc，123，特殊字符啊什么，shift,ctrl,alt等等不是字符的键无效
	
	键码：键盘上的任意键，
	字符编码：键盘上可以输出的字符的键
	
	键码返回的是ASCII的小写字母对应的，键码只是返回那个键的值，不认识字母大小写
	键码在字符上和字符编码的ASCII是一致的。
	
	键码可以返回任意键的编码，而且字母不区分大小写
	
	键码在所有浏览器貌似都兼容
	
	document.onkeydown = function (evt) {
		var e = evt || window.event;
		alert(e.keyCode);							//keyCode返回键码
	};
	
	如果用keypress返回keyCode，发现Firefox浏览器把所有字符键返回0，
	Chrome支持keypress返回keyCode，而且还支持大小写
	IE支持keypress返回keyCode，而且还支持大小写
	
	不同浏览器在；号上返回的键码值不一致，如果用到，需要做兼容
	
	
	charCode在使用keypress的情况下，Firefox会返回字符键盘的编码，支持大小写
	IE和Opera不支持charCode这个属性
	
	一般情况下，我们不管非字符键，基本上处理的都是字符按键，所以
	
	window.onload = function () {
		document.onkeypress = function (evt) {
			alert(String.fromCharCode(getCharCode(evt)));							//charCode返回字符编码
		};
	};

	//所有浏览器都支持字符按键
	function getCharCode(evt) {
		var e = evt || window.event;
		if (typeof e.charCode == 'number') {
			return e.charCode;
		} else {
			return e.keyCode;
		}
	}

	
function getTarget(evt) {
	var e = evt || window.event;
	return e.target || e.srcElement;
}

	document.onclick = function (evt) {
		alert(getTarget(evt));								//你点击哪里，就可以得到哪里的DOM元素对象
	};

*/


window.onload = function () {
	document.onclick = function () {
		alert('document');
	};
	document.documentElement.onclick = function () {
		alert('html');
	};
	document.body.onclick = function () {
		alert('body');
	};	
	document.getElementById('box').onclick = function () {
		alert('div');
	};	
	document.getElementsByTagName('input')[0].onclick = function (evt) {
		var e = evt || window.event;
		alert('input');
		//e.stopPropagation();					//W3C取消冒泡
		//alert(e.cancelBubble);
		e.cancelBubble = true;					//IE取消冒泡
		//setStop(evt);
	};	
};


function setStop(evt) {
	
	(typeof e.stopPropagation == 'function') ? e.stopPropagation() : e.cancelBubble = true;
}





















