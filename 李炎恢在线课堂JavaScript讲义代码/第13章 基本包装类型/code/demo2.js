

/*
var box = 'Mr. Lee';
alert(box.length);					//����
alert(box.constructor);

var box = 'Mr. Lee';
//alert(box.charAt(1));				//r
//alert(box.charCodeAt(4));			//L�����ص���acssii��
//alert(box[1]);
//alert(box.concat(' is ', ' Teacher ', '!')); //�����ַ�������
//alert(box.slice(4, 6));				//Le
//alert(box.substring(4, 6));		//Le
//alert(box.substr(4,6));				//�ӵ��ĸ���ʼ��ѡ6��
//alert(box.substr(4,2));				//Le
//alert(box.slice(4));
//alert(box.substring(4));
//alert(box.substr(4));					//��������Lee

//alert(box.slice(-2));					//7+(-2)=5, ��5λ��ʼ��ee
//alert(box.substring(-2));			//��������ȫ���ַ�����Mr. Lee
//alert(box.substr(-2));				//7+(-2)=5, ��5λ��ʼ��ee

//alert(box.slice(2,-1));				//7+(-1)=6��(2,6)��. Le
//alert(box.slice(-2,-1));				//7+(-2)=5, 7+(-1)=6��(5,6)��e
//alert(box.substring(2,-1));			//��������Ǹ���ֱ��0��(2,0); ����ڶ��������ȵ�һ��С����ô�ڶ���������ǰ��(0,2)
//alert(box.substr(2, -1));			//�ڶ�����Ϊ����ֱ��0��(2,0)����

//alert(box.substr(-2));				//IE�������������ֵ��ȫ������
*/


var box = 'Mr. Lee is Lee a Lee a Lee';
//alert(box.indexOf('L'));				//���شӳ�ʼλ������L��һ�γ��ֵ�λ�ã�4
//alert(box.lastIndexOf('L'));		//���ش�ĩβλ������L��һ�γ��ֵ�λ�ã�11
//alert(box.indexOf('L',5));			//�ӵ�5��λ�ÿ�ʼ����L��һ�γ��ֵ�λ�ã�11
//alert(box.lastIndexOf('L',5));		//�ӵ�5��λ�ÿ�ʼ��ǰ����L��һ�γ��ֵ�λ�ã�4
//alert(box.indexOf(','));				//�Ҳ���������-1

var boxarr = [];
var pos = box.indexOf('L');
while (pos > -1) {
	boxarr.push(pos);
	pos = box.indexOf('L', pos + 1);
}
alert(boxarr);























