

/*

	try - catch 特点
	1.可以获取错误信息
	2.可以避免浏览器控制台报错
	3.可以屏蔽错误，继续执行，PS，但是继续执行的语句如果和错误的语句有上下文关联，那么下面可能会继续出错

	
	try {
		window.abcdef();	
	} catch (e) {					//e表示接收的错误对象
		alert(e);					//打印错误对象，会输出错误信息
	}
			

	//PS：try表示尝试着执行里面的代码，如果有错误，就去执行catch里面的代码。


	alert('');

	try {
		window.abcdef();	
	} catch (e) {					//e表示接收的错误对象
		//alert(e);					//打印错误对象，会输出错误信息，非IE浏览器执行了toString();
		//alert(e.name);			//IE不支持name
		alert(e.message);		//message属性是跨浏览器最好的。
	}

	
	function box() {
		try {
			var b = {};
			//window.abcedf();			//这个会中断操作
		} catch (e) {
			alert(e);				
			return;					//因为执行了catch说明有错误，那么再继续往下执行也还是会错，所以就返回了
		} finally {
			alert('不管是否产生错误，我都会执行！');
			b = null;
		}
		
		
		alert('');
		//b = null;					//如果用了try-catch，就把清理工作交给finllay即可

	}


	box();
	
//window.abcdef();

//new Array(9999999999999999999999);			//RangeError: invalid array length范围错误

//var box = x;			//ReferenceError: x is not defined 引用错误，变量未定义

//a $ b;				//SyntaxError: missing ; before statement 语法错误

//new 10;			//TypeError: 10 is not a constructor 10不是构造函数

//eval('abc');

//alert(encodeURI('李炎恢));
	
	
try {
	new 10;
} catch (e) {
	if (e instanceof TypeError) {					//通过这种方法可以更加精确的得到错误类型，而可以更加准确的去处理
		alert('类型错误：' + e.message);
	} else {
		alert('未知错误：' + e);
	}
}

*/


























