

/*
var box = 100;
--box;					//前置递增，box = box +1
alert(box);

var box = 100;
var age = ++box;		//先box累加到101，然后赋值给age
alert(age);

var box = 100;
var age = box++;		//先box赋值给age100，然后在box累加101
alert(age);
alert(box);

var box = '89';
box++;					//++如果对数值字符串，有一个隐含的转型功能
alert(typeof box);

var box = {
	toString : function () {
		return 'Kee';
	}
};
box++;					
alert(box);


var box = 100;
+box;						//正数，负数 +box正数，-box 就是负数			
alert(box);
var box = '89';					
alert(typeof +box);		//+号，有个自动转型的功能

var box = 100 + '100';		//这个时候的加号就是字符串连接符，而不是加法运算符，只要其中有一个是字符串，那么就自动使用字符串连接符
alert(typeof box);		

var box = '您的年龄是：' + 10 + 20;		//字符串链接操作

var box = 10 + 20 + '您的年龄是：';		//两个都是数值，那么就按照加法计算

var box =  '您的年龄是：' + (10 + 20);	//括号强制优先级

var box =  10 + {};		//10+{}  10[object Object] 类型是string，字符串

var box =  10 + {
	toString : function () {			//如果对象toString返回的是数值，那么就按数值来
		return '20';
	}
};

var box = 100 / {
	toString : function (){
		return 123;
	}
};
*/


var box = -Infinity % -Infinity ;
alert(box);		






















