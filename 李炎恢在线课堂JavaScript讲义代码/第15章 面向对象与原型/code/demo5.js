

/*

//原型的缺点

function Box() {}

Box.prototype = {
	constructor : Box, 
	name : 'Lee', 
	age : 100,
	family : ['哥哥','姐姐','妹妹'],
	run : function () {
		return this.name + this.age + '运行中...'
	}
};


var box1 = new Box();
alert(box1.family);
box1.family.push('弟弟');			//在第一个实例修改后引用类型，保持了共享
alert(box1.family);

var box2 = new Box();
alert(box2.family);					//共享了box1添加后的引用类型的原型


//组合构造函数+原型模式

function Box(name, age) {		//保持独立的用构造函数
	this.name = name;
	this.age = age;
	this.family = ['哥哥','姐姐','妹妹'];
}

Box.prototype = {					//保持共享的用原型
	constructor : Box,
	run : function () {
		return this.name + this.age + '运行中...'
	}
};


var box1 = new Box('Lee', 100);
//alert(box1.run());
alert(box1.family);
box1.family.push('弟弟');		
alert(box1.family);

var box2 = new Box('Jack', 200);
//alert(box2.run());
alert(box2.family);					//引用类型没有使用原型，所以没有共享




//动态原型模式


//可以将原型封装到构造函数里
function Box(name, age) {		
	this.name = name;
	this.age = age;
	this.family = ['哥哥','姐姐','妹妹'];
	
	if (typeof this.run != 'function') {				//判断this.run是否存在
		Box.prototype.run = function() {
			return this.name + this.age + '运行中...'
		};
	}
}

//原型的初始化，只要第一次初始化，就可以了，没必要每次构造函数实例化的时候都初始化

var box1 = new Box('Lee', 100);


var box2 = new Box('Jack', 200);




//寄生构造函数 = 工厂模式 + 构造函数

function Box(name, age) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function () {
		return this.name + this.age + '运行中...'
	};
	return obj;
}


var box1 = new Box('Lee', 100);
alert(box1.run());

var box2 = new Box('Jack', 200);
alert(box2.run());





//稳妥构造函数

function Box(name, age) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function () {
		return this.name + this.age + '运行中...'
	};
	return obj;
}


var box1 = Box('Lee', 100);
alert(box1.run());

var box2 = Box('Jack', 200);
alert(box2.run());


*/








