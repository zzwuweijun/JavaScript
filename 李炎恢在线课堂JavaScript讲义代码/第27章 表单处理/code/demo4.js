


/*
	过滤输入模式：纯数字
	1.禁止或屏蔽非数字键的输入，阻止非数字键的默认行为
	2.验证后取消，你可以先输入非法字符，然后判断后，取消你刚输入的文本
	
	//屏蔽非数字键的输入
	addEvent(content, 'keypress', function (evt) {
		var e = evt || window.event;
		var charCode = getCharCode(evt);
		//alert(charCode);
		//alert(String.fromCharCode(charCode));
		//正则表达式来获取文本是否为数字
		if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 8) {
			preDef(evt);			//屏蔽掉非数字键盘的输入
		}
		
		//PS：charCode > N，N只限于放开光标键退格键和删除键，放的太多就会有更多的键被释放
	});
	

	addEvent(content, 'copy', function (evt) {
		preDef(evt);
	});
	addEvent(content, 'cut', function (evt) {
		preDef(evt);
	});
	addEvent(content, 'paste', function (evt) {
		preDef(evt);
	});

	
	//屏蔽中文输入法，但Chrome无效
	//content.style.imeMode = 'disabled';
	
	//PS：屏蔽输入法用户体验不是很好，会让用户以为电脑坏了
	
	//验证数据非法后取消输入
	addEvent(content, 'keyup', function (evt) {
		this.value = this.value.replace(/[^\d]/g, '');		//讲非数字键转换为空
	});
	
	
	//addEvent(content, 'beforecopy', function (evt) {
	//	alert('复制前！');
	//});
*/



addEvent(window, 'load', function () {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	
	
	addEvent(fm.elements['a1'], 'keyup', tabForWard);
	addEvent(fm.elements['a2'], 'keyup', tabForWard);
	addEvent(fm.elements['a3'], 'keyup', tabForWard);
	
	
	function tabForWard(evt) {
		var e = evt || window.event;
		//判断当前的长度是否和我们输入的长度是否一致
		if (this.value.length == this.maxLength) {
			//遍历所有控件
			for (var i = 0; i < fm.elements.length; i ++) {
				if (fm.elements[i] == this) {
					fm.elements[i + 1].focus();
					return;
				}
			}
		}
	}
	
});





























