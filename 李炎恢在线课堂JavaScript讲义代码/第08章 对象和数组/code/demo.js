

/*
//���������ЩԪ��
//1.����(�ֶ�)
//2.����(����)


var box = new Object();							//����һ������
box.name = '���׻�';
box.age = 28;
alert(box.age);

var box = Object();									//new�ؼ���ʡ����
alert(box);


var box = {};											//��������ʽ�����Ķ���
alert(box);

var box = {											//�������������װ����
	name : '���׻�',
	age : 28
};
alert(box.name);

var box = {											//�������������װ����
	'name' : '���׻�',								//���Կ�����������������
	'age' : 28
};
alert(box.name);

var box = {};										//��������ʽ
box.name = '���׻�';							//��ͳ��ֵ��ʽ
alert(box.name);

var box = {											
	name : '���׻�',							
	age : 28
};
alert(box.name);
alert(box['name']);							//������ķ������


function objrun() {
	return '123';
}

//����=����

var box = new Object();							//����һ������
box.name = '���׻�';
box.age = 28;
box.run = objrun;										//�����е�С����
alert(box.run());								



var box = {											
	name : '���׻�',							
	age : 28,
	run : function () {								//��������
		return '123';
	}
};
alert(box.run());										//���÷���(����)�����û��Բ���ţ����ӡ����
	
															//��Բ���ţ��Ż��ӡ����ֵ

	var box = {											
	name : '���׻�'
};

alert(box.name);
delete box.name;			//ɾ������
alert(box.name);														


function box(name,age,height,address,love) {
	alert(name);
	alert(age);
}


box('���׻�',28,178,'�����γ�','����');
*/



function box(obj) {
	if (obj.name != undefined) alert(obj.name);
	if (obj.love != undefined) alert(obj.love);
	if (obj.age != undefined) alert(obj.age);
}




box({												//��������
	name : '���׻�',
	age : 28,
	height : 178,
	address : '�����γ�'
});


















