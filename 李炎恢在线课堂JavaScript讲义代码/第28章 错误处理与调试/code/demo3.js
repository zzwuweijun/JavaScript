



/*
	古老的调试方法alert
	var num1 = 1;
	//alert(num1);
	var num2 = 2;						//PS：程序非常庞大的时候，字符串有可能是上下文的变量或者函数里的返回值，并不是那么容易看出来的
	//alert(typeof num2);
	var result = num1 + num2;
	alert(result);


	//PS：如果alert可以执行，那么之前的代码没有错误
	
console.error('错误');
console.info('信息');
console.log('日志');
console.warn('警告');
	
	
var num1 = 1;
//console.log('num1 = ' + num1 + '类型:' + typeof num1);
var num2 = 'b';	
//console.log('num2 = ' + num2 + '类型:' + typeof num2);				
var result = num1 + num2;
alert(result);


//PS：console调试就算不删除，程序呀照样执行，而alert会中途阻断后面代码的执行


var num1 = 1;
if (typeof num1 != 'number') throw new Error('num1必须是数字');
var num2 = 2;	
if (typeof num2 != 'number') throw new Error('num2必须是数字');		
var result = num1 + num2;
alert(result);
//网页版的Firebug ：Firebug lite
//必须有网，必须速度快
//PS：Chrome浏览器必须在服务器端才有效
*/



addEvent(window, 'load', function () {
	var a = 1;
	var box = document.getElementById('box');
	addEvent(box, 'click', function () {
		this.innerHTML = '被点了！';
	});
	a = 2;
	b = 1;
	a = 3;
	b = 2;
});


//PS：设置断点，就是执行调试的起点
//PS：不需要调试的时候，一定要去掉断点，不然每次刷新总会进入调试模式











