
/*
var pattern = /^[\w]+\.(zip|rar|gz)$/;			//|ѡ��������÷�����Ű�������
var str = '123.7z'; 
alert(pattern.test(str));

function box(num1, num2) {				//��ͨ������������ʽ
	return num1 + num2;
}

alert(box(1, 2));

var box = function(num1, num2) {	//ʹ�ñ�����ʼ������
	return num1 + num2;
};

alert(box(1,2));

var box = new Function('num1', 'num2', 'return num1 + num2');			//ʹ��new�Ĺ��캯������������
alert(box(1, 2));
alert(typeof box);

//�������Դ��ݺ�����

//��������Ӻ���ͨ��������Ϊ���������ݵģ�������Ϊ�����ķ���ֵ�����ݵ�

function box(sum, num) {
	return sum + num;
}

function sum(num) {
	return num + 10;
}

var result = box(sum(10), 10);		//20,10sum(10)���ﴫ�ݵ��Ǻ����ķ���ֵ������ͨ�ı���һ����û����
alert(result);

*/

//Ҫ�Ѻ���������Ϊ�������ݣ������Ǻ����Ľ��


function box(sum, num) {
	return sum(num);
}

function sum(num) {
	return num + 10;
}

var result = box(sum, 10);				//����sum��һ�������������������ݵ�����һ������������Ǻ����ķ���ֵ
alert(result);














