

window.onload = function () {
	
	//个人中心
	$().getClass('member').hover(function () {
		$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
		$().getClass('member_ul').show();
	}, function () {
		$(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
		$().getClass('member_ul').hide();
	});
	
	//登录框
	var login = $().getId('login');
	login.center(350, 250).resize(function () {
		login.center(350, 250);
	});
	$().getClass('login').click(function () {
		login.css('display', 'block');
	});
	$().getClass('close').click(function () {
		login.css('display', 'none');
	});
	
	
	/*
	var top = (document.documentElement.clientHeight - 250) / 2;
	var left = (document.documentElement.clientWidth - 350) / 2;
	$().getId('login').css('top', top + 'px').css('left', left + 'px');
	
	window.onresize = function () {
		var top = (document.documentElement.clientHeight - 250) / 2;
		var left = (document.documentElement.clientWidth - 350) / 2;
		$().getId('login').css('top', top + 'px').css('left', left + 'px');
	}
	*/
};
















