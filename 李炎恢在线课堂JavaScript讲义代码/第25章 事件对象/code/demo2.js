



/*
	keydown����������������µ���˼���ǰ�����������
	keyup���ǵ����������������ǰ���Ȼ���ͷŴ���
	keypress���ǰ����ַ�����abc��123�������ַ���ʲô��shift,ctrl,alt�ȵȲ����ַ��ļ���Ч
	
	���룺�����ϵ��������
	�ַ����룺�����Ͽ���������ַ��ļ�
	
	���뷵�ص���ASCII��Сд��ĸ��Ӧ�ģ�����ֻ�Ƿ����Ǹ�����ֵ������ʶ��ĸ��Сд
	�������ַ��Ϻ��ַ������ASCII��һ�µġ�
	
	������Է���������ı��룬������ĸ�����ִ�Сд
	
	���������������ò�ƶ�����
	
	document.onkeydown = function (evt) {
		var e = evt || window.event;
		alert(e.keyCode);							//keyCode���ؼ���
	};
	
	�����keypress����keyCode������Firefox������������ַ�������0��
	Chrome֧��keypress����keyCode�����һ�֧�ִ�Сд
	IE֧��keypress����keyCode�����һ�֧�ִ�Сд
	
	��ͬ������ڣ����Ϸ��صļ���ֵ��һ�£�����õ�����Ҫ������
	
	
	charCode��ʹ��keypress������£�Firefox�᷵���ַ����̵ı��룬֧�ִ�Сд
	IE��Opera��֧��charCode�������
	
	һ������£����ǲ��ܷ��ַ����������ϴ���Ķ����ַ�����������
	
	window.onload = function () {
		document.onkeypress = function (evt) {
			alert(String.fromCharCode(getCharCode(evt)));							//charCode�����ַ�����
		};
	};

	//�����������֧���ַ�����
	function getCharCode(evt) {
		var e = evt || window.event;
		if (typeof e.charCode == 'number') {
			return e.charCode;
		} else {
			return e.keyCode;
		}
	}

	
function getTarget(evt) {
	var e = evt || window.event;
	return e.target || e.srcElement;
}

	document.onclick = function (evt) {
		alert(getTarget(evt));								//��������Ϳ��Եõ������DOMԪ�ض���
	};

*/


window.onload = function () {
	document.onclick = function () {
		alert('document');
	};
	document.documentElement.onclick = function () {
		alert('html');
	};
	document.body.onclick = function () {
		alert('body');
	};	
	document.getElementById('box').onclick = function () {
		alert('div');
	};	
	document.getElementsByTagName('input')[0].onclick = function (evt) {
		var e = evt || window.event;
		alert('input');
		//e.stopPropagation();					//W3Cȡ��ð��
		//alert(e.cancelBubble);
		e.cancelBubble = true;					//IEȡ��ð��
		//setStop(evt);
	};	
};


function setStop(evt) {
	
	(typeof e.stopPropagation == 'function') ? e.stopPropagation() : e.cancelBubble = true;
}





















