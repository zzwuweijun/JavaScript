
/*
//1.ԭ�����̳У�2.���ù��캯���̳�(����ð��̳�) 3.��ϼ̳�(���ǰ����)

//4.ԭ��ʽ�̳�

//��ʱ��ת����
function obj(o) {				//o��ʾ��Ҫ���ݽ����һ������ 
	function F() {}				//F������һ����ʱ�½��Ķ��������洢���ݹ����Ķ���
	F.prototype = o;			//��o����ʵ����ֵ��F�����ԭ�Ͷ���
	return new F();			//��󷵻�����õ����ݹ�������Ķ���ʵ��
}

//F.prototype = o ��ʵ���൱�� Desk.prototype = new Box();


//������������������ʽ���൱��var box = new Box();
var box = {
	name : 'Lee',
	age : 100,
	family : ['���','���','����']
};

//box1�͵���new F()
var box1 = obj(box);
//alert(box1.name);
alert(box1.family);
box1.family.push('�ܵ�');
alert(box1.family);

var box2 = obj(box);
alert(box2.family);					//�������͵����Թ�����





//5.����ʽ�̳� = ԭ��ʽ +����ģʽ


//��ʱ��ת����
function obj(o) {				
	function F() {}				
	F.prototype = o;			
	return new F();			
}

//��������
function create(o) {
	var f = obj(o);
	f.run = function () {
		return this.name + '����';
	}
	return f;
}

var box = {
	name : 'Lee',
	age : 100,
	family : ['���','���','����']
};


var box1 = create(box);
alert(box1.run());


*/


//6.������ϼ̳�

//��ʱ��ת����
function obj(o) {				
	function F() {}				
	F.prototype = o;			
	return new F();			
}


//��������
function create(box, desk) {
	var f = obj(box.prototype);
	f.constructor = desk;				//����ԭ�͹���ָ��
	desk.prototype = f;
}

function Box(name, age) {
	this.name = name;
	this.age = age;
}

Box.prototype.run = function () {
	return this.name + this.age + '������...'
}

function Desk(name, age) {
	Box.call(this, name, age);				//����ð��
}

//ͨ��������ϼ̳���ʵ�ּ̳�
create(Box, Desk);							//��仰�������Desk.prototype = new Box();


var desk = new Desk('Lee', 100);
alert(desk.run());
alert(desk.constructor);












