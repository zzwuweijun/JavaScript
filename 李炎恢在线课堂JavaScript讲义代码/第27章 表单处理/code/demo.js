


/*
	获取form对象的方法
	//var fm = document.getElementById('myForm');
	//var fm = document.getElementsByTagName('form')[0];
	//var fm = document.forms[0];			//HTML DOM通过0下表获取
	//var fm = document.forms['yourForm'];	//HTML DOM通过name下表获取
	var fm = document.yourForm;		//向下兼容的方法，不推荐使用
	
	submit事件触发的一些问题
	//阻止提交
	//addEvent(fm, 'submit', function (evt) {
	//	preDef(evt);
	//});

	//PS：submit事件，用传统的方式：fm.onsubmit = function () {};
	
	//疑问：submit事件，为什么要用form对象来触发呢？为什么不能是input中的sumit按钮触发呢？
	
	var sub = document.getElementById('sub');
	//addEvent(sub, 'submit', function (evt) {
	//	preDef(evt);
	//});
	
	//PS：把submit事件注册到input中的submit按钮，是无法触发submit事件的
	//PS：必须把submit事件绑定到form对象上，才可以触发submit事件
	//PS：只不过触发submit事件的流程是点击input中的submit按钮而已
	
	////addEvent(fm, 'submit', function (evt) {
	//	alert('Lee');
	//});
	
	addEvent(sub, 'click', function (evt) {
		alert('Lee');
	});
	
	//使用fm.submit()让非submit按钮实现提交
	//var button = document.getElementById('button');
	//addEvent(button, 'click', function () {
	//	fm.submit();				//可以让非submit按钮提交表单
	//});
	
	var strong = document.getElementsByTagName('strong')[0];
	addEvent(strong, 'click', function () {
		fm.submit();				
	});
	
*/




addEvent(window, 'load', function () {
	var fm = document.getElementById('myForm');
	//阻止提交
	addEvent(fm, 'submit', function (evt) {
		preDef(evt);
	});
	
	//实现ctrl+enter实现提交
	addEvent(document, 'keydown', function (evt) {
		var e = evt || window.event;
		if (e.ctrlKey && e.keyCode == 13) fm.submit();
	});
});






























