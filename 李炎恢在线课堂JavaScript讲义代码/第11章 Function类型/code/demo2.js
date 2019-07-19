



/*
function sum(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * sum(num-1);				//4 * 3 * 2 * 1 = 24 阶乘，递归
	}
}


alert(sum(4));


function box(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num-1);				//使用arguments.callee，调用自身，实现递归
	}
}


alert(box(4));


//window是一个对象，而且是JS里面最大的对象，是最外围的对象


//alert(typeof window);		window是对象，类型是对象，window表示全局

alert(this);			//[object Window] this目前表示的是window，因为在window的范围下
alert(typeof this);	//和window一模一样，所以this就是window

var color = '红色的';			//这里color就是全局变量，而这个变量又是window的属性
//alert(window.color);			//这里已经很好的说明color是window下的属性
alert(this.color);				//同上

window.color = '红色的';		//相当于 var color = '红色的';？？？，是一样的


var box = {
	color : '蓝色的',				//这里的color是box下的属性，也就是局部变量
	sayColor : function() {
		alert(this.color);			//这里this，我们确定了是代表的box对象。
	}
};

alert(this.color);
box.sayColor();

window.color = '红色的';

function sayColor() {
	alert(this.color);			//所以这里执行的时候是动态的，第一次在window下，第二次在box下
}

sayColor();						//这里调用sayColor，其实范围还是在window下

var box = {
	color : '蓝色的'
};


box.sayColor = sayColor;	//这段代码相当于47行

box.sayColor();				//这里执行的是box里面的this.color

function box(name, age) {
	return name + age;
}

alert(box.length);


function box(num1, num2) {
	return num1 + num2;
}


function sum(num1, num2) {						//apply和call可以冒充另外一个函数
	return box.apply(this, [num1, num2]);		//this表示window作用域，[]表示传递的参数
}

function sum2(num1, num2) {
	return box.apply(this, arguments);			//这个可以当数组传递，arguments
}

//alert(box(10,10));

//alert(sum(10,10));
alert(sum2(10,10));


function box(num1, num2) {
	return num1 + num2;
}

function sum(num1, num2) {
	return box.call(this, num1, num2);		//call只是传递参数不同，其他和apply一样
}


alert(sum(10,10));
*/


var color = '红色的';				//全局

var box = {
	color : '蓝色的'					//局部
};

function sayColor() {
	alert(this.color);				
}

//sayColor();							//全局

//用call是实现对象冒充，冒充box下，冒充window下
//sayColor.call(window);			//冒充window 红色的
//sayColor.call(this);					//this就是window
sayColor.call(box);					//冒充box，作用域就在box对象里面，所以color就是蓝色的





















