



/*
function sum(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * sum(num-1);				//4 * 3 * 2 * 1 = 24 �׳ˣ��ݹ�
	}
}


alert(sum(4));


function box(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num-1);				//ʹ��arguments.callee����������ʵ�ֵݹ�
	}
}


alert(box(4));


//window��һ�����󣬶�����JS�������Ķ���������Χ�Ķ���


//alert(typeof window);		window�Ƕ��������Ƕ���window��ʾȫ��

alert(this);			//[object Window] thisĿǰ��ʾ����window����Ϊ��window�ķ�Χ��
alert(typeof this);	//��windowһģһ��������this����window

var color = '��ɫ��';			//����color����ȫ�ֱ������������������window������
//alert(window.color);			//�����Ѿ��ܺõ�˵��color��window�µ�����
alert(this.color);				//ͬ��

window.color = '��ɫ��';		//�൱�� var color = '��ɫ��';����������һ����


var box = {
	color : '��ɫ��',				//�����color��box�µ����ԣ�Ҳ���Ǿֲ�����
	sayColor : function() {
		alert(this.color);			//����this������ȷ�����Ǵ����box����
	}
};

alert(this.color);
box.sayColor();

window.color = '��ɫ��';

function sayColor() {
	alert(this.color);			//��������ִ�е�ʱ���Ƕ�̬�ģ���һ����window�£��ڶ�����box��
}

sayColor();						//�������sayColor����ʵ��Χ������window��

var box = {
	color : '��ɫ��'
};


box.sayColor = sayColor;	//��δ����൱��47��

box.sayColor();				//����ִ�е���box�����this.color

function box(name, age) {
	return name + age;
}

alert(box.length);


function box(num1, num2) {
	return num1 + num2;
}


function sum(num1, num2) {						//apply��call����ð������һ������
	return box.apply(this, [num1, num2]);		//this��ʾwindow������[]��ʾ���ݵĲ���
}

function sum2(num1, num2) {
	return box.apply(this, arguments);			//������Ե����鴫�ݣ�arguments
}

//alert(box(10,10));

//alert(sum(10,10));
alert(sum2(10,10));


function box(num1, num2) {
	return num1 + num2;
}

function sum(num1, num2) {
	return box.call(this, num1, num2);		//callֻ�Ǵ��ݲ�����ͬ��������applyһ��
}


alert(sum(10,10));
*/


var color = '��ɫ��';				//ȫ��

var box = {
	color : '��ɫ��'					//�ֲ�
};

function sayColor() {
	alert(this.color);				
}

//sayColor();							//ȫ��

//��call��ʵ�ֶ���ð�䣬ð��box�£�ð��window��
//sayColor.call(window);			//ð��window ��ɫ��
//sayColor.call(this);					//this����window
sayColor.call(box);					//ð��box�����������box�������棬����color������ɫ��





















