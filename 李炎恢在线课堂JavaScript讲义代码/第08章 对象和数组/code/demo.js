

/*
//对象包含哪些元素
//1.属性(字段)
//2.方法(函数)


var box = new Object();							//创建一个对象
box.name = '李炎恢';
box.age = 28;
alert(box.age);

var box = Object();									//new关键字省略了
alert(box);


var box = {};											//字面量方式创建的对象
alert(box);

var box = {											//用字面量对象封装数据
	name : '李炎恢',
	age : 28
};
alert(box.name);

var box = {											//用字面量对象封装数据
	'name' : '李炎恢',								//属性可以用引号来括起来
	'age' : 28
};
alert(box.name);

var box = {};										//字面量方式
box.name = '李炎恢';							//传统赋值方式
alert(box.name);

var box = {											
	name : '李炎恢',							
	age : 28
};
alert(box.name);
alert(box['name']);							//用数组的方法输出


function objrun() {
	return '123';
}

//方法=函数

var box = new Object();							//创建一个对象
box.name = '李炎恢';
box.age = 28;
box.run = objrun;										//这里有点小复杂
alert(box.run());								



var box = {											
	name : '李炎恢',							
	age : 28,
	run : function () {								//匿名函数
		return '123';
	}
};
alert(box.run());										//调用方法(函数)，如果没有圆括号，会打印代码
	
															//有圆括号，才会打印返回值

	var box = {											
	name : '李炎恢'
};

alert(box.name);
delete box.name;			//删除属性
alert(box.name);														


function box(name,age,height,address,love) {
	alert(name);
	alert(age);
}


box('李炎恢',28,178,'江苏盐城','打球');
*/



function box(obj) {
	if (obj.name != undefined) alert(obj.name);
	if (obj.love != undefined) alert(obj.love);
	if (obj.age != undefined) alert(obj.age);
}




box({												//匿名对象
	name : '李炎恢',
	age : 28,
	height : 178,
	address : '江苏盐城'
});


















