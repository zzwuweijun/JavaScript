



/*
//过期时间
function setCookieDate(day) {			//传递一个天数，比如传递7，就7天后失效
	var date = null;
	if (typeof day == 'number' && day > 0) {
		date = new Date();
		date.setDate(date.getDate() + day);
	} else {
		throw new Error('您传递的天数不合法！必须是数字且大于0');
	}
	return date.toGMTString();
}


addEvent(window, 'load', function () {
	var box = document.getElementById('box');
	//box.setAttribute('name', 'Lee');		//这个是名/值对
	//box.expires = setCookieDate(7);
	//box.save('user');							//相当于 cookie名
	
	//box.removeAttribute('name');
	//box.save('user');
	
	box.load('user');								//相当于加载 cookie
	alert(box.getAttribute('name'));
});


//PS不去设置时间，就是永久保存，是保存在IEcookie文件夹里的
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




















