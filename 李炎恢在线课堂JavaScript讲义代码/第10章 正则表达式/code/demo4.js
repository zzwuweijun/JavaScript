
/*
var pattern = /goo gle/;				//直接使用空格匹配
var str = 'goo gle';
alert(pattern.test(str));

var pattern = /goo\sgle/;			//\s表示空格匹配
var str = 'goo gle';
alert(pattern.test(str));

var pattern = /google\b/;			//\b表示到达边界
var str = 'google';
alert(pattern.test(str));


var pattern = /google|baidu|bing/;			//|表示匹配或选择模式		
var str = 'this is a bing';						//匹配概念，不是相等，包含意思
alert(pattern.test(str));

var pattern = /google{4,8}$/;					//表示e的4-8次
var str = 'googleeee';
alert(pattern.test(str));

var pattern = /(google){4,8}$/;				//分组，可以看着一个字符	
var str = 'googlegooglegooglegoogle';		//表示google4-8次
alert(pattern.test(str));

var pattern = /8.*8/;
var str = 'This is a 8google8';
alert(pattern.test(str));

var pattern = /8(.*)8/;
var str = 'This is a 8google8';
str.match(pattern);
alert(RegExp.$1);

//RegExp.$1表示获取模式中第一个分组对应的匹配字符串

var pattern = /8(.*)8/;
var str = 'This is a 8google8';
document.write(str.replace(pattern, '<strong>$1</strong>'));			//$1表示分组获取字符串匹配到的内容

var pattern = /(.*)\s(.*)/;
var str = 'google baidu';
alert(str.replace(pattern, '$2 $1'));			//位置交换

var pattern = /[a-z]+/;								//这里使用了贪婪模式
var str = 'abcdefj';
alert(str.replace(pattern, '1'));					//所有的字符串变成了1

var pattern = /[a-z]+?/;								//使用惰性模式
var str = 'abcdefj';
alert(str.replace(pattern, '1'));					//只有第一个字符变成了1，后面没有匹配

var pattern = /[a-z]+?/g;							//开启全局，并且使用惰性模式	
var str = 'abcdefj';
alert(str.replace(pattern, '1'));					//每一个字母替换成了1

var pattern = /8(.*)8/;								//使用了贪婪，
var str = '8google8 8google8 8google8';	//匹配到了google8 8google8 8google
document.write(str.replace(pattern, '<strong>$1</strong>'));
//结果：<strong>google8 8google8 8google</strong>


var pattern = /8(.*?)8/g;								//使用了惰性，开启全局
var str = '8google8 8google8 8google8';	
document.write(str.replace(pattern, '<strong>$1</strong>'));
//这次结果正确了
//<strong>google</strong>
//<strong>google</strong>
//<strong>google</strong>
*/


var pattern = /8([^8]*)8/g;								//另一种惰性，屏蔽了8的匹配，也就是两边包含字符			
var str = '8google8 8google8 8google8';	
document.write(str.replace(pattern, '<strong>$1</strong>'));
//<strong>google</strong>
//<strong>google</strong>
//<strong>google</strong>

















