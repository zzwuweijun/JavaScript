



/*
//传统绑定
window.onload = function () {
	var box = document.getElementById('box');
	box.onclick = function () {
		alert('Lee');
	};
};


window.onload = function () {
	alert('Lee');
};

window.onload = function () {
	alert('Mr.Lee');
};


//如果一个页面有两个或多个JS，并且，第一个JS是第一个程序开发的，第二个JS是第二个程序员开发的
//第一个window.onload被覆盖了。


//alert(window.onload);			//一开始没有注册window.onload，那么就是null


window.onload = function () {
	//alert('Lee');
};

alert(window.onload);			//如果已经有window.onload，那么会打印函数

window.onload = function () {
	//alert('Mr.Lee');
};

//alert(typeof window.onload);		//一开始没有window.onload，旧版火狐显示undefined，新版显示object，谷歌和IE浏览器也是object

window.onload = function () {
	//alert('Lee');
};

alert(typeof window.onload);			//如果有window.onload，所有浏览器都会显示function

window.onload = function () {
	//alert('Mr.Lee');
};

window.onload = function () {
	alert('Lee');
};

if (typeof window.onload == 'function') {
	var saved = null;			//保存上一个事件对象
	saved = window.onload;
}

//saved就是window.onload，saved()相当于window.onload()，但是window.onload()不能执行的
//所以saved()相当于window.onload = function () {}

window.onload = function () {
	if (saved) saved();						//执行上一个事件.window.onload = function () {}
	alert('Mr.Lee');				//执行本事件
};


//事件切换器
window.onload = function () {
	var box = document.getElementById('box');
	//box.onclick = function () {				//被覆盖
	//	alert('Lee');
	//};
	box.onclick = function () {
		alert('Lee');											//只能执行第一次，第二个又被覆盖了
		toBlue.call(this);									//通过匿名函数执行某个一函数，那么里面的this就代表的 window，可以通过call来传递this
	};
};


function toRed() {
	this.className = 'red';
	this.onclick = toBlue;
}

function toBlue() {
	this.className = 'blue';
	this.onclick = toRed;									//这里的onclick又把alert('Lee')覆盖掉了
}




//如果toBlue()绑定了box.onclick，里面的this代表box，如果是全局执行那么，this表示window


//对象操作可以使用数组操作来完成，window.onload 相当于window['onload'];

window['onload'] = function () {
	alert('Lee');
};


//添加事件函数
//obj相当于window
//type相当于onload
//fn相当于function () {}
function addEvent(obj, type, fn) {
	//用于保存上一个事件
	var saved = null;
	//判断事件是否存在
	if (typeof obj['on' + type] == 'function') {
		saved = obj['on' + type];		//保存上一个事件
	}
	//执行事件
	obj['on' + type] = function () {
		if (saved) saved();
		fn();
	};
	
}


addEvent(window, 'load', function () {
	alert('Lee');
});


addEvent(window, 'load', function () {
	alert('Mr.Lee');
});

addEvent(window, 'load', function () {
	alert('Miss.Lee');
});
*/




//添加事件函数
//obj相当于window
//type相当于onload
//fn相当于function () {}
function addEvent(obj, type, fn) {
	//用于保存上一个事件
	var saved = null;
	//判断事件是否存在
	if (typeof obj['on' + type] == 'function') {
		saved = obj['on' + type];		//保存上一个事件
	}
	//执行事件
	obj['on' + type] = function () {
		if (saved) saved();
		fn.call(this);							//把this传递过去
	};
	
}


addEvent(window, 'load', init);		
addEvent(window, 'load', init);		//第二次应该是失误多注册的

function init() {
	alert('Lee');
}



//当不停的切换的时候，浏览器突然卡死，并且报错：too much recursion，太多的递归
//因为积累了太多的保存的事件，
//解决方案，就是用完的事件，就立刻移除掉

//移除事件函数
function removeEvent(obj, type) {
	if (obj['on' + type]) obj['on' + type] = null;
}

addEvent(window, 'load', function () {
	var box = document.getElementById('box');
	addEvent(box, 'click', function () {				//目的达到，每次都执行，不影响
		alert('Lee');
	});
	addEvent(box, 'click', toBlue);						//this没有传递过去
});


function toRed() {
	this.className = 'red';
	removeEvent(this, 'click');
	addEvent(this, 'click', toBlue);	
}

function toBlue() {
	this.className = 'blue';
	removeEvent(this, 'click');
	addEvent(this, 'click', toRed);									
}















