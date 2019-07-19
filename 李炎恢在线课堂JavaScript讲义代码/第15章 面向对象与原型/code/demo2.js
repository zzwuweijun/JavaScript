


/*

//工厂模式
function createObject(name, age) {
	var obj = new Object();									//创建对象
	obj.name = name;											//添加属性
	obj.age = age;
	obj.run = function () {										//添加方法
		return this.name + this.age + '运行中...';
	};
	return obj;														//返回对象引用
};

function Desk(name, age) {			//创建一个对象，所有构造函数的对象其实就是Object
	this.name = name;					//添加一个属性
	this.age = age;			
	this.run = function () {			//添加一个方法
		return this.name + this.age + '运行中...';
	};
};

//1.构造函数没有new Object，但它后台会自动var obj = new Object
//2.this就相当于obj
//3.构造函数不需要返回对象引用，它是后台自动返回的

//1.构造函数也是函数，但函数名第一个字母大写
//2.必须new 构造函数名()，new Box()，而这个Box第一个字母也是大写的
//3.必须使用new 运算符

var box2 = new Box('Jack', 200);	//实例化
var box3 = new Desk('kkk', 500);	//实例化

//alert(box1.run());
//alert(box2.run());
//alert(box1 instanceof Object);
//alert(box1 instanceof Box);
//alert(box2 instanceof Box);
//alert(box3 instanceof Box);			//可以识别了，因为box3是Desk对象的引用
alert(box3 instanceof Desk);			//可以识别

var box1 = new Box('Lee', 100);		//实例化
alert(box1.run());

var user = 'bbb';
alert(this.user);							//window,name变量比较特殊

function box() {  //普通函数，首字母无须大写

}


alert(Box('Lee', 100));					//构造函数，用普通函数调用一般是无效的，必须使用new运算符

var o = new Object();
Box.call(o, 'Lee', 100);					//对象冒充
alert(o.run());


//alert(box1.name == box2.name);
//alert(box1.age == box2.age);
//alert(box1.run() == box1.run());	//构造函数体内的方法的值是相当的
//alert(box1.run == box2.run);			//因为他们比较的是引用地址，
*/


//构造函数
function Box(user, age) {			//创建一个对象，所有构造函数的对象其实就是Object
	this.user = user;					//添加一个属性
	this.age = age;			
	this.run = run;
};


function run() {							//把构造函数内部的方法通过全局来实现引用地址一致
	return this.user + this.age + '运行中...';
}


var box1 = new Box('Lee', 100);	//实例化后地址为1
var box2 = new Box('Lee', 100);  //实例化后地址为2
//alert(box1.run == box2.run);			//
alert(box1.run());
alert(run());






