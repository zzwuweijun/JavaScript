


/*

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

function Desk(name, age) {			//����һ���������й��캯���Ķ�����ʵ����Object
	this.name = name;					//���һ������
	this.age = age;			
	this.run = function () {			//���һ������
		return this.name + this.age + '������...';
	};
};

//1.���캯��û��new Object��������̨���Զ�var obj = new Object
//2.this���൱��obj
//3.���캯������Ҫ���ض������ã����Ǻ�̨�Զ����ص�

//1.���캯��Ҳ�Ǻ���������������һ����ĸ��д
//2.����new ���캯����()��new Box()�������Box��һ����ĸҲ�Ǵ�д��
//3.����ʹ��new �����

var box2 = new Box('Jack', 200);	//ʵ����
var box3 = new Desk('kkk', 500);	//ʵ����

//alert(box1.run());
//alert(box2.run());
//alert(box1 instanceof Object);
//alert(box1 instanceof Box);
//alert(box2 instanceof Box);
//alert(box3 instanceof Box);			//����ʶ���ˣ���Ϊbox3��Desk���������
alert(box3 instanceof Desk);			//����ʶ��

var box1 = new Box('Lee', 100);		//ʵ����
alert(box1.run());

var user = 'bbb';
alert(this.user);							//window,name�����Ƚ�����

function box() {  //��ͨ����������ĸ�����д

}


alert(Box('Lee', 100));					//���캯��������ͨ��������һ������Ч�ģ�����ʹ��new�����

var o = new Object();
Box.call(o, 'Lee', 100);					//����ð��
alert(o.run());


//alert(box1.name == box2.name);
//alert(box1.age == box2.age);
//alert(box1.run() == box1.run());	//���캯�����ڵķ�����ֵ���൱��
//alert(box1.run == box2.run);			//��Ϊ���ǱȽϵ������õ�ַ��
*/


//���캯��
function Box(user, age) {			//����һ���������й��캯���Ķ�����ʵ����Object
	this.user = user;					//���һ������
	this.age = age;			
	this.run = run;
};


function run() {							//�ѹ��캯���ڲ��ķ���ͨ��ȫ����ʵ�����õ�ַһ��
	return this.user + this.age + '������...';
}


var box1 = new Box('Lee', 100);	//ʵ�������ַΪ1
var box2 = new Box('Lee', 100);  //ʵ�������ַΪ2
//alert(box1.run == box2.run);			//
alert(box1.run());
alert(run());






