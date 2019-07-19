

/*
var box = 'Mr. Lee';
alert(box.length);					//属性
alert(box.constructor);

var box = 'Mr. Lee';
//alert(box.charAt(1));				//r
//alert(box.charCodeAt(4));			//L，返回的是acssii码
//alert(box[1]);
//alert(box.concat(' is ', ' Teacher ', '!')); //参数字符串连接
//alert(box.slice(4, 6));				//Le
//alert(box.substring(4, 6));		//Le
//alert(box.substr(4,6));				//从第四个开始，选6个
//alert(box.substr(4,2));				//Le
//alert(box.slice(4));
//alert(box.substring(4));
//alert(box.substr(4));					//三个都是Lee

//alert(box.slice(-2));					//7+(-2)=5, 第5位开始，ee
//alert(box.substring(-2));			//负数返回全部字符串，Mr. Lee
//alert(box.substr(-2));				//7+(-2)=5, 第5位开始，ee

//alert(box.slice(2,-1));				//7+(-1)=6，(2,6)，. Le
//alert(box.slice(-2,-1));				//7+(-2)=5, 7+(-1)=6，(5,6)，e
//alert(box.substring(2,-1));			//参数如果是负，直接0，(2,0); 如果第二个参数比第一个小，那么第二个参数提前，(0,2)
//alert(box.substr(2, -1));			//第二参数为负，直接0，(2,0)，空

//alert(box.substr(-2));				//IE浏览器会遇到负值会全部返回
*/


var box = 'Mr. Lee is Lee a Lee a Lee';
//alert(box.indexOf('L'));				//返回从初始位置搜索L第一次出现的位置，4
//alert(box.lastIndexOf('L'));		//返回从末尾位置搜索L第一次出现的位置，11
//alert(box.indexOf('L',5));			//从第5个位置开始搜索L第一次出现的位置，11
//alert(box.lastIndexOf('L',5));		//从第5个位置开始向前搜索L第一次出现的位置，4
//alert(box.indexOf(','));				//找不到，返回-1

var boxarr = [];
var pos = box.indexOf('L');
while (pos > -1) {
	boxarr.push(pos);
	pos = box.indexOf('L', pos + 1);
}
alert(boxarr);























