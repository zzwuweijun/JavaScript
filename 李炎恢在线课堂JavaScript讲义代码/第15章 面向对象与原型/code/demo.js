




/*
var box = new Object();		//��������
box.name1 = 'Lee';					//�������
box.age = 100;						//
box.run = function () {
	return this.name1 + this.age + '������...';		//this��ʾ��ǰ�������¶���
};

//this��ʾnew Object()ʵ�����������Ǹ�����
//thisҪ����һ���������£�����box.run() {} �������box�������µķ�����������this������ʾbox����

alert(box.run());

var name1 = 'jack';

alert(this.name1);				//�����this�������window

var box = new Object();		
box.name = 'Lee';				
box.age = 100;						
box.run = function () {
	return this.name + this.age + '������...';	
};

var box2 = new Object();		
box2.name = 'Jack';				
box2.age = 200;						
box2.run = function () {
	return this.name + this.age + '������...';	
};

var box = new Object();		
box.name = 'Lee';				
box.age = 100;						
box.run = function () {
	return this.name + this.age + '������...';	
};

var box2 = box;	
box2.name = 'Jack';				
box2.age = 200;						
box2.run = function () {
	return this.name + this.age + '������...';	
};

alert(box.run());
alert(box2.run());


//����ģʽ
function createObject(name, age) {
	var obj = new Object();									//��������
	obj.name = name;											//�������
	obj.age = age;
	obj.run = function () {										//��ӷ���
		return this.name + this.age + '������...';
	};
	return obj;														//���ض�������
};

function createObject2(name, age) {
	var obj = new Object();									//��������
	obj.name = name;											//�������
	obj.age = age;
	obj.run = function () {										//��ӷ���
		return this.name + this.age + '������...';
	};
	return obj;														//���ض�������
};

var box1 = createObject('Lee', 100);					//������һ������
var box2 = createObject('Jack', 200);					//�����ڶ�������
var box3 = createObject2('kkk', 500);					//��������������

//alert(box1.run());													//��ӡ��һ������ʵ����run()����
//alert(box2.run());													//��ӡ�ڶ�������ʵ����run()����

//alert(typeof box1);
//alert(typeof box2);
alert(box1 instanceof Object);
alert(box2 instanceof Object);
alert(box3 instanceof Object);						//�������������Ƕ���Object���ͣ����޷����֣�˭������˭�Ķ�����

*/







