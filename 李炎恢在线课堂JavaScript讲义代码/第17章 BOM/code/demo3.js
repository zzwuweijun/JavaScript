





/*
		setTimeout��һ�������������ַ���������������Ǵ���죬��Ϊ���н������ܣ������������滹�ǿ���ִ�е�

		//����д�����Ƽ������׳�����������չ
		setTimeout("alert('Lee')", 2000);		//2���ִ�е�һ�������Ĵ����
		
function box() {
	alert('Lee');
}

setTimeout(box, 2000);			//��һ��������ֱ�Ӵ��һ������

setTimeout(function () {			//�Ƽ�����չ�Ժã���װ�Ժ�
	alert('Lee');
}, 2000);


var box = setTimeout(function () {			//����ֵ�ǳ�ʱ���õ�ID
	alert('Lee');
}, 2000);


clearTimeout(box);								//ȡ����ǰ��ʱ���üƻ�


var box = setInterval(function () {						//��Ъ���ã������ظ����ϵ�ִ��
	alert('Lee');
}, 1000)

clearInterval(box);

setInterval(function () {
	num++;
	//�����������ʱ����
	document.getElementById('a').innerHTML += num;
	if (num == max) {
		clearInterval(this);			//this��������Ч
		alert('5�뵽�ˣ�');
	}
},1000);

//��ʱ��

var num = 0;
var max = 5;
var id = null;


function box() {			//��������ˣ�this�����ܴ���ID
	num++;
	document.getElementById('a').innerHTML += num;
	if (num == max) {
		clearInterval(id);
		alert('5�뵽�ˣ�');
	}
}

id = setInterval(box, 1000);


//ʹ�ó�ʱ���ã�ģ�ⶨʱ��

var num = 0;
var max = 5;

function box() {		
	num++;
	document.getElementById('a').innerHTML += num;
	if (num == max) {
		alert('5�뵽�ˣ�');
	} else {
		setTimeout(box, 1000);
	}
}


setTimeout(box, 1000);

//alert(window.location);
alert(window.document.location);

location.hash = '#66';			//����ת���µ�URL�����ǰ���#66��URL
alert(location.hash);


location.port = 8888;			//����ת
alert(location.port);

alert(location.search);			//������� search�᲻ͣ����ת

location.search = '?id=5';		//��ѭ��

location.href = 'http://www.baidu.com';

function getArgs() {
	var args = [];
	var qs = location.search.length > 0 ? location.search.substring(1) : '';
	var items = qs.split('&');
	var item = null, name = null, value = null;
	
	for (var i = 0; i < items.length; i++) {
		item = items[i].split('=');
		name = item[0];
		value = item[1]
		args[name] = value;
	} 
	return args;
}


var args = getArgs();
alert(args['id']);
alert(args['search']);


location.assign('http://www.baidu.com');			//��ת

location.reload(true);


function a() {
	location.replace('http://www.baidu.com');			//�������κ���ʷ�ۼ�����ת
}


alert(history.length);			//��ʷ��¼������
*/


function back() {
	history.back();
}


function forward() {
	history.forward();
}

function go(num) {
	history.go(num);
}











