

/*
var box = 10;

do {								//�����У����жϵ�ѭ����
	alert(box);				//��ӡ1����ӡ2��3, 4 ,5
	box++;						//box = 2 ++ 3 4 5 6
} while (box <= 5);		//�ж�6 < = 5�������е�7��,�˳���
									//��while�ж�Ϊfalse��ʱ���˳�ѭ����
									//��while�ж�Ϊtrue��ʱ��ִ��ѭ��
									//�������һ��ʼ�����㣬���ٻ�ִ��һ��
									//�мǣ�ѭ������ж�Ҫ��ã���Ȼ���ܻ������ѭ��

var box = 10;
while (box <= 5) {		//���жϣ������е�ѭ����
	alert(box);
	box++;
}

for (var box = 1;box <= 5; box++) {		//��һ������������box=1
	alert(box);										//�ڶ������ж�box < = 5���������trueִ�е������������˳� 
}															//��������alert(box)�����box
															//���Ĳ���box++ ���� 2
															//���岽��ȥִ�еڶ���
var box = {								//�����������������name,age,height
	'name' : '���׻�',
	'age' : 28,
	'height' : 178
};

for (var x in box) {
	alert(x);
}

for (var box = 1; box <=10; box ++) {
	if (box == 5) break;
	document.write(box+'<br />');
}

for (var box = 1; box <=10; box ++) {
	if (box == 5) continue;
	document.write(box+'<br />');
}

var n = box.name;
var a = box.age;
var h = box.height;

alert(n+a+h);
*/


var box = {							
	'name' : '���׻�',
	'age' : 28,
	'height' : 178
};


with (box) {			//with(box)���Խ�box.��ʡ�Ե�
	var n = name;	//�����name�൱��box.name
	var a = age;
	var h = height;
}



alert(n+a+h);










