

/*
var pattern = /[1-9][0-9]{5}/;
var str = 'This is 224000 !';						//������6λ�����������֣���һλ����Ϊ0
alert(pattern.test(str));

var pattern = /^[\w\-]+\.zip|gz|rar/;		//\w+������^���޶����ַ���ʼƥ��
var str = '2-13.zip';					//�ļ�������ĸ_���� . zip,gz,rar,7z
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



var pattern = /^\s+(.+?)\s+$/;						//(.+)��̰��ģʽ������ģʽ
var str = '               goo    gle              ';
var result = pattern.exec(str)[1];
alert('|' + result + '|');

var pattern = /^\s+(.+?)\s+$/;						
var str = '               goo    gle              ';
var result = str.replace(pattern, '$1');			//ʹ�õķ���
alert('|' + result + '|');
*/




var pattern = /^([\w\.\-]+)@([\w\-]+)\.([a-zA-Z]{2,4})$/;
var str = 'yc60.com@gmail.com';
alert(pattern.test(str));

























