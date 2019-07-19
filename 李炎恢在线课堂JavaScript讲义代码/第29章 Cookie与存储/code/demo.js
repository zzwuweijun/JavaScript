




/*
	alert(typeof document.cookie);
	
	//向本地磁盘写入cookie
	document.cookie = 'user=李炎恢';
	alert(document.cookie);

	//PS：本地不存在域名，所以域就为空
	
	//编码
	document.cookie = 'user=' + encodeURIComponent('李炎恢');		//这个已经写入磁盘了，所以不要这句也可以获取cookie
	alert(decodeURIComponent(document.cookie));
	
	过期时间，就是到了这个时间点，就会自动清理cookie
	在会话结束时，就是关闭浏览器后就自动清理cookie了
	
	当火狐浏览器关闭后，火狐的cookie被删除了，
	但不影响其他浏览器的cookie，因为每个浏览器都各自保存了自己的cookie，不通用一个cookie
	
	var date = new Date();
	date.setDate((date.getDate() + 7));
	document.cookie = 'user=' + encodeURIComponent('李炎恢') + '; expires=' + date;	
	当过了这个时间点，那么cookie就被清理了
	设置为当前时间的之前时间，即可手工清理 cookie
	
	var date = new Date();
	date.setDate((date.getDate() - 1));		//删除cookie方法，真正的删掉了
	document.cookie = 'user=' + encodeURIComponent('李炎恢') + '; expires=' + date;
	
	alert(new Date(0));
	document.cookie = 'user=' + encodeURIComponent('李炎恢') + '; expires=' + new Date(0);
	
	
	path 路径限制，可以限制访问cookie的目录
	var path = '/E:/%E5%A4%87%E8%AF%BE%E7%AC%94%E8%AE%B0/JS1/29/demo';
	document.cookie = 'user=' + encodeURIComponent('李炎恢') + '; path=' + path;
	alert(decodeURIComponent(document.cookie));
	//如果不向磁盘写入cookie，我们还是可以获取cookie的
	
	domain 限制域名访问
	
	secure 指定必须通过https来通信访问
	仅限加密连接，安全性更好，任意类型的连接
	
	完整形式
	document.cookie = 'user=值; [expires=失效时间; path=路径访问; domain=域名访问; secure=安全的https限制通信]'
*/



	document.cookie = 'user=' + encodeURIComponent('李炎恢');
	alert(decodeURIComponent(document.cookie));




















