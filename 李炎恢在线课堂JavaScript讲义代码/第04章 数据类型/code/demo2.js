
/*
var box = 250;			//十进制整型
alert(box);

var box = 070;			//八进制，按照十进制输出是56
alert(box);

var box = 0x1f;			//十六进制，
alert(box);

var box = .8;			//浮点型
alert(box);

var box = 12.0		//自动转换整型
alert(box);

var box = 4.12e9;			//科学计数法
alert(box);

var box = 0.000000000412;
alert(box);


alert(Number.MIN_VALUE);		//最小值
alert(Number.MAX_VALUE);		//最大值

var box = -100e1000;				//超过范围
alert(box)

alert(Number.POSITIVE_INFINITY);			//正无穷
alert(Number.NEGATIVE_INFINITY);		//负无穷

var box = 100e1000;
alert(isFinite(box));			//是否超过范围


var box = 0 / 0;			//数学中第一个可以为0，第二个不可以为0。
alert(box);


var box = 12 / 0 * 0;
alert(box);

alert(Number.NaN);

var box = NaN+1;
alert(box);


alert(NaN == NaN);			//不相等

var box = 0 / 0;
alert(isNaN(box));

alert(isNaN(false));


//如果对象的toString方法能够返回数值，那么就不是NaN了。

var box = {
	toString : function() {
		return '123';
	}
};
alert(isNaN(box));

var box = {
	toString : function () {
		return null;
	}
};
alert(Number(box));


parseInt(); 		//只能转换字符串至数值
*/





alert(parseFloat('1.23e4'));


























