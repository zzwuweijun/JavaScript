




/*
//原型
function Box() {}			//构造函数函数体内什么都没有，这里如果有，叫做实例属性，实例方法

Box.prototype.name = 'Lee';				//原型属性
Box.prototype.age = 100;					//原型属性
Box.prototype.run = function () {		//原型方法
	return this.name + this.age + '运行中...';
};

var box1 = new Box();

//alert(box.prototype);			//使用对象实例无法访问到prototype
//alert(box.__proto__);			//使用对象实例访问prototype的指针
//alert(Box.prototype);			//使用构造函数名(对象名)访问prototype

var box = new Box();
//alert(box.run());
alert(box.constructor == Box);



//重写了原型对象
Box.prototype = {
	age : 200					//这里不会保留之前原型的任何信息了。
									//把原来的原型对象和构造函数对象实例之前的关系切断了
};


var box = new Box();
alert(box.run());


function Box() {}


//使用字面量的方式创建原型对象，这里{}就是对象，是Object，new Object就相当于{}
Box.prototype = {
	constructor : Box,			//强制指向Box
	name : 'Lee', 
	age : 100,
	run : function () {
		return this.name + this.age + '运行中...';
	}
};


//数组排序
var box = [5,1,6,9,3,5,8,1];
alert(box.sort());


//查看sort是否是Array原型对象里的方法
alert(Array.prototype.sort);
alert(String.prototype.substring);

//内置引用类型的功能扩展
String.prototype.addstring = function () {
	return this + '，被添加了！';
};

var box = 'Lee';
alert(box.addstring());
*/























