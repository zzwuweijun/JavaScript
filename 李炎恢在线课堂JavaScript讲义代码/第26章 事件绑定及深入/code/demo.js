



/*
//��ͳ��
window.onload = function () {
	var box = document.getElementById('box');
	box.onclick = function () {
		alert('Lee');
	};
};


window.onload = function () {
	alert('Lee');
};

window.onload = function () {
	alert('Mr.Lee');
};


//���һ��ҳ������������JS�����ң���һ��JS�ǵ�һ�����򿪷��ģ��ڶ���JS�ǵڶ�������Ա������
//��һ��window.onload�������ˡ�


//alert(window.onload);			//һ��ʼû��ע��window.onload����ô����null


window.onload = function () {
	//alert('Lee');
};

alert(window.onload);			//����Ѿ���window.onload����ô���ӡ����

window.onload = function () {
	//alert('Mr.Lee');
};

//alert(typeof window.onload);		//һ��ʼû��window.onload���ɰ�����ʾundefined���°���ʾobject���ȸ��IE�����Ҳ��object

window.onload = function () {
	//alert('Lee');
};

alert(typeof window.onload);			//�����window.onload�����������������ʾfunction

window.onload = function () {
	//alert('Mr.Lee');
};

window.onload = function () {
	alert('Lee');
};

if (typeof window.onload == 'function') {
	var saved = null;			//������һ���¼�����
	saved = window.onload;
}

//saved����window.onload��saved()�൱��window.onload()������window.onload()����ִ�е�
//����saved()�൱��window.onload = function () {}

window.onload = function () {
	if (saved) saved();						//ִ����һ���¼�.window.onload = function () {}
	alert('Mr.Lee');				//ִ�б��¼�
};


//�¼��л���
window.onload = function () {
	var box = document.getElementById('box');
	//box.onclick = function () {				//������
	//	alert('Lee');
	//};
	box.onclick = function () {
		alert('Lee');											//ֻ��ִ�е�һ�Σ��ڶ����ֱ�������
		toBlue.call(this);									//ͨ����������ִ��ĳ��һ��������ô�����this�ʹ���� window������ͨ��call������this
	};
};


function toRed() {
	this.className = 'red';
	this.onclick = toBlue;
}

function toBlue() {
	this.className = 'blue';
	this.onclick = toRed;									//�����onclick�ְ�alert('Lee')���ǵ���
}




//���toBlue()����box.onclick�������this����box�������ȫ��ִ����ô��this��ʾwindow


//�����������ʹ�������������ɣ�window.onload �൱��window['onload'];

window['onload'] = function () {
	alert('Lee');
};


//����¼�����
//obj�൱��window
//type�൱��onload
//fn�൱��function () {}
function addEvent(obj, type, fn) {
	//���ڱ�����һ���¼�
	var saved = null;
	//�ж��¼��Ƿ����
	if (typeof obj['on' + type] == 'function') {
		saved = obj['on' + type];		//������һ���¼�
	}
	//ִ���¼�
	obj['on' + type] = function () {
		if (saved) saved();
		fn();
	};
	
}


addEvent(window, 'load', function () {
	alert('Lee');
});


addEvent(window, 'load', function () {
	alert('Mr.Lee');
});

addEvent(window, 'load', function () {
	alert('Miss.Lee');
});
*/




//����¼�����
//obj�൱��window
//type�൱��onload
//fn�൱��function () {}
function addEvent(obj, type, fn) {
	//���ڱ�����һ���¼�
	var saved = null;
	//�ж��¼��Ƿ����
	if (typeof obj['on' + type] == 'function') {
		saved = obj['on' + type];		//������һ���¼�
	}
	//ִ���¼�
	obj['on' + type] = function () {
		if (saved) saved();
		fn.call(this);							//��this���ݹ�ȥ
	};
	
}


addEvent(window, 'load', init);		
addEvent(window, 'load', init);		//�ڶ���Ӧ����ʧ���ע���

function init() {
	alert('Lee');
}



//����ͣ���л���ʱ�������ͻȻ���������ұ���too much recursion��̫��ĵݹ�
//��Ϊ������̫��ı�����¼���
//�������������������¼����������Ƴ���

//�Ƴ��¼�����
function removeEvent(obj, type) {
	if (obj['on' + type]) obj['on' + type] = null;
}

addEvent(window, 'load', function () {
	var box = document.getElementById('box');
	addEvent(box, 'click', function () {				//Ŀ�Ĵﵽ��ÿ�ζ�ִ�У���Ӱ��
		alert('Lee');
	});
	addEvent(box, 'click', toBlue);						//thisû�д��ݹ�ȥ
});


function toRed() {
	this.className = 'red';
	removeEvent(this, 'click');
	addEvent(this, 'click', toBlue);	
}

function toBlue() {
	this.className = 'blue';
	removeEvent(this, 'click');
	addEvent(this, 'click', toRed);									
}















