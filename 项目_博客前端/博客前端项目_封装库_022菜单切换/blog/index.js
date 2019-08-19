$(function () {
    /*------------------------------ 个人中心 -------------------------------------*/
    $("#header .member").hover(function () {
        $(this).css("background", "url(images/arrow2.png) no-repeat 70px center");
        $("#header .member_ul").show().animate({
            mul:{
                h:135,
                o:100
            }
        });
    }, function () {
        $(this).css("background", "url(images/arrow.png) no-repeat 70px center");
        $("#header .member_ul").animate({
            mul:{
                h:0,
                o:0
            },
            fn:function(){$("#header .member_ul").hide()}
        });
    });

    /*------------------------------ 登录框 -------------------------------------*/
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
            // /!*登录框的显示并中心化设置*!/
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

    /*------------------------------ 百度分享 -------------------------------------*/
    //百度分享初始化位置
    var share = $('#share');
    share.css('top', (getInner().height - parseInt(getStyle(share.first(), 'height'))) / 2 + 'px');

    addEvent(window, 'scroll', function () {
        share.animate({
            t:20,
            mul:{
                y: getScroll().top + (getInner().height - parseInt(getStyle(share.first(), 'height'))) / 2
            },
            fn:function () {
                share.animate({
                    mul:{
                        x: -215
                    },
                })
            }
        });
    });
    //百度分享收缩效果
    share.hover(function () {
        $(this).animate({
            attr: 'x',
            target: 0
        });
    }, function () {
        $(this).animate({
            attr: 'x',
            target: -215,
            t: 10
        });
    });

    /*------------------------------ 滑动导航 -------------------------------------*/
    $('#nav .about li').hover(function () {
        var target = $(this).first().offsetLeft;
        $('#nav .nav_bg').animate({
            attr : 'x',
            target : target + 20,
            t : 30,
            step : 10,
            fn : function () {
                $('#nav .white').animate({
                    attr : 'x',
                    target : -target,
                    t:10
                });
            }
        });
    }, function () {
        // $('#nav .nav_bg').animate({
        //     attr : 'x',
        //     target : 20,
        //     t : 30,
        //     step : 10,
        //     fn : function () {
        //         $('#nav .white').animate({
        //             attr : 'x',
        //             target : 0
        //         });
        //     }
        // });
    });

    /*------------------------------ 菜单切换 -------------------------------------*/
    //左侧菜单
    $('#sidebar h2').toggle(function () {
        $(this).next().animate({
            mul : {
                h : 0,
                o : 0
            }
        });
    }, function () {
        $(this).next().animate({
            mul : {
                h : 150,
                o : 100
            }
        });
    });

    /*------------------------------ 测试 -------------------------------------*/
    $("#test").toggle(function () {
        $(this).css("background", "#eee").html("222");
    },function(){
        $(this).css("background", "#fe3").html("qqq");
    })

});


