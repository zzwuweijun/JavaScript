

/*
//�̳У�ͨ��ԭ����ʵ��


function Box() {					//���̳еĺ�������������(���࣬����)
	this.name = 'Lee';
}

function Desk() {				//�̳еĺ�������������(���࣬������)
	this.age = 100;
}

function Table() {
	this.level = 'AAAAA';
}

//ͨ��ԭ�����̳У�������ʵ������Ķ���ʵ������ֵ�������͵�ԭ������
//new Box()�ὫBox���������Ϣ��ԭ�������Ϣ������Desk
//Desk��ԭ�ͣ��õ�����Box�Ĺ���+ԭ�������Ϣ
Desk.prototype = new Box();
Table.prototype = new Desk();


var box = new Box();
alert(box.constructor);

var desk = new Desk();
//alert(desk.age);
//alert(desk.name);

var table = new Table();
//alert(table.level);
//alert(desk.age);
//alert(desk.name);


function Box() {					//���̳еĺ�������������(���࣬����)
	this.name = 'Lee';
}

Box.prototype.name = 'Jack';

function Desk() {				//�̳еĺ�������������(���࣬������)
	this.age = 100;
}

Desk.prototype = new Box();		//ͨ��ԭ�����̳�

var box = new Box();
var desk = new Desk();
//alert(desk.name);					//�ͽ�ԭ��ʵ�����У��ͷ��أ�û�о�ȥ����ԭ��

//�����ʹ������Լ��������ĳ�����
//alert(desk instanceof Object);
alert(desk instanceof Desk);
alert(desk instanceof Box);
alert(box instanceof Desk);





//ʹ�ö���ð��̳�

function Box(name, age) {
	this.name = name;
	this.age = age;
	this.family = ['���','���','����'];	//�������ͣ����ڹ�����Ͳ��ᱻ���� 
}

//Box.prototype.family = '��ͥ';

function Desk(name, age) {
	Box.call(this, name, age)				//����ð�䣬����ð��ֻ�ܼ̳й��������Ϣ
}


var desk = new Desk('Lee', 100);
alert(desk.family);
desk.family.push('�ܵ�');
alert(desk.family);


var desk2 = new Desk('Lee', 100);
alert(desk2.family);

*/

function Box(name, age) {
	this.name = name;
	this.age = age;
	this.family = ['���','���','����'];
}

Box.prototype.run = function () {
	return this.name + this.age + '������...';
};

//���캯����ķ��������ڹ����ÿ��ʵ�������������һ���ڴ��ַ���˷ѣ�������÷���ԭ�����֤���ʵ����ֻ��һ����ַ

function Desk(name, age) {
	Box.call(this, name, age)					//����ð��
}

Desk.prototype = new Box();				//ԭ�����̳�


var desk = new Desk('Lee', 100);
alert(desk.run());





















