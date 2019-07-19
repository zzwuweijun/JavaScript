
/*
var pattern = /goo gle/;				//ֱ��ʹ�ÿո�ƥ��
var str = 'goo gle';
alert(pattern.test(str));

var pattern = /goo\sgle/;			//\s��ʾ�ո�ƥ��
var str = 'goo gle';
alert(pattern.test(str));

var pattern = /google\b/;			//\b��ʾ����߽�
var str = 'google';
alert(pattern.test(str));


var pattern = /google|baidu|bing/;			//|��ʾƥ���ѡ��ģʽ		
var str = 'this is a bing';						//ƥ����������ȣ�������˼
alert(pattern.test(str));

var pattern = /google{4,8}$/;					//��ʾe��4-8��
var str = 'googleeee';
alert(pattern.test(str));

var pattern = /(google){4,8}$/;				//���飬���Կ���һ���ַ�	
var str = 'googlegooglegooglegoogle';		//��ʾgoogle4-8��
alert(pattern.test(str));

var pattern = /8.*8/;
var str = 'This is a 8google8';
alert(pattern.test(str));

var pattern = /8(.*)8/;
var str = 'This is a 8google8';
str.match(pattern);
alert(RegExp.$1);

//RegExp.$1��ʾ��ȡģʽ�е�һ�������Ӧ��ƥ���ַ���

var pattern = /8(.*)8/;
var str = 'This is a 8google8';
document.write(str.replace(pattern, '<strong>$1</strong>'));			//$1��ʾ�����ȡ�ַ���ƥ�䵽������

var pattern = /(.*)\s(.*)/;
var str = 'google baidu';
alert(str.replace(pattern, '$2 $1'));			//λ�ý���

var pattern = /[a-z]+/;								//����ʹ����̰��ģʽ
var str = 'abcdefj';
alert(str.replace(pattern, '1'));					//���е��ַ��������1

var pattern = /[a-z]+?/;								//ʹ�ö���ģʽ
var str = 'abcdefj';
alert(str.replace(pattern, '1'));					//ֻ�е�һ���ַ������1������û��ƥ��

var pattern = /[a-z]+?/g;							//����ȫ�֣�����ʹ�ö���ģʽ	
var str = 'abcdefj';
alert(str.replace(pattern, '1'));					//ÿһ����ĸ�滻����1

var pattern = /8(.*)8/;								//ʹ����̰����
var str = '8google8 8google8 8google8';	//ƥ�䵽��google8 8google8 8google
document.write(str.replace(pattern, '<strong>$1</strong>'));
//�����<strong>google8 8google8 8google</strong>


var pattern = /8(.*?)8/g;								//ʹ���˶��ԣ�����ȫ��
var str = '8google8 8google8 8google8';	
document.write(str.replace(pattern, '<strong>$1</strong>'));
//��ν����ȷ��
//<strong>google</strong>
//<strong>google</strong>
//<strong>google</strong>
*/


var pattern = /8([^8]*)8/g;								//��һ�ֶ��ԣ�������8��ƥ�䣬Ҳ�������߰����ַ�			
var str = '8google8 8google8 8google8';	
document.write(str.replace(pattern, '<strong>$1</strong>'));
//<strong>google</strong>
//<strong>google</strong>
//<strong>google</strong>

















