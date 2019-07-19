
/*
//1.原型链继承，2.借用构造函数继承(对象冒充继承) 3.组合继承(结合前两种)

//4.原型式继承

//临时中转函数
function obj(o) {				//o表示将要传递进入的一个对象 
	function F() {}				//F构造是一个临时新建的对象，用来存储传递过来的对象
	F.prototype = o;			//将o对象实例赋值给F构造的原型对象
	return new F();			//最后返回这个得到传递过来对象的对象实例
}

//F.prototype = o 其实就相当于 Desk.prototype = new Box();


//这是字面量的声明方式，相当于var box = new Box();
var box = {
	name : 'Lee',
	age : 100,
	family : ['哥哥','姐姐','妹妹']
};

//box1就等于new F()
var box1 = obj(box);
//alert(box1.name);
alert(box1.family);
box1.family.push('弟弟');
alert(box1.family);

var box2 = obj(box);
alert(box2.family);					//引用类型的属性共享了





//5.寄生式继承 = 原型式 +工厂模式


//临时中转函数
function obj(o) {				
	function F() {}				
	F.prototype = o;			
	return new F();			
}

//寄生函数
function create(o) {
	var f = obj(o);
	f.run = function () {
		return this.name + '方法';
	}
	return f;
}

var box = {
	name : 'Lee',
	age : 100,
	family : ['哥哥','姐姐','妹妹']
};


var box1 = create(box);
alert(box1.run());


*/


//6.寄生组合继承

//临时中转函数
function obj(o) {				
	function F() {}				
	F.prototype = o;			
	return new F();			
}


//寄生函数
function create(box, desk) {
	var f = obj(box.prototype);
	f.constructor = desk;				//调整原型构造指针
	desk.prototype = f;
}

function Box(name, age) {
	this.name = name;
	this.age = age;
}

Box.prototype.run = function () {
	return this.name + this.age + '运行中...'
}

function Desk(name, age) {
	Box.call(this, name, age);				//对象冒充
}

//通过寄生组合继承来实现继承
create(Box, Desk);							//这句话用来替代Desk.prototype = new Box();


var desk = new Desk('Lee', 100);
alert(desk.run());
alert(desk.constructor);












