




/*
//���캯��
function Box(name, age) {
	this.name = name;										//ʵ������
	this.age = age;												
	this.run = function () {									//ʵ������
		return this.name + this.age + '������...';
	};
}


var box1 = new Box();
var box2 = new Box();
//alert(box1.name);
//alert(box1.run());

//�����ʵ����������ͬ��ʵ���������ǵķ�����ַ�ǲ�һ���ģ���Ψһ��
//�����ԭ�ͷ�������ô���ǵ�ַ�ǹ���ģ���Ҷ���һ��
alert(box1.run == box2.run);

alert(box1.prototype);			//���������һ�����󣬷��ʲ���
alert(box1.__proto__);			//���������һ��ָ��ָ��prototypeԭ�Ͷ���


alert(box1.constructor);			//�������ԣ����Ի�ȡ���캯������
												//�����Ǳ�ԭ��ָ�붨λ��Ȼ��õ����캯������
												//��ʵ���Ƕ���ʵ����Ӧ��ԭ�Ͷ��������
												
//�ж�һ������ʵ��(��������)�ǲ���ָ����ԭ�Ͷ��󣬻����ϣ�ֻҪʵ�����ˣ����Զ�ָ���
alert(Box.prototype.isPrototypeOf(box1));

var obj = new Object();
alert(Box.prototype.isPrototypeOf(obj));

var box2 = new Box();
alert(box2.name);								//ʵ�����Բ��Ṳ������box2���ʲ���ʵ�����ԣ���ֻ�ܷ���ԭ��


box1.name = 'Jack';							//ʵ�����ԣ���û����дԭ������
alert(box1.name);								//�ͽ�ԭ��
delete box1.name;							//ɾ��ʵ���е�����
//delete Box.prototype.name;			//ɾ��ԭ���е�����
//Box.prototype.name = 'KK';			//����ԭ���е�����
alert(box1.name);


box1.name = 'Kac';	
alert(box1.hasOwnProperty('name'));	//�ж�ʵ�����Ƿ����ָ������

alert('name' in box1);			//����ʵ�����Ի�ԭ�������Ƿ���ڣ�ֻҪ�оͷ���true�����߶�û�У�����false


box1.name = '';
alert(isProperty(box1, 'name'));


//�ж�ֻ��ԭ���������ԣ�
function isProperty(object, property) {
	return !object.hasOwnProperty(property) && (property in object)
}
*/



//ԭ��
function Box() {}			//���캯����������ʲô��û�У���������У�����ʵ�����ԣ�ʵ������

Box.prototype.name = 'Lee';				//ԭ������
Box.prototype.age = 100;					//ԭ������
Box.prototype.run = function () {		//ԭ�ͷ���
	return this.name + this.age + '������...';
};

var box1 = new Box();


















