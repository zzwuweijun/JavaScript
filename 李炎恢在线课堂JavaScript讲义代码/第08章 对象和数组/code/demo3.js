



/*
var box = ['���׻�', 28, '�γ�', new Date()];
alert(box);
alert(box.toString());
alert(box.valueOf());
alert(box.toLocaleString());			//���ظ�ʽ�����ַ���

var box = ['���׻�', 28, '�γ�'];
alert(typeof box.join('|'));							//�������й��󷵻ذ�|�ָ���ַ���
alert(typeof box);										//ԭ����û���κα仯�����ͻ���object


var box = ['���׻�', 28, '�γ�'];
alert(box.push('��������','����'));					//������ĩβ�����N��Ԫ�أ��������������³���
alert(box);
alert(box.pop());										//�Ƴ���������Ԫ�أ����ҷ����Ƴ���Ԫ��
alert(box);

var box = ['���׻�', 28, '�γ�'];
alert(box.push('��������'));	
alert(box);
alert(box.shift());										//�Ƴ����鿪ͷ��һ��Ԫ�أ����ҷ������Ԫ��
alert(box);


var box = ['���׻�', 28, '�γ�'];
alert(box.unshift('����'));							//������ǰ�����һ��Ԫ�أ����ҷ������µĳ���
alert(box);


var box = [1,2,3,4,5];
alert(typeof box.reverse());						//����ִ�к󷵻�һ������������
alert(typeof box);										//ԭ����Ҳ�������ˡ�

var box = [4,1,6,2,7,3,9];
alert(box.sort());										//��С��������
alert(box);

function compare(value1,value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}


var box = [0,1,5,10,15];
alert(box.sort(compare));
alert(box.reverse());

var box = ['���׻�', 28, '�γ�'];
var box2 = box.concat('��������');
alert(box2);
alert(box);

var box = ['���׻�', 28, '�γ�'];
var box2 = box.slice(1);
alert(box2);

var box = ['���׻�', 28, '�γ�','��������','����'];
var box2 = box.slice(1,3);				//���ﲻ�Ǵӵ�1��λ��ȡ3��
alert(box2);										//���Ǵӵ�1��λ��ȡ����3��λ��

var box = ['���׻�', 28, '�γ�'];
var box2 = box.splice(0,2);			//�����ʾ�ӵ�0��λ��ȡ2����
alert(box2);									//�����Ǵӵ�0��λ��ȡ����2��λ��

var box = ['���׻�', 28, '�γ�'];
var box2 = box.splice(0,2);			//�����ʾ�ӵ�0��λ��ȡ2����
alert(box2);									//�����Ǵӵ�0��λ��ȡ����2��λ��
alert(box);


var box = ['���׻�', 28, '�γ�'];
var box2 = box.splice(1,0,'����','��������');		//�ӵ�1����������Ԫ�أ�0��ʾ��ɾ��
alert(box2);
alert(box);
*/

var box = ['���׻�', 28, '�γ�'];			//�滻
var box2 = box.splice(1,1,100);
alert(box2);
alert(box);
























