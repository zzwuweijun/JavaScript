


/*
var box = new Array();							//����һ�����飬������
alert(typeof box);									//��������object����


var box = new Array('���׻�', 28, '�γ�');	//����һ�����飬������������Ԫ��
//alert(box);
alert(box[0]);

var box = new Array(10);						//�������飬����10��Ԫ�أ����������֣�������1λ
box[3] = '���׻�';
box[5] = '�γ�';
alert(box);

var box = new Array('�γ�');
alert(box);

var box = Array();
alert(typeof box);

var box = [];												//�������ķ�ʽ��������
alert(typeof box);

var box = ['���׻�', 28, '�γ�'];	//�������ķ�ʽ�������飬���ҷ�����Ԫ��
alert(box);

var box = [1,2,];									//����Ķ��Ż���IE��ȡ��������������
alert(box.length);

var box = [,,,];											//������
alert(box.length);

var box = ['���׻�', 28, '�γ�'];	
box[1] = 100;
box[4] = '��������';
alert(box);

var box = [];	
box['name'] = '���׻�';
box['age'] = 28;
alert(box['name']);					//������ַ����±꣬���������������ϣ���Ҫ���������


var box = [];	
box[0] = '���׻�';
box[1] = 28;
alert(box);							//����������±꣬�ͻ������������ֳ���


var box = ['���׻�', 28, '�γ�'];	
box.length = 10;					//ǿ����Ԫ����
alert(box.length);				
alert(box);							//�Զ�����չ����

var box = ['���׻�', 28, '�γ�'];	
box[3] = '����';
alert(box);

var box  = ['���׻�', 28, '�γ�'];	
box[box.length] = '����';			//ʹ��.length������һ���±�ֵ
alert(box);
*/


var box = [
					{
						name : '���׻�',
						age : 28
					},
					[3,4,6,'����',new Object()],
					'��������',
					25+25,
					new Array(1,2,3)
];
alert(box);
alert(box[0]['name']);



















