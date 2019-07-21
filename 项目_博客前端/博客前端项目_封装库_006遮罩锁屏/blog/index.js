window.onload = function (ev) {
    // 个人中心
    $().getClass("member").hover(function () {
        $(this).css("background", "url(images/arrow2.png) no-repeat 70px center");
        $().getClass("member_ul").show();
    }, function () {
        $(this).css("background", "url(images/arrow.png) no-repeat 70px center");
        $().getClass("member_ul").hide();
    });

    //    登录框
    var login = $().getId("login");
    var screen = $().getId("screen");
    // 改变浏览器的大小
    $().resize(
        function () {
            login.center();
            if (login.css("display") == "block") {
                screen.lock();
            }
        }
    );
    $().getClass("login").click(
        function () {
            //    锁屏
            screen.lock();
            /*登录框的显示并中心化设置*/
            login.show().center();
        }
    );
    $().getClass("close").click(
        function () {
            screen.unlock();
            login.hide();
        }
    )


}

