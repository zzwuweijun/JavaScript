/*
var box = function () {
    alert("lee");
};
addEvent(window, "load", box);
addEvent(window, "load", box);
addEvent(window, "load", box);
addEvent(window, "load", box);
// alert(typeof window.addEventListener);

```````````
 var box = document.getElementById("button");
    var box2 = document.getElementById("button2");
    var fun = function () {
        alert("lee");
    };
    addEvent(box, "click", fun);
    addEvent(box2, "click", function () {
        removeEvent(box, "click",fun);
    });
* */

window.onload = function (ev) {
    var box = document.getElementById("button");
    var box2 = document.getElementById("button2");
    var fun = function () {
        alert("lee");
    };
    addEvent(box, "click", fun);
    addEvent(box2, "click", function () {
        removeEvent(box, "click",fun);
    });





    var aa = document.getElementById("aa");
    addEvent(aa, "click", function (e) {
        e.preventDefault();
    })







}







































