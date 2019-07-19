

$(function () {

	//��������
	$('#header .member').hover(function () {
		$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
		$('#header .member_ul').show().animate({
			attr : 'o',
			target : 100,
			t : 30,
			step : 10
		});
	}, function () {
		$(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
		$('#header .member_ul').animate({
			attr : 'o',
			target : 0,
			t : 30,
			step : 10,
			fn : function () {
				$('#header .member_ul').hide();
			}
		});
	});
	
	//��¼��
	var login = $('#login');
	var screen = $('#screen');
	login.center(350, 250).resize(function () {
		if (login.css('display') == 'block') {
			screen.lock();
		}
	});
	$('#header .login').click(function () {
		login.center(350, 250).css('display', 'block');
		screen.lock().animate({
			attr : 'o',
			target : 30,
			t : 30,
			step : 10
		});
	});
	$('#login .close').click(function () {
		login.css('display', 'none');
		//��ִ�н��䶯����������Ϻ���ִ�йر�unlock
		screen.animate({
			attr : 'o',
			target : 0,
			t : 30,
			step : 10,
			fn : function () {
				screen.unlock();
			}
		});
	});
	
	//test
	$('#test').click(function () {
		var _this = this;
		$(_this).animate({
			attr : 'w',
			target : 300,
			t : 30,
			step : 10,
			fn : function () {
				$(_this).animate({
					attr : 'h',
					target : 300,
					t : 30,
					step : 10,
					fn : function () {
						$(_this).animate({
							attr : 'o',
							target : 30,
							t : 30,
							step : 10
						});
					}
				});
			}
		});
	});
	
	//test1
	//$('.test1').ge(0).timer = null;
	//$('.test1').ge(1).timer = null;
	//$('.test1').ge(2).timer = null;
	
	$('.test1').hover(function () {
		$(this).animate({
			attr : 'w',
			target : 300,
			t : 30,
			step : 10
		});
	}, function () {
		$(this).animate({
			attr : 'w',
			target : 100,
			t : 30,
			step : 10
		});
	});
	
	
	//��ק
	login.drag($('#login h2').last());
	
	//�ٶȷ����ʼ��λ��
	$('#share').css('top', (getInner().height - parseInt(getStyle($('#share').first(), 'height'))) / 2 + 'px');
	
	//�ٶȷ�������Ч��
	$('#share').hover(function () {
		$(this).animate({
			attr : 'x',
			target : 0
		});
	}, function () {
		$(this).animate({
			attr : 'x',
			target : -211
		});
	});
});
















