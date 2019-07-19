



/*
	1.window对象是最顶层的对象
	2.window对象有六大属性，这六大属性本身也是对象
	3.window对象旗下的document属性，也是对象，并且document对象旗下有五大属性
	4.document对象旗下的五大属性又是对象，总结，都是对象。
	
	调用
	
	window的属性和方法的调用：window.属性，window.方法()
	
	也可以   直接    属性，方法()
	
	如果是某个浏览器独有的属性或者方法，那么在其他浏览器可能会不识别，当作普通变量或者当作普通函数
	
	closed = '123';		//如果有浏览器 不认识，就当作变量了
	
	强制性的操作
	
	window.closed;	//强制性
	
	window.alert('Lee');		//这个所有浏览器都认识，所有可以不加window.
	
	
	confirm('请。。。');		//这里有确定和取消按钮，本身方法可以返回一个布尔值
	
	 //如果点击了确定，那么返回true，如果点击了取消，那么返回false
	 
	 if (confirm('请选择！')) {
	alert('您按了确定按钮！');
} else {
	alert('您按了取消按钮！');
}

var box = prompt('请输入一个数字', 0);		//第一个参数是说明，第二参数是默认值，返回输入的值
if (box != null) {
	alert(box);
}

print();
find();

旧版的的火狐有状态栏，但属性应该默认情况下是无效的，新版本取消了状态栏

谷歌呢，也没有状态栏

defaultStatus = 'Lee';		//默认初始值

function a() {
	defaultStatus = 'xxx';	//临时设置值
}

open()参数

		1.第一个参数，是你将要导航到的URL
		2.窗口的名称或者窗口的目标，命名可以给新窗口设置一个名称，凡事以这个名称打开的窗口，都在这个窗口里架子URL
			目标：_blank，_parent
			_blank新建一个窗口
			_parent表示在本窗口内加载
		3.特定的字符串，表示各种窗口配置的功能
		
		
var box = open('http://www.baidu.com','baidu','width=400,height=400,top=100,left=100');

//alert('Lee');			//这里的alert其实是window.alert，表示的是父窗口

//open本身会返回子窗口的window对象，表示子窗口弹出
box.alert('Lee');
*/


open('opener.html','baidu','width=400,height=400,top=100,left=100');

















