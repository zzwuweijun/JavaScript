



/*
//����ʱ��
function setCookieDate(day) {			//����һ�����������紫��7����7���ʧЧ
	var date = null;
	if (typeof day == 'number' && day > 0) {
		date = new Date();
		date.setDate(date.getDate() + day);
	} else {
		throw new Error('�����ݵ��������Ϸ��������������Ҵ���0');
	}
	return date.toGMTString();
}


addEvent(window, 'load', function () {
	var box = document.getElementById('box');
	//box.setAttribute('name', 'Lee');		//�������/ֵ��
	//box.expires = setCookieDate(7);
	//box.save('user');							//�൱�� cookie��
	
	//box.removeAttribute('name');
	//box.save('user');
	
	box.load('user');								//�൱�ڼ��� cookie
	alert(box.getAttribute('name'));
});


//PS��ȥ����ʱ�䣬�������ñ��棬�Ǳ�����IEcookie�ļ������
*/


/*
sessionStorage.setItem('name', 'Lee');

sessionStorage.removeItem('name');

alert(sessionStorage.getItem('name'));

//sessionStorage.bbb = 'Lee';
sessionStorage.removeItem('bbb');
alert(sessionStorage.bbb);

*/

alert(localStorage);
alert(globalStorage);




















