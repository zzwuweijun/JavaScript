




/*
//ԭ��
function Box() {}			//���캯����������ʲô��û�У���������У�����ʵ�����ԣ�ʵ������

Box.prototype.name = 'Lee';				//ԭ������
Box.prototype.age = 100;					//ԭ������
Box.prototype.run = function () {		//ԭ�ͷ���
	return this.name + this.age + '������...';
};

var box1 = new Box();

//alert(box.prototype);			//ʹ�ö���ʵ���޷����ʵ�prototype
//alert(box.__proto__);			//ʹ�ö���ʵ������prototype��ָ��
//alert(Box.prototype);			//ʹ�ù��캯����(������)����prototype

var box = new Box();
//alert(box.run());
alert(box.constructor == Box);



//��д��ԭ�Ͷ���
Box.prototype = {
	age : 200					//���ﲻ�ᱣ��֮ǰԭ�͵��κ���Ϣ�ˡ�
									//��ԭ����ԭ�Ͷ���͹��캯������ʵ��֮ǰ�Ĺ�ϵ�ж���
};


var box = new Box();
alert(box.run());


function Box() {}


//ʹ���������ķ�ʽ����ԭ�Ͷ�������{}���Ƕ�����Object��new Object���൱��{}
Box.prototype = {
	constructor : Box,			//ǿ��ָ��Box
	name : 'Lee', 
	age : 100,
	run : function () {
		return this.name + this.age + '������...';
	}
};


//��������
var box = [5,1,6,9,3,5,8,1];
alert(box.sort());


//�鿴sort�Ƿ���Arrayԭ�Ͷ�����ķ���
alert(Array.prototype.sort);
alert(String.prototype.substring);

//�����������͵Ĺ�����չ
String.prototype.addstring = function () {
	return this + '��������ˣ�';
};

var box = 'Lee';
alert(box.addstring());
*/























