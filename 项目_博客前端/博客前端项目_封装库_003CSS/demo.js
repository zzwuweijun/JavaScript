/*
连缀功能
alert(Base_.getId("box").innerHTML).css("color", "red").css("background","black").html("pox").click(function () {
        alert("a");
    });

    Base是一个基础库的核心对象
    Base_.getId("box")返回的是一个ｄｉｖＥｌｅｍｅｎｔ对象，曾格格对象是没有ｃｓｓ等方法的
    将Base.getId("box")返回改成Base既可以
    Base_.getId("box").innerHTML).css("color", "red")也返回Ｂａｓｅ对象，
    所有方法的返回都是Base对象



   在Base对象中，添加ｃｓｓ方法，ｈｔｍｌ方法，click方法等
* */

window.onload = function (ev) {
    // alert($().getId("box").innerHtml());
    // alert($().getTagName("p").elements.length);
    // $().getTagName("p").css("color", "red");
    // $().getTagName("p").html("color").click(function(){
    //     alert("a");
    // }).css("color", "blue");
    // alert($().getTagName("p").css("color", "red").html());
    // alert($().getTagName("p").css("color"));
    // alert($().getId("box").css("color"));
    // alert($().getClass("red").css("color"));
    // alert($().getClass("red").getElement(1).css("color", "black"));
    // $().getClass("red","bbb").css("color", "#4aa45d");

    // 博客前端项目_003封装库--CSS下
    // $().getId("box2").css("color", "#4aa45d");
    // $().getId("pox").css("color", "red");
    // $().getId("box2").addClass("a").addClass("b").addClass("c").removeClass("a");
    // $().getTagName("p").addClass("b").addClass("a");
    // $().getTagName("p").getElement(2).addClass("b").addClass("a");
    // $().addRule(0);
    // $().addRule(0, ".red", "background-color:blue;", 0);
    // $().addRule(0, "#pox", "background-color:blue;", 0);
    // $().removeRule(0, 1)






}











































