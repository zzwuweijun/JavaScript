



/*
var box = ['李炎恢', 28, '盐城', new Date()];
alert(box);
alert(box.toString());
alert(box.valueOf());
alert(box.toLocaleString());			//本地格式区域字符串

var box = ['李炎恢', 28, '盐城'];
alert(typeof box.join('|'));							//方法运行过后返回按|分割的字符串
alert(typeof box);										//原数组没有任何变化，类型还是object


var box = ['李炎恢', 28, '盐城'];
alert(box.push('计算机编程','江苏'));					//给数组末尾添加了N个元素，并返回数组最新长度
alert(box);
alert(box.pop());										//移除数组最后的元素，并且返回移除的元素
alert(box);

var box = ['李炎恢', 28, '盐城'];
alert(box.push('计算机编程'));	
alert(box);
alert(box.shift());										//移除数组开头的一个元素，并且返回这个元素
alert(box);


var box = ['李炎恢', 28, '盐城'];
alert(box.unshift('江苏'));							//给数组前端添加一个元素，并且返回最新的长度
alert(box);


var box = [1,2,3,4,5];
alert(typeof box.reverse());						//方法执行后返回一个逆序后的数组
alert(typeof box);										//原数组也被逆序了。

var box = [4,1,6,2,7,3,9];
alert(box.sort());										//从小到大排序
alert(box);

function compare(value1,value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}


var box = [0,1,5,10,15];
alert(box.sort(compare));
alert(box.reverse());

var box = ['李炎恢', 28, '盐城'];
var box2 = box.concat('计算机编程');
alert(box2);
alert(box);

var box = ['李炎恢', 28, '盐城'];
var box2 = box.slice(1);
alert(box2);

var box = ['李炎恢', 28, '盐城','计算机编程','江苏'];
var box2 = box.slice(1,3);				//这里不是从第1个位置取3个
alert(box2);										//而是从第1个位置取到第3个位置

var box = ['李炎恢', 28, '盐城'];
var box2 = box.splice(0,2);			//这里表示从第0个位置取2个，
alert(box2);									//而不是从第0个位置取到第2个位置

var box = ['李炎恢', 28, '盐城'];
var box2 = box.splice(0,2);			//这里表示从第0个位置取2个，
alert(box2);									//而不是从第0个位置取到第2个位置
alert(box);


var box = ['李炎恢', 28, '盐城'];
var box2 = box.splice(1,0,'江苏','计算机编程');		//从第1个插入点插入元素，0表示不删除
alert(box2);
alert(box);
*/

var box = ['李炎恢', 28, '盐城'];			//替换
var box2 = box.splice(1,1,100);
alert(box2);
alert(box);
























