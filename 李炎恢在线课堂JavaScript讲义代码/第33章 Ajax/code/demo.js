


function createXHR() {
	if (typeof XMLHttpRequest != 'undefined') {
		return new XMLHttpRequest();
	} else if (typeof ActiveXObject != 'undefined') {
		var version = [
									'MSXML2.XMLHttp.6.0',
									'MSXML2.XMLHttp.3.0',
									'MSXML2.XMLHttp'
		];
		for (var i = 0; version.length; i ++) {
			try {
				return new ActiveXObject(version[i]);
			} catch (e) {
				//跳过
			}	
		}
	} else {
		throw new Error('您的系统或浏览器不支持XHR对象！');
	}
}


addEvent(document, 'click', function () {
	var xhr = createXHR();						//创建XHR对象
	xhr.open('get', 'demo.php?rand=' + Math.random(), false);	//准备发送请求，以get方式请求，url是demo.php，同步
	xhr.send(null);									//发送请求，get不需要数据提交，则填写为null;
	if (xhr.status == 200) {
		alert(xhr.responseText);					//打印服务器端返回回来的数据
	} else {
		alert('获取数据错误！错误代号：' + xhr.status + '，错误信息：' + xhr.statusText);
	}
});





//PS：如果没有向服务器端发送,firebug无发送提示，如果有send()方法，则firebug会提示已发送
//PS：通过点击事件，不断的向服务器发送请求，然后服务器会时时的返回最新的数据，就是Ajax功能
//PS：IE浏览器第一次会向服务器端请求，获取最新数据，而第二次它就默认获取的缓存数据，导致数据不是最新的
//PS：怎么处理缓存？可以使用JS随机字符串























