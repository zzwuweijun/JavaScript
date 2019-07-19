




/*

//JSON简单值
10
"hello"
true
null

//对象表示
var box = {
	name : 'Lee', 
	age : 100
};
alert(box.name);

//JSON对象表示
{
	"name" : "Lee",
	"age" : 100
}


//普通数组
var box = [100, 'Lee', true];

//JSON数组
'[100, "Lee", true]'

//PS：JSON说白了就是一个字符串，所以任何表示，都应该加上引号表示字符串
//PS：JSON对象和数组比普通对象和数组，少了分号，少了变量赋值，而且本身应该是字符串表示

//最常用的JSON结构
[
	{
		"title" : "a",
		"num" : 1
	},
	{
		"title" : "b",
		"num" : 1
	},
	{
		"title" : "c",
		"num" : 1
	}
]

//模拟加载JSON数据字符串的过程，var json = load('demo.json');		//把JSON字符串加载进来并且赋值给json变量
var json = '[{"title" : "a", "num" : 1},{"title" : "b", "num" : 2}]';		//模拟加载JSON字符串的过程
//alert(typeof json);

//使用eval()来执行字符串里的JS代码
var box = eval(json);			//解析JSON字符串，让他变成JavaScript代码
alert(box[1].title);


//PS：eval()不安全


var json = '[{"title" : "a", "num" : 1},{"title" : "b", "num" : 2}]';	
//alert(JSON);
var box = JSON.parse(json);
alert(box[0].title);


var box = [
					{
						title : 'a',
						num : 1
					},
					{
						title : 'b',
						num : 2
					}
];
var json = JSON.stringify(box);
alert(json);

var box = [
					{
						title : 'a',
						num : 1,
						height : 177
					},
					{
						title : 'b',
						num : 2,
						height : 188
					}
];
var json = JSON.stringify(box, ['num', 'height']);
alert(json);

var box = [
					{
						title : 'a',
						num : 1,
						height : 177
					},
					{
						title : 'b',
						num : 2,
						height : 188
					}
];
var json = JSON.stringify(box, function (key, value) {
	if (key == 'title') {
		return 'Mr.' + value;
	} else {
		return value;
	}
});
alert(json);


//PS：火狐3.5和3.6在最初支持JSON的时候stringify方法有个小BUG，执行function会出错
//PS：现在火狐的版本是17.0，所以3.5和3.6的市场份额可以忽略不计，没必要单独兼容


var box = [
					{
						title : 'a',
						num : 1,
						height : 177
					},
					{
						title : 'b',
						num : 2,
						height : 188
					}
];
var json = JSON.stringify(box, ['title', 'num'], 4);
alert(json);


var box = [
					{
						title : 'a',
						num : 1,
						height : 177
					},
					{
						title : 'b',
						num : 2,
						height : 188
					}
];
var json = JSON.stringify(box, null, 4);
alert(json);


var box = [
					{
						title : 'a',
						num : 1,
						height : 177,
						toJSON : function () {
							return this.title;
						}
					},
					{
						title : 'b',
						num : 2,
						height : 188,
						toJSON : function () {
							return this.title;
						}
					}
];
var json = JSON.stringify(box, null, 4);
alert(json);

*/




var json = '[{"title" : "a", "num" : 1},{"title" : "b", "num" : 2}]';	
var box = JSON.parse(json, function (key, value) {
	if (key == 'title') {
		return 'Mr.' + value;
	} else {
		return value;
	}
});
alert(box[0].title);


