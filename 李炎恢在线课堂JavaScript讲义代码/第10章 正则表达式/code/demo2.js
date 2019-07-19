




/*
var pattern = /Box/i;									//没有开启全局
var str = 'This is a Box! That is a Box!';
alert(str.match(pattern));							//匹配到第一个字符串返回数组

var pattern = /Box/i;									
var str = 'This is a Box! That is a Box!';
var a = str.match(pattern);		
alert(a[0]);												//证明了是数组

var pattern = /Box/ig;								//开启了全局								
var str = 'This is a Box! That is a Box!';
alert(str.match(pattern));							//将所有匹配的字符串组合成数组返回


var pattern = /Box/i;															
var str = 'This is a Box! That is a Box!';
alert(str.search(pattern));							//返回的第一个匹配的位置

var pattern = /xox/i;															
var str = 'This is a Box! That is a Box!';
alert(str.search(pattern));							//找不到匹配，返回-1

var pattern = /Box/i;								//没有开启全局								
var str = 'This is a Box! That is a Box!';
alert(str.replace(pattern, 'Tom'));			//返回替换后的字符串，只限第一个

var pattern = /Box/ig;								//开启全局								
var str = 'This is a Box! That is a Box!';
alert(str.replace(pattern, 'Tom'));			//返回替换后的字符串，所有匹配都会被替换

var pattern = /!/ig;															
var str = 'This is a Box! That is a Box!';
alert(str.split(pattern));		
alert(str.split(pattern).length);	

var pattern = /(g)oogle/ig;
var str = 'This is a google！';
pattern.test(str);								//必须执行一下，静态属性才有效

//alert(RegExp.input);
//alert(RegExp.leftContext);
//alert(RegExp.rightContext);
//alert(RegExp.lastMatch);
//alert(RegExp.lastParen);
//alert(RegExp.multiline);

*/


var pattern = /google/;
var str = 'google google google';
//alert(pattern.global);
//alert(pattern.ignoreCase);
//alert(pattern.multiline);
//alert(pattern.source);



pattern.test(str);
pattern.test(str);
pattern.lastIndex = 100;
alert(pattern.lastIndex);










