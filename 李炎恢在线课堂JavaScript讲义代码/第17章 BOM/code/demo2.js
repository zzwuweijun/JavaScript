



/*

alert(screenLeft);
alert(screenTop);

这两个属性，火狐不认识，就会当作是没有声明初始化的变量，会报错

我们就必须强制在这个属性前面加上window.


alert(window.screenLeft);				//IE支持
alert(window.screenTop);

alert(typeof window.screenLeft);			//火狐undefined，其他number，数值

alert(window.screenX);				//IE不支持了，支持火狐
alert(window.screenY);

//跨浏览器操作
var leftX = typeof window.screenLeft == 'number' ? window.screenLeft : window.screenX;
var topY = typeof window.screenTop == 'number' ? window.screenTop : window.screenY;

alert(leftX);
alert(topY);

alert(window.innerWidth);				//窗口页面的大小
alert(window.innerHeight);

alert(window.outerWidth);			//窗口+边框大小
alert(window.outerHeight);

alert(document.documentElement.clientWidth);			//IE支持
alert(document.documentElement.clientHeight);


//跨浏览器获取视口(可视范围的页面窗口)

var width = window.innerWidth;		//window.必须有，因为IE不支持
var height = window.innerHeight;		//如果支持inner的，那么就使用它，

//不支持的就是用document对象的方法

if (typeof width != 'number') {
	if (document.compatMode == 'CSS1Compat') {
		width = document.documentElement.clientWidth;
		height = document.documentElement.clientHeight;
	} else {
		width = document.body.clientWidth;
		height = document.body.clientHeight;
	}
}

alert(width);
alert(height);


//3.x旧版火狐支持，新版默认不支持了
//moveTo(100,100);
moveBy(10,10);			//IE原版支持，谷歌新版不支持

//调整大小，和上面一样
//resizeTo(300,300);
resizeBy(-10,-10);

*/












