

	var box = new Date(2007, 10, 15, 17, 22, 45, 15);
	alert(box);																	//Thu Nov 15 2007 17:22:45 GMT+0800，本身默认就调用toString方法
	alert('toString:' + box.toString());									//Thu Nov 15 2007 17:22:45 GMT+0800 
	alert('toLocaleString:' + box.toLocaleString());			//2007-11-15 17:22:45 PS谷歌返回的Thu Nov 15 2007 17:22:45 GMT+0800 本地化的格式
	alert('valueOf:' + box.valueOf());									//1195118565015返回日起的毫秒数

	var box = new Date(2007, 10, 15, 17, 22, 45, 15);
	alert(box.toDateString());  //以特定的格式显示星期几、月、日和年
	alert(box.toTimeString());	//以特定的格式显示时、分、秒和时区
	alert(box.toLocaleDateString());  //以特定地区格式显示星期几、月、日和年
	alert(box.toLocaleTimeString());   //以特定地区格式显示时、分、秒和时区
	alert(box.toUTCString());			//以特定的格式显示完整的UTC 日期。

	box.setTime(100);   //获取日期的毫秒数，和valueOf()返回一致
	alert(box.getTime());  //以毫秒数设置日期，会改变整个日期
	box.setFullYear(2009);  //设置四位年份，返回的是毫秒数
	alert(box.getFullYear()); //获取四位年份
	box.setMonth(5);	  //设置月份
	alert(box.getMonth());  
	var box = new Date();
	alert(box.getMonth() + 1);//获取月份，没指定月份，从0 开始算起
	alert(box.getMonth() + 1); //月份要加1才是最终的月份
	alert(box.getDate()); //获取日期
	alert(box.setDate(8)); //设置日期，返回毫秒数
	alert(box.getDay()); //返回星期几，0 表示星期日，6 表示星期六
	alert(box.setDay(2)); //设置星期几
	alert(box.getHours()); //返回时
	alert(box.setHours(12)); //设置时
	alert(box.getMinutes()); //返回分钟
	alert(box.setMinutes(22)); //设置分钟
	alert(box.getSeconds()); //返回秒数
	alert(box.setSeconds(44)); //设置秒数
	alert(box.getMilliseconds()); //返回毫秒数
	alert(box.setMilliseconds()); //设置毫秒数											
	box.setUTCFullYear(2008);
	alert(box.getUTCFullYear());
	alert(box.getUTCHours()); //东八区有8个小时的差距，所有getUTCHous和getHous相差8个小时
	var box = new Date(2007, 10, 15, 10, 22, 45, 15);
	alert(box.getTimezoneOffset()); //返回本地时间和UTC 时间相差的分钟数	
	var box = new Date();
	alert(box.getFullYear() + '-' + box.getMonth() + '-' + box.getDate() + ' ' + box.getHours() + ':' + box.getMinutes() + ':' + box.getSeconds());















