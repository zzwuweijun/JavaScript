
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
	var screen = $().getId('screen');
	login.center(350, 250).resize(function () {
		if (login.css('display') == 'block') {
			screen.lock();
		}
	});
	$().getClass('login').click(function () {
		login.center(350, 250);
		login.css('display', 'block');
		screen.lock();
	});
	$().getClass('close').click(function () {
		login.css('display', 'none');
		screen.unlock();
	});
	
	//拖拽
	login.drag();
	
	//var oDiv = document.getElementById('login');
	
	//拖拽流程：
	//1.先点下去
	//2.在点下的物体被选中，进行move移动
	//3.抬起鼠标，停止移动
	//点击某个物体，用oDiv即可，move和up是全局区域，也就是整个文档通用，应该用document


	

	
};
















