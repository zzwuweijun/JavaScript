$(function () {
    // 个人中心*!/
    $("#header .member").hover(function () {
        $(this).css("background", "url(images/arrow2.png) no-repeat 70px center");
        $("#header .member_ul").show();
    }, function () {
        $(this).css("background", "url(images/arrow.png) no-repeat 70px center");
        $("#header .member_ul").hide();
    });

    // /!* //    登录框*!/
    var login = $("#login");
    var screen = $("#screen");
    // 改变浏览器的大小
    login.center().resize(
        function () {
            if (login.css("display") == "block") {
                screen.lock();
            }
            login.center();
        }
    );
    // 弹出登录框
    $("#header .login").click(
        function () {
            //    锁屏加动画
            screen.lock().animate({
                attr: "o",
                target: 30
            });
            /!*登录框的显示并中心化设置*!/
            login.show().center();
        }
    );
    // 退出登录框
    $("#login .close").click(
        function () {
            screen.animate({
                attr: "o",
                target: 10,
                fn: function () {
                    screen.unlock();
                }
            });
            login.hide();
        }
    );
    //    拖拽
    login.drag($("#login h2").first());
    // login.drag();

    //百度分享初始化位置
    $('#share').css('top', (getInner().height - parseInt(getStyle($('#share').first(), 'height'))) / 2 + 'px');

    //百度分享收缩效果
    $('#share').hover(function () {
        $(this).animate({
            attr: 'x',
            target: 0,
            // t:10
        });
    }, function () {
        $(this).animate({
            attr: 'x',
            target: -215,
            t: 10
        });
    });
});


