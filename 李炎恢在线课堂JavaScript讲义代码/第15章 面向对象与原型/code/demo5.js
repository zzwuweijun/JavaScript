

/*

//ԭ�͵�ȱ��

function Box() {}

Box.prototype = {
	constructor : Box, 
	name : 'Lee', 
	age : 100,
	family : ['���','���','����'],
	run : function () {
		return this.name + this.age + '������...'
	}
};


var box1 = new Box();
alert(box1.family);
box1.family.push('�ܵ�');			//�ڵ�һ��ʵ���޸ĺ��������ͣ������˹���
alert(box1.family);

var box2 = new Box();
alert(box2.family);					//������box1��Ӻ���������͵�ԭ��


//��Ϲ��캯��+ԭ��ģʽ

function Box(name, age) {		//���ֶ������ù��캯��
	this.name = name;
	this.age = age;
	this.family = ['���','���','����'];
}

Box.prototype = {					//���ֹ������ԭ��
	constructor : Box,
	run : function () {
		return this.name + this.age + '������...'
	}
};


var box1 = new Box('Lee', 100);
//alert(box1.run());
alert(box1.family);
box1.family.push('�ܵ�');		
alert(box1.family);

var box2 = new Box('Jack', 200);
//alert(box2.run());
alert(box2.family);					//��������û��ʹ��ԭ�ͣ�����û�й���




//��̬ԭ��ģʽ


//���Խ�ԭ�ͷ�װ�����캯����
function Box(name, age) {		
	this.name = name;
	this.age = age;
	this.family = ['���','���','����'];
	
	if (typeof this.run != 'function') {				//�ж�this.run�Ƿ����
		Box.prototype.run = function() {
			return this.name + this.age + '������...'
		};
	}
}

//ԭ�͵ĳ�ʼ����ֻҪ��һ�γ�ʼ�����Ϳ����ˣ�û��Ҫÿ�ι��캯��ʵ������ʱ�򶼳�ʼ��

var box1 = new Box('Lee', 100);


var box2 = new Box('Jack', 200);




//�������캯�� = ����ģʽ + ���캯��

function Box(name, age) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function () {
		return this.name + this.age + '������...'
	};
	return obj;
}


var box1 = new Box('Lee', 100);
alert(box1.run());

var box2 = new Box('Jack', 200);
alert(box2.run());





//���׹��캯��

function Box(name, age) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function () {
		return this.name + this.age + '������...'
	};
	return obj;
}


var box1 = Box('Lee', 100);
alert(box1.run());

var box2 = Box('Jack', 200);
alert(box2.run());


*/








