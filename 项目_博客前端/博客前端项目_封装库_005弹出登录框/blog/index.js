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
    $().getClass("login").click(
        function () {
            login.show().center().resize(
                /*登录框的中心化设置*/
                function () {
                    login.center();
                }
            );
        }
    );
    $().getClass("close").click(
        function () {
            login.hide();
        }
    )









































}

