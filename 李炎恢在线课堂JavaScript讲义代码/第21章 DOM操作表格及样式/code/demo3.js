


/*
	box.id = 'pox';				//����ID֮�󣬾ͻḽ���Ǹ�ID����ʽ
	
	box.style.fontFamily = 'Arial';
	
	var pox = document.getElementById('pox');
	pox.style.color = 'white';
	
	pox.id = 'box';
	
	//��ô���������ֹ��������������Ӧ�������������Ե�
	
	�ǳ�������ͨ���任ID���ı�����CSS��ʽ
	
	
	
*/


window.onload = function () {
	
	var box = document.getElementById('box');

	//class���ã���ʵ�ǿ��Ե��ӵ�
	//box.className = 'bbb';
	//���ӵ���˼�ǣ������ʽ��ͬ����ô����һ���Ḳ��ǰ��һ���������ͬ�ͽ��е���Ч��
	
	
	//box.className = 'ccc';
	//box.className = 'aaa bbb ccc';		//��ôд���е����࣬
	
	//box.className = 'aaa bbb ccc ddd';	//�о��ر������ˣ�Խ��Խ����
	
	//box.className = 'aaa ccc ddd';			//�����鷳�ˣ�
	
	//��������Ǹ��������ԭ����������©�Ĵ��ţ�ɾ���Ǹ�����Ҫ��ԭ���Ķ����ţ��ر��ۣ��������״�
	
	
	//addClass('ccc');				//ԭ���ı������������
	//addClass('ddd');
	//box.className = 'ccc';	//������ǰ�ԭ������յ��������
	
	//addClass('aaa');
	
	//alert(box.className);
	//hasClass(box, 'aaaa');
	
	addClass(box, 'ccc');
	addClass(box, 'ddd');
	
	//box.className = 'eee';
	
	removeClass(box, 'bbb');
	removeClass(box, 'ddd');
};



//�ж�һ��class�Ƿ����
//����У�����true��û�з���false
//box.className���ַ���Ϊ'aaa bbb'
//element.className ��ʾ 'aaa bbb'
//match��������ʽ���һ������
//���element.className  'aaa bbb'������������ַ���'aaa'
//match���ǲ����ַ���'aaa bbb'�����Ƿ���/aaa/������У��Ͱ�����ַ�����
//element.classNameû��ccc����ô�ͷ���null
//ת���ɲ���ֵ
//���⣬���һ��aa��Ҳ�ܷ���true
//aa����aaa������������򲻾�ȷ
//new RegExp('(\\s|^)' + cName + '(\\s|$)')ͨ��������������ϸ�ȷ���ҵ���ָ����class


//���class�Ƿ����
function hasClass(element, cName) {
	return !!element.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'));
}


//���һ��class
function addClass(element, cName) {
	if (!hasClass(element, cName)) {
		element.className += ' ' + cName;
	}
}

//�Ƴ�һ��class
function removeClass(element, cName) {
	if (hasClass(element, cName)) {
		element.className = element.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ');
	}
}


















