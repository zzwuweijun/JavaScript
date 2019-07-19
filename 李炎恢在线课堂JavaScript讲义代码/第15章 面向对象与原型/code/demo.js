




/*
var box = new Object();		//创建对象
box.name1 = 'Lee';					//添加属性
box.age = 100;						//
box.run = function () {
	return this.name1 + this.age + '运行中...';		//this表示当前作用域下对象
};

//this表示new Object()实例化出来的那个对象
//this要放在一个作用域下，比如box.run() {} ，这个是box作用域下的方法，方可用this，来表示box本身

alert(box.run());

var name1 = 'jack';

alert(this.name1);				//这里的this代表的是window

var box = new Object();		
box.name = 'Lee';				
box.age = 100;						
box.run = function () {
	return this.name + this.age + '运行中...';	
};

var box2 = new Object();		
box2.name = 'Jack';				
box2.age = 200;						
box2.run = function () {
	return this.name + this.age + '运行中...';	
};

var box = new Object();		
box.name = 'Lee';				
box.age = 100;						
box.run = function () {
	return this.name + this.age + '运行中...';	
};

var box2 = box;	
box2.name = 'Jack';				
box2.age = 200;						
box2.run = function () {
	return this.name + this.age + '运行中...';	
};

alert(box.run());
alert(box2.run());


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

function createObject2(name, age) {
	var obj = new Object();									//创建对象
	obj.name = name;											//添加属性
	obj.age = age;
	obj.run = function () {										//添加方法
		return this.name + this.age + '运行中...';
	};
	return obj;														//返回对象引用
};

var box1 = createObject('Lee', 100);					//创建第一个对象
var box2 = createObject('Jack', 200);					//创建第二个对象
var box3 = createObject2('kkk', 500);					//创建第三个对象

//alert(box1.run());													//打印第一个对象实例的run()方法
//alert(box2.run());													//打印第二个对象实例的run()方法

//alert(typeof box1);
//alert(typeof box2);
alert(box1 instanceof Object);
alert(box2 instanceof Object);
alert(box3 instanceof Object);						//不管怎样，他们都是Object类型，就无法区分，谁到底是谁的对象了

*/







