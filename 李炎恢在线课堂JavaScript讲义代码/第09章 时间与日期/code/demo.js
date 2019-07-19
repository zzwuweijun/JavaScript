
	var box = new Date();			//创建了一个日期对象，构造方法里面可以传参数，指定时间，如果没有传，就是默认当前的时间
	alert(box);			//输出：wed(星期三) Nov 30 2011 22.51.54  GMT+0800  GMT格林尼治时间+东0800八区。不同浏览器显示不同
	
	//6/13/2011格式，如果想输出指定的日期，那么把Date.parse()传入Date 构造方法里
	alert(Date.parse('4/12/2007'));			//返回的是一个毫秒数1176307200000
	var box = new Date(Date.parse('4/12/2007'));	//把毫秒数转换成看的懂的时间
	alert(box);		//Thu Apr 12 2007 00:00:00 GMT+0800
	var box = new Date(1176307200000);		//直接放日期的毫秒数也是可以的。
	alert(box);
	var box = new Date('4/12/2007');			//默认自动后台调用Data.parse()
	alert(box);
	alert(Date.parse());		//没有传入日期格式参数，返回NaN
	var box = new Date('msdfkl 21123');	//乱写的日期格式，会返回Invalid Date(无效的日期)。
	alert(box);
	var box = new Date('May 25, 2007');		//第二种写法'英文月名日, 年'，如May 25, 2004
	alert(box);
	var box = new Date('Thu Apr 12 2007 22:22:22 GMT+0800');	//第三种写法：英文星期几英文月名日年时:分:秒时区
	alert(box);


	//1月没有32号，只有31号，多出来的，可以进到2月。火狐2月1号向后增加+1。谷歌Invalid Date(无效的日期)。IE2月1号。Opera是1月30号   向前减少-1
	var box = new Date('January 32, 2007');
	alert(box);


	alert(Date.UTC());		//必须传入年份和月份，不传，就各种错误，负值，有NaN
	alert(Date.UTC(2007,10));	//返回毫秒数
	//UTC世界协调时间，他会按照他的区域基准来计算
	var box = new Date(Date.UTC(2007, 10, 15, 17, 22, 45, 15));
	alert(box);
	//如果不加Date.UTC，那么就会返回本地的时间
	var box = new Date(2007, 10, 15, 17, 22, 45, 15);
	alert(box);
























