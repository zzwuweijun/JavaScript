




/*
var pattern = /Box/i;									//û�п���ȫ��
var str = 'This is a Box! That is a Box!';
alert(str.match(pattern));							//ƥ�䵽��һ���ַ�����������

var pattern = /Box/i;									
var str = 'This is a Box! That is a Box!';
var a = str.match(pattern);		
alert(a[0]);												//֤����������

var pattern = /Box/ig;								//������ȫ��								
var str = 'This is a Box! That is a Box!';
alert(str.match(pattern));							//������ƥ����ַ�����ϳ����鷵��


var pattern = /Box/i;															
var str = 'This is a Box! That is a Box!';
alert(str.search(pattern));							//���صĵ�һ��ƥ���λ��

var pattern = /xox/i;															
var str = 'This is a Box! That is a Box!';
alert(str.search(pattern));							//�Ҳ���ƥ�䣬����-1

var pattern = /Box/i;								//û�п���ȫ��								
var str = 'This is a Box! That is a Box!';
alert(str.replace(pattern, 'Tom'));			//�����滻����ַ�����ֻ�޵�һ��

var pattern = /Box/ig;								//����ȫ��								
var str = 'This is a Box! That is a Box!';
alert(str.replace(pattern, 'Tom'));			//�����滻����ַ���������ƥ�䶼�ᱻ�滻

var pattern = /!/ig;															
var str = 'This is a Box! That is a Box!';
alert(str.split(pattern));		
alert(str.split(pattern).length);	

var pattern = /(g)oogle/ig;
var str = 'This is a google��';
pattern.test(str);								//����ִ��һ�£���̬���Բ���Ч

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










