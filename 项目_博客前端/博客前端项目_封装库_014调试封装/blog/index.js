

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
            //    锁屏
            screen.lock();
            /!*登录框的显示并中心化设置*!/
            login.show().center();
        }
    );
    // 退出登录框
    $("#login .close").click(
        function () {
            screen.unlock();
            login.hide();
        }
    );
    //    拖拽
    login.drag($("#login h2").first());
    // login.drag();
});

/*
window.onload = function () {
    // 个人中心*!/
    $().getClass("member").hover(function () {
        $(this).css("background", "url(images/arrow2.png) no-repeat 70px center");
        $().getClass("member_ul").show();
    }, function () {
        $(this).css("background", "url(images/arrow.png) no-repeat 70px center");
        $().getClass("member_ul").hide();
    });

   /!* //    登录框*!/
    var login = $().getId("login");
    var screen = $().getId("screen");
    // 改变浏览器的大小
    login.center().resize(
        function () {
            if (login.css("display") == "block") {
                screen.lock();
            }
        }
    );
    $().getClass("login").click(
        function () {
            //    锁屏
            screen.lock();
            /!*登录框的显示并中心化设置*!/
            login.show().center();
        }
    );
    $().getClass("close").click(
        function () {
            screen.unlock();
            login.hide();
        }
    );
    //    拖拽
    login.drag([$().getTagName('h2').getElement(0)]);
    // login.drag();


};
*/

