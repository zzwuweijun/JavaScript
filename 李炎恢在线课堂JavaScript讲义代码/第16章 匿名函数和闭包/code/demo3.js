



/*
//块级作用域(私有作用域)

function box() {
	for (var i = 0; i < 5; i ++) {			//块级作用域(JS没这个东西)
		
	}
	alert(i);
}

box();

function box() {
	for (var i = 0; i < 5; i ++) {			//块级作用域(JS没这个东西)
		
	}
	var i = 111;					//就算重新声明，也不会影响之前声明初始化的数据
	alert(i);
}

box();

//使用块级作用域(私有作用域)

function box() {
	(function () {								//包含自我执行的匿名函数，就可以实现私有作用域
		for (var i = 0; i < 5; i ++) {		
			alert(i);
		}
		// 这里面用了a,b,c等变量
	})();		被销毁了	

		//这里可以继续似乎用a,b,c等变量，和上面的a,b,c完全没有联系
	//出了这个私有作用域，变量立即被销毁
	alert(i);								//这里就不认识了
}

box();

//全局变量

var age = 100;

alert(age);

age = null;

//私有作用域来表示

(function () {
	//这里就是全局的私有作用域
	var age = 100;
	alert(age);
})();



(function () {
	var a;
	var b;
})():


//私有变量

function box() {
	var age = 100;			//私有变量
}

box();

function Box() {
	this.age = 100;					//属性，公有的
	this.run = function () {		//方法，公有的
		return '运行中...';
	};
}

var box = new Box();
alert(box.age);
alert(box.run());

function Box() {
	var age = 100;					//私有变量
	function run() {				//私有函数
		return '运行中...';
	}
	this.publicGo = function () {		//对外可见的公共接口，特权方法
		return age + run();
	};
	this.getAge = function () {
		return age;
	}
}

var box = new Box();
alert(box.getAge());

//通过构造函数传参

function Box(value) {
	var user = value;				//私有变量
	this.getUser = function () {
		return user;
	};
}

var box = new Box('Lee');
alert(box.getUser());

var box2 = new Box('kkk');
alert(box.getUser());


function Box(value) {
	var user = value;				//私有变量
	this.getUser = function () {
		return user;
	};
	this.setUser = function (value) {
		user = value;
	}
}

var box = new Box('Lee');
alert(box.getUser());
box.setUser('OOO');
alert(box.getUser());

function Box(value) {
	var user = value;				//私有变量
	this.getUser = function () {
		return user;
	};
	this.setUser = function (value) {
		user = value;
	}
}

var box = new Box('Lee');
alert(box.getUser());

var box2 = new Box('kkk');
alert(box.getUser());

(function () {
	var user = ''				//私有变量
	//function Box() {}		//构造函数，但在函数里写构造函数，不支持，因为私有作用域里的函数，外部无法访问
	Box = function (value) {//全局，构造函数
		user = value;
	};
	Box.prototype.getUser = function () {
		return user;
	};
	Box.prototype.setUser = function (value) {
		user = value;
	}
})();

var box = new Box('Lee');		//第一次实例化
alert(box.getUser());
var box2 = new Box('kkk');		//第二次实例化
alert(box.getUser());
box2.setUser('OOO');
alert(box.getUser());

//什么叫单例，就是永远只实例化一次，其实就是字面量对象声明方式

var box = {					//第一次实例化，无法第二次实例化，那么就是单例
	user : 'Lee',
	run : function () {
		return '运行中..';
	}
};


var box = function () {
	var user = 'Lee';				//私有变量
	function run() {				//私有函数
		return '运行中...';	
	}
	return {
		publicGo : function () {		//对外公共接口的特权方法
			return user + run();
		}
	};
}();

alert(box.publicGo());


var box = function () {
	var user = 'Lee';				//私有变量
	function run() {				//私有函数
		return '运行中...';	
	}
	var obj =  {
		publicGo : function () {		//对外公共接口的特权方法
			return user + run();
		}
	};
	return obj;
}();

alert(box.publicGo());
*/


//之前两个，都是返回的{} 也就是Object，那么我想返回自定义的呢？Box，Desk



function Desk() {}


var box = function () {
	var user = 'Lee';				//私有变量
	function run() {				//私有函数
		return '运行中...';	
	}
	var desk = new Desk();
	desk.publicGo = function () {
		return user + run();
	};
	return desk;
}();


alert(box.publicGo());




