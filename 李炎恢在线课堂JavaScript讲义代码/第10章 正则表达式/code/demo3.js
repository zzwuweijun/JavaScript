



/*
var pattern = /g..gle/;					//����ű�ʾƥ����˻��з���������ַ�
var str = 'g12gle';
alert(pattern.test(str));

var pattern = /go*gle/;					//o*����ʾ0����1�������߶��o		
var str = 'gbbbgle';
alert(pattern.test(str));

var pattern = /go+gle/;					//o+����ʾ1�������߶��
var str = 'ggle';
alert(pattern.test(str));

var pattern = /go?gle/;					//o?����ʾ1��������0��
var str = 'google';
alert(pattern.test(str));


var pattern = /g.?gle/;					//.?����ʾ1��������0���������ַ�
var str = 'gbbgle';
alert(pattern.test(str));

var pattern = /go{2,4}gle/;			//o{2,4}��ʾƥ��o2-4�Σ�����2��4
var str = 'google';
alert(pattern.test(str));

var pattern = /go{3}gle/;			//o{3}����ʾֻ���޶�Ϊ3��			
var str = 'goooogle';
alert(pattern.test(str));

var pattern = /go{3,}gle/;			//o{3,}����ʾΪ3����3������			
var str = 'goooooooooooooooooooogle';
alert(pattern.test(str));

var pattern = /[a-z]oogle/;			//[a-z]��ʾ26��Сд��ĸ������һ��������ƥ��
var str = '6oogle';
alert(pattern.test(str));

var pattern = /[A-Z]oogle/;			//[A-Z]��ʾ26����д��ĸ������һ��������ƥ��
var str = 'Google';
alert(pattern.test(str));

var pattern = /[0-9]*oogle/;			//[0-9]*����ʾ0�Σ�һ�Σ����߶��
var str = '44444oogle';
alert(pattern.test(str));


var pattern = /[0-9]oogle/;		
var str = '6oogle';
alert(pattern.test(str));

var pattern = /[a-zA-Z0-9]oogle/;		//[a-zA-Z0-9]��ʾƥ���Сд��a-zA-Z0-9
var str = 'oogle';
alert(pattern.test(str));

var pattern = /[^a-zA-Z0-9]oogle/;				//[^0-9]��ʾ��0-9�������ַ�
var str = '_oogle';
alert(pattern.test(str));

var pattern = /^[0-9]oogle/;				//���^���ţ��Ǽ���/����Ķ�����[]�����	
var str = '444oogle';
alert(pattern.test(str));


var pattern = /^[0-9]+oogle/;				//+�ţ�����ƥ��һ�����߶��	
var str = '444oogle';
alert(pattern.test(str));

var pattern = /\woogle/;					//\w��ʾ[a-zA-Z_]
var str = '-oogle';
alert(pattern.test(str));

var pattern = /\Woogle/;					//\W��ʾ[^a-zA-Z_]
var str = '-oogle';
alert(pattern.test(str));

var pattern = /\doogle/;					//\d��ʾ[0-9]
var str = 'aoogle';
alert(pattern.test(str));

var pattern = /\Doogle/;					//\D��ʾ[^0-9]
var str = '1oogle';
alert(pattern.test(str));
*/



var pattern = /^[a-z]oogl[0-9]$/;		//^ǿ����ƥ�䣬$ǿ��βƥ��			
var str = 'googl5';
alert(pattern.test(str));
























