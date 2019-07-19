





/*
		setTimeout第一个参数可以是字符串，而里面可以是代码快，因为它有解析功能，所以引号里面还是可以执行的

		//这种写法不推荐，容易出错，不容易扩展
		setTimeout("alert('Lee')", 2000);		//2秒后执行第一个参数的代码快
		
function box() {
	alert('Lee');
}

setTimeout(box, 2000);			//第一个参数，直接存放一个函数

setTimeout(function () {			//推荐，扩展性好，封装性好
	alert('Lee');
}, 2000);


var box = setTimeout(function () {			//返回值是超时调用的ID
	alert('Lee');
}, 2000);


clearTimeout(box);								//取消当前超时调用计划


var box = setInterval(function () {						//间歇调用，可以重复不断的执行
	alert('Lee');
}, 1000)

clearInterval(box);

setInterval(function () {
	num++;
	//这里可以做定时功能
	document.getElementById('a').innerHTML += num;
	if (num == max) {
		clearInterval(this);			//this代表本身，无效
		alert('5秒到了！');
	}
},1000);

//定时器

var num = 0;
var max = 5;
var id = null;


function box() {			//这次有用了，this本身不能代表ID
	num++;
	document.getElementById('a').innerHTML += num;
	if (num == max) {
		clearInterval(id);
		alert('5秒到了！');
	}
}

id = setInterval(box, 1000);


//使用超时调用，模拟定时器

var num = 0;
var max = 5;

function box() {		
	num++;
	document.getElementById('a').innerHTML += num;
	if (num == max) {
		alert('5秒到了！');
	} else {
		setTimeout(box, 1000);
	}
}


setTimeout(box, 1000);

//alert(window.location);
alert(window.document.location);

location.hash = '#66';			//会跳转到新的URL，就是包含#66的URL
alert(location.hash);


location.port = 8888;			//会跳转
alert(location.port);

alert(location.search);			//如果设置 search会不停的跳转

location.search = '?id=5';		//死循环

location.href = 'http://www.baidu.com';

function getArgs() {
	var args = [];
	var qs = location.search.length > 0 ? location.search.substring(1) : '';
	var items = qs.split('&');
	var item = null, name = null, value = null;
	
	for (var i = 0; i < items.length; i++) {
		item = items[i].split('=');
		name = item[0];
		value = item[1]
		args[name] = value;
	} 
	return args;
}


var args = getArgs();
alert(args['id']);
alert(args['search']);


location.assign('http://www.baidu.com');			//跳转

location.reload(true);


function a() {
	location.replace('http://www.baidu.com');			//不产生任何历史痕迹的跳转
}


alert(history.length);			//历史记录的总量
*/


function back() {
	history.back();
}


function forward() {
	history.forward();
}

function go(num) {
	history.go(num);
}











