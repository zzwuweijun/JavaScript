

/*
var pattern = /[1-9][0-9]{5}/;
var str = 'This is 224000 !';						//必须是6位，必须是数字，第一位不能为0
alert(pattern.test(str));

var pattern = /^[\w\-]+\.zip|gz|rar/;		//\w+，加上^来限定首字符开始匹配
var str = '2-13.zip';					//文件名：字母_数字 . zip,gz,rar,7z
alert(pattern.test(str));

var pattern = /\s/g;
var str = '111 222 333 555';
alert(str.replace(pattern, ''));

var pattern = /^\s+/;
var str = '               goo    gle              ';
var result = str.replace(pattern, '');
pattern = /\s+$/;
result = result.replace(pattern, '');
alert('|' + result + '|');



var pattern = /^\s+(.+?)\s+$/;						//(.+)是贪婪模式，惰性模式
var str = '               goo    gle              ';
var result = pattern.exec(str)[1];
alert('|' + result + '|');

var pattern = /^\s+(.+?)\s+$/;						
var str = '               goo    gle              ';
var result = str.replace(pattern, '$1');			//使用的分组
alert('|' + result + '|');
*/




var pattern = /^([\w\.\-]+)@([\w\-]+)\.([a-zA-Z]{2,4})$/;
var str = 'yc60.com@gmail.com';
alert(pattern.test(str));

























