



/*
	try-catch������
	1.����ͨ���޸Ĵ������Ŵ�ģ�����Ҫʹ��try-catch
	2.��������������⣬����ͨ���ж�����������ж��Ƿ�֧��ĳ�����Ի򷽷����жϣ�����Ҫtry-catch
	
	���磬�޷��޸Ĵ��������£����ܻᷢ���������ʱ����try-catch�������ж���
	
	try {
		alert(innerWidth);			//W3C
	} catch (e) {
		alert(document.documentElement.clientWidth);			//IE
	}

	//PS��������ȷ��ʵ�ּ��������⣬���߼����ǲ���ȷ��
	//PS����ΪinnerWidth��֧�ֵ�����������ܲ�һ����IE
	
try {
	new 10;
} catch (e) {
	if (e instanceof TypeError) {
		throw new TypeError('���ʹ���ʵ����new��ʱ�򣬿��ܲ����˴���');
	} else {
		//alert(e);			//������Ϊ�����������������������ˣ���Ϊ������ˣ������˴�����ʾ
		throw new Error('δ֪����');
	}
}


//�׳�����˵�������Լ��޷����������Ҫ�Ѵ��󱬳�������

new 10;			//������Լ��׳��˴���

addEvent(window, 'error', function () {
	alert('�����������ˣ�');
});

new 10;

<img src="buy.gif" onerror="alert('ͼƬ����ʧ�ܣ�')" />

//��Ⱥ�ȫ��

alert(1 == '1');			//true����ȶԵ���ֵ�����Ͳ��ñȽ�
alert(1 === '1');			//false��ȫ�Ȼ���Ҫ�Ƚ�����

alert(1 == true);		//true��1����ʽת��Ϊ����ֵ,true == true
alert(1 === true);		//false��1��������ֵ��true�����ǲ���ֵ

PS�������Ͳ���ȵ�����£�����ʹ��ȫ�� ===

var box = 10;

if (box) {					//10ת���ɲ���ֵ��true��0ת��Ϊ����ֵΪfalse
	alert(box);
}


//PS�����box����ֵ���ʹ�ӡ������ֵ

var box = 0;

if (typeof box == 'number') {					
	alert(box);
}


//PS��typeof box���ص������͵��ַ������ұ��أ�'number'��������ַ�������������Ⱦ͹��ˣ���Ϊ��ȱ�ȫ��Ҫ�죬��Ϊ����Ҫ�Ƚ�����
//PS��������һ���ģ���û�б�Ҫ��ȫ����


function getQuerystring(url) {
	if (typeof url == 'string') {
		var pos = url.indexOf('?');
		return pos;
	} else {
		return '�������ʹ���';
	}
}

//alert(getQuerystring('demo2.html?id=5'));
alert(getQuerystring('sdfdsf'));


function sortArray(arr) {
	if (typeof arr.sort == 'function') {		//��Ϊ������sort������ֻҪ�ж�sort�����Ƿ���ڣ��Ϳ���ȷ����������
		arr.sort();
		arr.reverse();
		return arr;
	} else {
		return '���ݳ���';
	}
}


var box = {
	sort : function () {
		
	}
};
alert(sortArray(box));

//PS�������ģ���������sort�����Ķ��󣬾����ƹ��ж�
//PS��typeof arr.sort == 'function'�жϻ��ᵼ����������,null��ģ��sort�����Ķ���


function sortArray(arr) {
	if (arr instanceof Array) {		
		arr.sort();
		arr.reverse();
		return arr;
	} else {
		return '���ݳ���';
	}
}


//var box = [3,5,1]
var box = null;
alert(sortArray(box));

*/



alert('?user=' + encodeURI('���׻�'));










