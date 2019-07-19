



/*
var box = 'Mr. Lee';					//基本类型
//alert(box);
//alert(typeof box);
alert(box.substring(2));				//对象.方法(参数)，这种写法明显是引用类型的写法
												//索引0开始，从第2个位置开始截取到末尾的字符串输出
												//是基本类型，但又是特殊的引用类型，基本包装类型
												//因为他可以调用系统内置的方法
												
alert('Mr. Lee'.substring(2));		//有效


var box = 'Mr. Lee';					//基本类型
box.name = 'Lee';						//给基本类型加属性
box.age = function () {			//给基本类型加方法
	return 100;
};
alert(box);
alert(typeof box);
alert(box.substring(2));				//有效
alert(box.name);						//undefined，打印不出来
alert(box.age());						//出错

												//基本类型是无法给自己创建属性和方法的
												//但是，可以调用系统内置的属性和方法
												
var box = new String('Mr. Lee');			//引用类型，String的引用类型		
box.name = 'Lee';					
box.age = function () {		
	return 100;
};
alert(box);
alert(typeof box);									//object			
alert(box.substring(2));							//有效
alert(box.name);									//自定义属性有效				
alert(box.age());									//自定义方法有效

var box = 100;
alert(box.MAX_VALUE);						//这种写法叫做属性

alert(Number.MAX_VALUE);					//这种写法(类型.属性)，叫做静态属性
*/


var box = 1000.784;
//alert(typeof box);
//alert(typeof box.toString());			//toString()把数值转换字符串
//alert(box.toLocaleString());				//本地化
//alert(box.toFixed(2));						//小数点保留两位，并转换字符串，四舍五入
//alert(box.toExponential());				//以指数形式，并转换字符串
alert(box.toPrecision(8));					//根据传参来决定指数或者点数


















