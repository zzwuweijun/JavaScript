


/*
	重复提交
	var fm = document.getElementById('myForm');
	var flag = false;
	//阻止提交
	addEvent(fm, 'submit', function (evt) {
		preDef(evt);
		//模拟延迟
		//这种方法，只限于通过提交按钮防止重复提交的，
		document.getElementById('sub').disabled = true;	//第一次提交后，将按钮禁用
		if (flag == true) return;
		flag = true;	//表示我提交过一次了
		alert('提交');
		setTimeout(function () {
			fm.submit();
		}, 5000);
	});
	
	//PS：f5只能浅刷新，缓存级别的刷新，那么从源头刷新，采用ctrl+f5即可
	
	//reset事件,reset()方法
	addEvent(fm, 'reset', function () {
		alert('Lee');
	});
	
	addEvent(document, 'click', function () {
		fm.reset();
	});
	
	获取表单控件
	var fm = document.getElementById('myForm');
	//alert(fm.elements);		//表单控件集合，HTMLCollection
	//alert(fm.length);			//向下兼容，不推荐
	//alert(fm[0]);					//向下兼容，不推荐
	//alert(fm.elements.length);	//推荐
	//alert(fm.elements[0]);	//HTMLInputElement
	//alert(fm.elements['user']);
	
	
	//PS：表单控件是什么？ form里面的input submit textarea select 这些叫做表单控件，其实就是表单元素标签
	//PS：通过表单集合获取第一个元素，非表单控件会被忽略掉
*/



addEvent(window, 'load', function () {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var sexList = fm.elements['sex'];
	//alert(sexList[0]);
	//alert(sexList[0].value);
	//alert(sexList[0].name);
	//sexList[1].disabled = true;
	//alert(sexList[0].form);		//得到从属的form对象
	//alert(sexList[0].type);		//radio
	//sexList[0].type = 'checkbox';	//不推荐使用此属性修改
	
	//alert(fm.elements['sub'].type);
	
	//user.focus();			//将焦点移入
	//user.blur();			//将焦点移出
	
	
	//传统模式：onfocus
	//addEvent(user, 'focus', function () {
	//	alert('Lee');
	//});
	addEvent(user, 'blur', function () {
		alert('blur');
	});
	addEvent(user, 'change', function () {
		alert('change');
	});
});






























