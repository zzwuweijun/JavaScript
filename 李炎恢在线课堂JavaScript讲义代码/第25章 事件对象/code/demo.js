


/*
	document.onclick = function () {
		alert(this);								//HTMLDocument��������document
	};
	
	window.onload = function () {
		//document.onclick = box;				//��Ϊbox()������onclick���ˣ����������this����document
	};


	function box() {
		alert(this);									//HTMLDocument��������document		
	};


	box();												//object Window���������ȫ�ַ�Χ����box()����ôthis����window



function box() {
	alert(arguments.length);				//��ȡ����������
};

box()

document.onclick = function () {
	alert(arguments.length);			//������¼��������󶨵ĺ������������Ĭ�ϴ���һ�������������������event����
};		

	//alert(arguments[0]);				//MouseEvent������¼�����
	alert(arguments[0]);					//KeyboardEvent�������¼�����

	
	document.onclick = function (evt) {
		var e = evt || window.event;		//W3C || IE
		alert(e);
	};		
	
//PS:window.event�������IE��֧�ֵģ�ChromeҲ��֧�ֵģ�
//PS:ChromeҲ��֧��W3C��
//PS:���˵W3C��IE�Ķ�֧�ֵĻ�����ô����W3CΪ׼


//���������갴ť
function getButton(evt) {
	var e = evt || window.event;	
	if (evt) {									//���дǰ��
		return e.button;
	} else if (window.event) {
		switch (e.button) {
			case 1 : 
				return 0;
			case 4 : 
				return 1;
			case 2 : 
				return 2;
		}
	}
}

	document.onmousedown = function (evt) {
		if (getButton(evt) == 0) alert('���');
		if (getButton(evt) == 1) alert('�м�');
		if (getButton(evt) == 2) alert('�Ҽ�');
	};		
	
		alert(e.clientX ',' + e.clientY);		//����������
		//ChromeҪ��document.documentElement.scrollTop
		
		alert(e.screenX + ','+ e.screenY);	//��Ļ����
*/



window.onload = function () {
	document.ondblclick = function (evt) {
		alert(getKey(evt));
	};
};


function getKey(evt) {
	var e = evt || window.event;	
	var keys = [];
	
	if (e.shiftKey) keys.push('shift');
	if (e.ctrlKey) keys.push('ctrl');
	if (e.altKey) keys.push('alt');						//����+alt��360�Ŀ�ݼ���ͻ��	
	return keys;
}






















