


/*
var box = new Array();							//声明一个数组，空数组
alert(typeof box);									//数组属于object类型


var box = new Array('李炎恢', 28, '盐城');	//创建一个数组，并分配了三个元素
//alert(box);
alert(box[0]);

var box = new Array(10);						//创建数组，包含10个元素，必须是数字，必须是1位
box[3] = '李炎恢';
box[5] = '盐城';
alert(box);

var box = new Array('盐城');
alert(box);

var box = Array();
alert(typeof box);

var box = [];												//字面量的方式创建数组
alert(typeof box);

var box = ['李炎恢', 28, '盐城'];	//字面量的方式创建数组，并且分配了元素
alert(box);

var box = [1,2,];									//额外的逗号会让IE获取到，而参数错误
alert(box.length);

var box = [,,,];											//不允许
alert(box.length);

var box = ['李炎恢', 28, '盐城'];	
box[1] = 100;
box[4] = '计算机编程';
alert(box);

var box = [];	
box['name'] = '李炎恢';
box['age'] = 28;
alert(box['name']);					//如果是字符串下标，不会体现在数组上，而要单独拎出来


var box = [];	
box[0] = '李炎恢';
box[1] = 28;
alert(box);							//如果是索引下标，就会在数组上体现出来


var box = ['李炎恢', 28, '盐城'];	
box.length = 10;					//强制了元素量
alert(box.length);				
alert(box);							//以逗号扩展补充

var box = ['李炎恢', 28, '盐城'];	
box[3] = '江苏';
alert(box);

var box  = ['李炎恢', 28, '盐城'];	
box[box.length] = '江苏';			//使用.length获得最后一个下标值
alert(box);
*/


var box = [
					{
						name : '李炎恢',
						age : 28
					},
					[3,4,6,'江苏',new Object()],
					'计算机编程',
					25+25,
					new Array(1,2,3)
];
alert(box);
alert(box[0]['name']);



















