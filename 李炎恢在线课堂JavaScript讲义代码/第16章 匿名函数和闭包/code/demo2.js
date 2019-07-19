



/*
//循环里的匿名函数的取值问题

function box() {
	var arr = [];
	
	for (var i = 0; i < 5; i ++) {
		arr[i] = function () {					//arr[0] = 0，arr[1] = 1 .... arr[4]  = 4
			return i;
		};
	}
	
	//循环已经执行完毕了，i最终是4++ = 5 ,那么最终就是5
	
	return arr;
}

//alert(box()[0]);
var b = box();
//alert(b.length);
for (var i = 0; i < 5; i ++) {
	alert(b[i]());
}

//改0
function box() {
	var arr = [];
	
	for (var i = 0; i < 5; i ++) {
		arr[i] = i;
	}
	
	return arr;
}

var b = box();
for (var i = 0; i < 5; i ++) {
	alert(b[i]);
}

//改1
function box() {
	var arr = [];
	
	for (var i = 0; i < 5; i ++) {
		arr[i] = (function (num) {						//通过自我及时执行匿名函数
			return num;
		})(i);
	}
	
	return arr;
}

var b = box();
for (var i = 0; i < 5; i ++) {
	alert(b[i]);
}

//改2
function box() {
	var arr = [];
	
	for (var i = 0; i < 5; i ++) {
		arr[i] = (function (num) {
			//num其实在这里	
			return function () {				//因为闭包可以将变量驻留在内存中，和上一节课的累加是一个道理
				return num;
			}
		})(i);
	}
	
	//已经执行完毕了，num为什么可以0,1,2,3,4
	
	return arr;
}

var b = box();
for (var i = 0; i < 5; i ++) {
	alert(b[i]());
}
var b = function () {
	alert('Lee');
}();


function box() {
	var arr = [];
	
	for (var i = 0; i < 5; i ++) {
		arr[i] = function (num) {
			return function () {				//因为闭包可以将变量驻留在内存中，和上一节课的累加是一个道理
				return num;
			}
		}(i);
	}
	
	//已经执行完毕了，num为什么可以0,1,2,3,4
	
	return arr;
}

var b = box();
for (var i = 0; i < 5; i ++) {
	alert(b[i]());
}


//关于this对象

var box = {
	getThis : function () {
		return function () {
			return this;
		}
	}
};


alert(box.getThis()());


var user = 'The Window';

var box = {
	user : 'The Box',
	getUser : function () {
		//这里作用域的this是Box
		var that = this;
		return function () {
			//这里作用域的this是window
			return that.user;
		}
	}
};

//alert(box.getUser()());
//对象冒充
//alert(box.getUser().call(box));
alert(box.getUser()());
*/



function box() {
	var oDiv = document.getElementById('oDiv');
	var text = oDiv.innerHTML;
	oDiv.onclick = function () {
		alert(text);
	};
	oDiv = null;					//解除引用，等待垃圾回收
	alert(oDiv);
}
box();











