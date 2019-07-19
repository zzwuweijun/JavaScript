

/*
var box;
alert(typeof box);		//box是Undefined类型，值是undefined，类型返回的字符串是undefined

var box = true;
alert(typeof box);		//box是Boolean类型，值是true，类型返回的字符串是boolean

var box = '李炎恢';
alert(typeof box);		//box是String类型，值是'李炎恢'，类型返回的字符串是string

var box = 250;
alert(typeof box);		//box是Number类型，值是250，类型返回的字符串是number

//空的对象，表示这个对象创建了，里面没东西
//空对象，表示没有创建，就是一个null

var box = {};
alert(typeof box);		//box是Object类型，值是[object Object]，类型返回的字符串是object

var box = null;
alert(typeof box);		//box是Null类型，值是null，类型返回的字符串是object

var box = new Object();
alert(box);		//box是Object类型，值是[object Object]，类型返回的字符串是object


function box() {

}
alert(typeof box);		//box是Function函数，值是function box() {}，类型返回的字符串是function

alert(typeof new Object());   //可以直接使用字面量

var box = undefined;		//没有必要
alert(box);


var box;
alert(typeof box);
alert(typeof age);		//以后必须声明一个变量就必须初始化，以避免这种问题

var box = {};

if (box != null) {    //不等于null，说明不是空对象
	alert('对象已经创建成功！');
}

var box = null;		//这个表示，你还没有创建对象，但先声明了对象引用而必须初始化的结果
							//你还没有来得及创建对象，先声明一个对象的变量放在那边，默认初始化为null

							
var box = null;

box = {
	1:1
};

alert(box);

var box = '';				//创建一个字符串变量，一开始不知道初始化什么字符串，所以，就给他一个空字符串初始化

var box = 0;				//数值初始化，一般用0

var box = false;		//布尔值初始化，一般一开始用false或者true

alert(undefined == null);		//他们都是空的，所以相等理所当然，

alert(undefined === null);			//数据类型也必须相等才可以

alert(typeof undefined == typeof null);

var box = true;
alert(typeof box == typeof 1);

var box = '';

alert(Boolean(box));

*/



var box;

if (box) {					//条件语句里的()里必须是布尔值，true或者false
	alert('真');
} else {
	alert('假');
}






















