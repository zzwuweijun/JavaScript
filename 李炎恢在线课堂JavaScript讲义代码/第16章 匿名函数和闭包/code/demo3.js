



/*
//�鼶������(˽��������)

function box() {
	for (var i = 0; i < 5; i ++) {			//�鼶������(JSû�������)
		
	}
	alert(i);
}

box();

function box() {
	for (var i = 0; i < 5; i ++) {			//�鼶������(JSû�������)
		
	}
	var i = 111;					//��������������Ҳ����Ӱ��֮ǰ������ʼ��������
	alert(i);
}

box();

//ʹ�ÿ鼶������(˽��������)

function box() {
	(function () {								//��������ִ�е������������Ϳ���ʵ��˽��������
		for (var i = 0; i < 5; i ++) {		
			alert(i);
		}
		// ����������a,b,c�ȱ���
	})();		��������	

		//������Լ����ƺ���a,b,c�ȱ������������a,b,c��ȫû����ϵ
	//�������˽�������򣬱�������������
	alert(i);								//����Ͳ���ʶ��
}

box();

//ȫ�ֱ���

var age = 100;

alert(age);

age = null;

//˽������������ʾ

(function () {
	//�������ȫ�ֵ�˽��������
	var age = 100;
	alert(age);
})();



(function () {
	var a;
	var b;
})():


//˽�б���

function box() {
	var age = 100;			//˽�б���
}

box();

function Box() {
	this.age = 100;					//���ԣ����е�
	this.run = function () {		//���������е�
		return '������...';
	};
}

var box = new Box();
alert(box.age);
alert(box.run());

function Box() {
	var age = 100;					//˽�б���
	function run() {				//˽�к���
		return '������...';
	}
	this.publicGo = function () {		//����ɼ��Ĺ����ӿڣ���Ȩ����
		return age + run();
	};
	this.getAge = function () {
		return age;
	}
}

var box = new Box();
alert(box.getAge());

//ͨ�����캯������

function Box(value) {
	var user = value;				//˽�б���
	this.getUser = function () {
		return user;
	};
}

var box = new Box('Lee');
alert(box.getUser());

var box2 = new Box('kkk');
alert(box.getUser());


function Box(value) {
	var user = value;				//˽�б���
	this.getUser = function () {
		return user;
	};
	this.setUser = function (value) {
		user = value;
	}
}

var box = new Box('Lee');
alert(box.getUser());
box.setUser('OOO');
alert(box.getUser());

function Box(value) {
	var user = value;				//˽�б���
	this.getUser = function () {
		return user;
	};
	this.setUser = function (value) {
		user = value;
	}
}

var box = new Box('Lee');
alert(box.getUser());

var box2 = new Box('kkk');
alert(box.getUser());

(function () {
	var user = ''				//˽�б���
	//function Box() {}		//���캯�������ں�����д���캯������֧�֣���Ϊ˽����������ĺ������ⲿ�޷�����
	Box = function (value) {//ȫ�֣����캯��
		user = value;
	};
	Box.prototype.getUser = function () {
		return user;
	};
	Box.prototype.setUser = function (value) {
		user = value;
	}
})();

var box = new Box('Lee');		//��һ��ʵ����
alert(box.getUser());
var box2 = new Box('kkk');		//�ڶ���ʵ����
alert(box.getUser());
box2.setUser('OOO');
alert(box.getUser());

//ʲô�е�����������Զֻʵ����һ�Σ���ʵ��������������������ʽ

var box = {					//��һ��ʵ�������޷��ڶ���ʵ��������ô���ǵ���
	user : 'Lee',
	run : function () {
		return '������..';
	}
};


var box = function () {
	var user = 'Lee';				//˽�б���
	function run() {				//˽�к���
		return '������...';	
	}
	return {
		publicGo : function () {		//���⹫���ӿڵ���Ȩ����
			return user + run();
		}
	};
}();

alert(box.publicGo());


var box = function () {
	var user = 'Lee';				//˽�б���
	function run() {				//˽�к���
		return '������...';	
	}
	var obj =  {
		publicGo : function () {		//���⹫���ӿڵ���Ȩ����
			return user + run();
		}
	};
	return obj;
}();

alert(box.publicGo());
*/


//֮ǰ���������Ƿ��ص�{} Ҳ����Object����ô���뷵���Զ�����أ�Box��Desk



function Desk() {}


var box = function () {
	var user = 'Lee';				//˽�б���
	function run() {				//˽�к���
		return '������...';	
	}
	var desk = new Desk();
	desk.publicGo = function () {
		return user + run();
	};
	return desk;
}();


alert(box.publicGo());




