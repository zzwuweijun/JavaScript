



/*
//ѭ���������������ȡֵ����

function box() {
	var arr = [];
	
	for (var i = 0; i < 5; i ++) {
		arr[i] = function () {					//arr[0] = 0��arr[1] = 1 .... arr[4]  = 4
			return i;
		};
	}
	
	//ѭ���Ѿ�ִ������ˣ�i������4++ = 5 ,��ô���վ���5
	
	return arr;
}

//alert(box()[0]);
var b = box();
//alert(b.length);
for (var i = 0; i < 5; i ++) {
	alert(b[i]());
}

//��0
function box() {
	var arr = [];
	
	for (var i = 0; i < 5; i ++) {
		arr[i] = i;
	}
	
	return arr;
}

var b = box();
for (var i = 0; i < 5; i ++) {
	alert(b[i]);
}

//��1
function box() {
	var arr = [];
	
	for (var i = 0; i < 5; i ++) {
		arr[i] = (function (num) {						//ͨ�����Ҽ�ʱִ����������
			return num;
		})(i);
	}
	
	return arr;
}

var b = box();
for (var i = 0; i < 5; i ++) {
	alert(b[i]);
}

//��2
function box() {
	var arr = [];
	
	for (var i = 0; i < 5; i ++) {
		arr[i] = (function (num) {
			//num��ʵ������	
			return function () {				//��Ϊ�հ����Խ�����פ�����ڴ��У�����һ�ڿε��ۼ���һ������
				return num;
			}
		})(i);
	}
	
	//�Ѿ�ִ������ˣ�numΪʲô����0,1,2,3,4
	
	return arr;
}

var b = box();
for (var i = 0; i < 5; i ++) {
	alert(b[i]());
}
var b = function () {
	alert('Lee');
}();


function box() {
	var arr = [];
	
	for (var i = 0; i < 5; i ++) {
		arr[i] = function (num) {
			return function () {				//��Ϊ�հ����Խ�����פ�����ڴ��У�����һ�ڿε��ۼ���һ������
				return num;
			}
		}(i);
	}
	
	//�Ѿ�ִ������ˣ�numΪʲô����0,1,2,3,4
	
	return arr;
}

var b = box();
for (var i = 0; i < 5; i ++) {
	alert(b[i]());
}


//����this����

var box = {
	getThis : function () {
		return function () {
			return this;
		}
	}
};


alert(box.getThis()());


var user = 'The Window';

var box = {
	user : 'The Box',
	getUser : function () {
		//�����������this��Box
		var that = this;
		return function () {
			//�����������this��window
			return that.user;
		}
	}
};

//alert(box.getUser()());
//����ð��
//alert(box.getUser().call(box));
alert(box.getUser()());
*/



function box() {
	var oDiv = document.getElementById('oDiv');
	var text = oDiv.innerHTML;
	oDiv.onclick = function () {
		alert(text);
	};
	oDiv = null;					//������ã��ȴ���������
	alert(oDiv);
}
box();











