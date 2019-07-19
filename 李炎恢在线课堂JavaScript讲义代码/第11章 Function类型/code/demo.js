
/*
var pattern = /^[\w]+\.(zip|rar|gz)$/;			//|选择符必须用分组符号包含起来
var str = '123.7z'; 
alert(pattern.test(str));

function box(num1, num2) {				//普通函数的声明方式
	return num1 + num2;
}

alert(box(1, 2));

var box = function(num1, num2) {	//使用变量初始化函数
	return num1 + num2;
};

alert(box(1,2));

var box = new Function('num1', 'num2', 'return num1 + num2');			//使用new的构造函数来声明函数
alert(box(1, 2));
alert(typeof box);

//函数可以传递函数，

//下面的例子很普通，不是作为函数来传递的，而是作为函数的返回值来传递的

function box(sum, num) {
	return sum + num;
}

function sum(num) {
	return num + 10;
}

var result = box(sum(10), 10);		//20,10sum(10)这里传递的是函数的返回值，和普通的变量一样，没区别
alert(result);

*/

//要把函数本身作为参数传递，而不是函数的结果


function box(sum, num) {
	return sum(num);
}

function sum(num) {
	return num + 10;
}

var result = box(sum, 10);				//这里sum是一个函数，当作参数传递到另外一个函数里，而不是函数的返回值
alert(result);














