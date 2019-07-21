/*
window.onload = function (ev) {
    alert($("box").innerText);
}

     alert(Base_.$("box").innerHTML);
    alert(Base_.$$("sex")[0].value);
    alert(Base_.$$$("p")[0].innerHTML);



* */

window.onload = function (ev) {
    alert(Base.getId("box").innerHTML);
    alert(Base.getName("sex")[0].value);
    alert(Base.getTagName("p")[0].innerHTML);
}











































