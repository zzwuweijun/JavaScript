


/*
	document.onclick = function () {
		alert(this);								//HTMLDocument，代表是document
	};
	
	window.onload = function () {
		//document.onclick = box;				//因为box()函数被onclick绑定了，所以里面的this代表document
	};


	function box() {
		alert(this);									//HTMLDocument，代表是document		
	};


	box();												//object Window，如果是在全局范围调用box()，那么this代表window



function box() {
	alert(arguments.length);				//获取参数的数量
};

box()

document.onclick = function () {
	alert(arguments.length);			//如果是事件处理函数绑定的函数，浏览器会默认传递一个参数，这个参数就是event对象
};		

	//alert(arguments[0]);				//MouseEvent，鼠标事件对象
	alert(arguments[0]);					//KeyboardEvent，键盘事件对象

	
	document.onclick = function (evt) {
		var e = evt || window.event;		//W3C || IE
		alert(e);
	};		
	
//PS:window.event这个属性IE是支持的，Chrome也是支持的，
//PS:Chrome也是支持W3C的
//PS:如果说W3C和IE的都支持的话，那么就已W3C为准


//跨浏览器鼠标按钮
function getButton(evt) {
	var e = evt || window.event;	
	if (evt) {									//这个写前面
		return e.button;
	} else if (window.event) {
		switch (e.button) {
			case 1 : 
				return 0;
			case 4 : 
				return 1;
			case 2 : 
				return 2;
		}
	}
}

	document.onmousedown = function (evt) {
		if (getButton(evt) == 0) alert('左键');
		if (getButton(evt) == 1) alert('中键');
		if (getButton(evt) == 2) alert('右键');
	};		
	
		alert(e.clientX ',' + e.clientY);		//可视区坐标
		//Chrome要用document.documentElement.scrollTop
		
		alert(e.screenX + ','+ e.screenY);	//屏幕坐标
*/



window.onload = function () {
	document.ondblclick = function (evt) {
		alert(getKey(evt));
	};
};


function getKey(evt) {
	var e = evt || window.event;	
	var keys = [];
	
	if (e.shiftKey) keys.push('shift');
	if (e.ctrlKey) keys.push('ctrl');
	if (e.altKey) keys.push('alt');						//单击+alt和360的快捷键冲突了	
	return keys;
}






















