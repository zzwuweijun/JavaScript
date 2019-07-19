


/*
var box = 'Lee';
function setBox() {
	return 123;
}
alert(box);
alert(setBox());

var box = 'Lee';
function setBox() {
	return 123;
}
alert(window.box);						//全局变量，最外围，属于window属性
alert(window.setBox());				//全局函数，最外围，属于window方法


var box = 'Lee';
function setBox() {
	function setColor() {
		return 456;
	}
	return 123;
}
alert(xxx.setColor());


var box = 'Lee';
function setBox() {
	var box = 'red';						//这个是局部变量，他的范围在setBox()里，出来就不认识了
}
setBox();
alert(box);
var box = 'Lee';
function setBox() {
	box = 'red';									//去掉var就变成全局变量了
}
setBox();
alert(box);

var box = 'Lee';
function setBox(box) {			//通过传参，也是局部变量，作用域在setBox()范围下
	alert(box);
}
setBox('red');
alert(box);


var box = 'Lee';
function setBox() {
	return setColor();
	function setColor() {			//setColor()方法的作用域在setBox()内
		var b = 'kkk';					//b的作用域在setColor()里
		alert(b);
		return 123;
	}		
}


alert(window.setBox());

if (true) {							//if语句的花括号没有作用域的功能
	var box = 'Lee';
}

alert(window.box);


for (var i = 0 ; i < 10 ; i ++) {
	var box = 'Lee';
}

alert(window.i);
alert(window.box);

var num = 0;
function box() {
	num = 10;					//如果有var，在函数体内声明变量，就是局部的，去掉var就是全局
}

box();
alert(num);

var box = 'Lee';

function setBox() {
	var box = 'red';
	return box;
}

alert(setBox());

var box = {};
box.name = 'Lee';
alert(box.name);

box = null;								//销毁引用，等待垃圾收集器来清理

alert(box)

var box = 'Lee';

alert(window.box);

window = null;

alert(window.box);
*/


















