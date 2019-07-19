



/*
var pattern = /g..gle/;					//点符号表示匹配除了换行符外的任意字符
var str = 'g12gle';
alert(pattern.test(str));

var pattern = /go*gle/;					//o*，表示0个，1个，或者多个o		
var str = 'gbbbgle';
alert(pattern.test(str));

var pattern = /go+gle/;					//o+，表示1个，或者多个
var str = 'ggle';
alert(pattern.test(str));

var pattern = /go?gle/;					//o?，表示1个，或者0个
var str = 'google';
alert(pattern.test(str));


var pattern = /g.?gle/;					//.?，表示1个，或者0个的任意字符
var str = 'gbbgle';
alert(pattern.test(str));

var pattern = /go{2,4}gle/;			//o{2,4}表示匹配o2-4次，包含2和4
var str = 'google';
alert(pattern.test(str));

var pattern = /go{3}gle/;			//o{3}，表示只能限定为3个			
var str = 'goooogle';
alert(pattern.test(str));

var pattern = /go{3,}gle/;			//o{3,}，表示为3个或3个以上			
var str = 'goooooooooooooooooooogle';
alert(pattern.test(str));

var pattern = /[a-z]oogle/;			//[a-z]表示26个小写字母，任意一个都可以匹配
var str = '6oogle';
alert(pattern.test(str));

var pattern = /[A-Z]oogle/;			//[A-Z]表示26个大写字母，任意一个都可以匹配
var str = 'Google';
alert(pattern.test(str));

var pattern = /[0-9]*oogle/;			//[0-9]*，表示0次，一次，或者多次
var str = '44444oogle';
alert(pattern.test(str));


var pattern = /[0-9]oogle/;		
var str = '6oogle';
alert(pattern.test(str));

var pattern = /[a-zA-Z0-9]oogle/;		//[a-zA-Z0-9]表示匹配大小写的a-zA-Z0-9
var str = 'oogle';
alert(pattern.test(str));

var pattern = /[^a-zA-Z0-9]oogle/;				//[^0-9]表示非0-9的任意字符
var str = '_oogle';
alert(pattern.test(str));

var pattern = /^[0-9]oogle/;				//这个^符号，是加在/后面的而不是[]里面的	
var str = '444oogle';
alert(pattern.test(str));


var pattern = /^[0-9]+oogle/;				//+号，可以匹配一个或者多个	
var str = '444oogle';
alert(pattern.test(str));

var pattern = /\woogle/;					//\w表示[a-zA-Z_]
var str = '-oogle';
alert(pattern.test(str));

var pattern = /\Woogle/;					//\W表示[^a-zA-Z_]
var str = '-oogle';
alert(pattern.test(str));

var pattern = /\doogle/;					//\d表示[0-9]
var str = 'aoogle';
alert(pattern.test(str));

var pattern = /\Doogle/;					//\D表示[^0-9]
var str = '1oogle';
alert(pattern.test(str));
*/



var pattern = /^[a-z]oogl[0-9]$/;		//^强制首匹配，$强制尾匹配			
var str = 'googl5';
alert(pattern.test(str));
























