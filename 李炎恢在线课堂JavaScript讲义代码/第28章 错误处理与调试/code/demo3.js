



/*
	���ϵĵ��Է���alert
	var num1 = 1;
	//alert(num1);
	var num2 = 2;						//PS������ǳ��Ӵ��ʱ���ַ����п����������ĵı������ߺ�����ķ���ֵ����������ô���׿�������
	//alert(typeof num2);
	var result = num1 + num2;
	alert(result);


	//PS�����alert����ִ�У���ô֮ǰ�Ĵ���û�д���
	
console.error('����');
console.info('��Ϣ');
console.log('��־');
console.warn('����');
	
	
var num1 = 1;
//console.log('num1 = ' + num1 + '����:' + typeof num1);
var num2 = 'b';	
//console.log('num2 = ' + num2 + '����:' + typeof num2);				
var result = num1 + num2;
alert(result);


//PS��console���Ծ��㲻ɾ��������ѽ����ִ�У���alert����;��Ϻ�������ִ��


var num1 = 1;
if (typeof num1 != 'number') throw new Error('num1����������');
var num2 = 2;	
if (typeof num2 != 'number') throw new Error('num2����������');		
var result = num1 + num2;
alert(result);
//��ҳ���Firebug ��Firebug lite
//���������������ٶȿ�
//PS��Chrome����������ڷ������˲���Ч
*/



addEvent(window, 'load', function () {
	var a = 1;
	var box = document.getElementById('box');
	addEvent(box, 'click', function () {
		this.innerHTML = '�����ˣ�';
	});
	a = 2;
	b = 1;
	a = 3;
	b = 2;
});


//PS�����öϵ㣬����ִ�е��Ե����
//PS������Ҫ���Ե�ʱ��һ��Ҫȥ���ϵ㣬��Ȼÿ��ˢ���ܻ�������ģʽ











