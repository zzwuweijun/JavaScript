




/*
//构造函数
function Box(name, age) {
	this.name = name;										//实例属性
	this.age = age;												
	this.run = function () {									//实例方法
		return this.name + this.age + '运行中...';
	};
}


var box1 = new Box();
var box2 = new Box();
//alert(box1.name);
//alert(box1.run());

//如果是实例方法，不同的实例化，他们的方法地址是不一样的，是唯一的
//如果是原型方法，那么他们地址是共享的，大家都是一样
alert(box1.run == box2.run);

alert(box1.prototype);			//这个属性是一个对象，访问不到
alert(box1.__proto__);			//这个属性是一个指针指向prototype原型对象


alert(box1.constructor);			//构造属性，可以获取构造函数本身
												//作用是被原型指针定位，然后得到构造函数本身
												//其实就是对象实例对应的原型对象的作用
												
//判断一个对象实例(对象引用)是不是指向了原型对象，基本上，只要实例化了，他自动指向的
alert(Box.prototype.isPrototypeOf(box1));

var obj = new Object();
alert(Box.prototype.isPrototypeOf(obj));

var box2 = new Box();
alert(box2.name);								//实例属性不会共享，所以box2访问不到实例属性，就只能访问原型


box1.name = 'Jack';							//实例属性，并没有重写原型属性
alert(box1.name);								//就近原则
delete box1.name;							//删除实例中的属性
//delete Box.prototype.name;			//删除原型中的属性
//Box.prototype.name = 'KK';			//覆盖原型中的属性
alert(box1.name);


box1.name = 'Kac';	
alert(box1.hasOwnProperty('name'));	//判断实例中是否存在指定属性

alert('name' in box1);			//不管实例属性或原型属性是否存在，只要有就返回true，两边都没有，返回false


box1.name = '';
alert(isProperty(box1, 'name'));


//判断只有原型中有属性，
function isProperty(object, property) {
	return !object.hasOwnProperty(property) && (property in object)
}
*/



//原型
function Box() {}			//构造函数函数体内什么都没有，这里如果有，叫做实例属性，实例方法

Box.prototype.name = 'Lee';				//原型属性
Box.prototype.age = 100;					//原型属性
Box.prototype.run = function () {		//原型方法
	return this.name + this.age + '运行中...';
};

var box1 = new Box();


















