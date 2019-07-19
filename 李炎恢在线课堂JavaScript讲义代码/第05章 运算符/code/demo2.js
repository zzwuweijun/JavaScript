


/*
var box = 3 < 2;			//关系运算符大多返回的是一个布尔值。
alert(box);

var box = '3' > 22;		//如果只有一个数值字符串，那么会将它转换成数值，再比较
var box = '3' > '22';		//如果两个都是数值字符串，那么会比较进行第一个字符的比较，3 > 2
var box = '123' > '22';		// 1 > 2

var box = 2 > {				//和对象比较
	toString : function () {
		return 1;
	}
};

var box = 'a' > 'b';				//97 > 98
var box = 'a' > 'B';				//97 > 66
var box = 2 == {
	toString : function () {
		return 2;
	}
};
\
var age = {};
var height = age;

var box = age == height;
var box = null == 0;			//null自动转换为0，但在比较运算上，null和undefined没有自动转换，所以null不等于0
var box = (5 > 4) && (3 > 2);		//&&并且，表示两边都必须是true，最终才返回true
var box = 0 && {};		//第二个是对象的时候，第一个如果是true，则返回第二个对象，否则返回false
var box =  3 > 4 && undefined;		//如果第一个操作数是false，则不去运行第二个操作数了
var box =  5 > 4 && age;
var box = (5 > 3) || (3 > 4);		//||运算符，只有一边是true，那么整体返回就是true
var box = {
	toString : function () {
		return 1;
	}
} || {
	toString : function () {
		return 2;
	}
};
var box = (3 > 4) || age;
var box = !!{};			//Boolean({}),!!{} 是一样的结果
*/



var box = !'';
alert(box);


















