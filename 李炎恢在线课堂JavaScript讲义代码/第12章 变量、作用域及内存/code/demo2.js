


/*
var box = 'Lee';
function setBox() {
	return 123;
}
alert(box);
alert(setBox());

var box = 'Lee';
function setBox() {
	return 123;
}
alert(window.box);						//ȫ�ֱ���������Χ������window����
alert(window.setBox());				//ȫ�ֺ���������Χ������window����


var box = 'Lee';
function setBox() {
	function setColor() {
		return 456;
	}
	return 123;
}
alert(xxx.setColor());


var box = 'Lee';
function setBox() {
	var box = 'red';						//����Ǿֲ����������ķ�Χ��setBox()������Ͳ���ʶ��
}
setBox();
alert(box);
var box = 'Lee';
function setBox() {
	box = 'red';									//ȥ��var�ͱ��ȫ�ֱ�����
}
setBox();
alert(box);

var box = 'Lee';
function setBox(box) {			//ͨ�����Σ�Ҳ�Ǿֲ���������������setBox()��Χ��
	alert(box);
}
setBox('red');
alert(box);


var box = 'Lee';
function setBox() {
	return setColor();
	function setColor() {			//setColor()��������������setBox()��
		var b = 'kkk';					//b����������setColor()��
		alert(b);
		return 123;
	}		
}


alert(window.setBox());

if (true) {							//if���Ļ�����û��������Ĺ���
	var box = 'Lee';
}

alert(window.box);


for (var i = 0 ; i < 10 ; i ++) {
	var box = 'Lee';
}

alert(window.i);
alert(window.box);

var num = 0;
function box() {
	num = 10;					//�����var���ں��������������������Ǿֲ��ģ�ȥ��var����ȫ��
}

box();
alert(num);

var box = 'Lee';

function setBox() {
	var box = 'red';
	return box;
}

alert(setBox());

var box = {};
box.name = 'Lee';
alert(box.name);

box = null;								//�������ã��ȴ������ռ���������

alert(box)

var box = 'Lee';

alert(window.box);

window = null;

alert(window.box);
*/


















