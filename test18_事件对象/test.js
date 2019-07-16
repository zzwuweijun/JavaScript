// ----------------------------事件对象（看图）
//this关键字和上下文

// event对象：如果是事件处理函数绑定的函数，浏览器会默认传递一个参数，这个参数就是event对象。
// 测试：
// document.onclick = function () {
//     alert(arguments.length);
// }

// document.onclick = function () {
//     // alert(arguments[0]);        // MouseEvent 鼠标对象
//     // alert(arguments[1]);        // undefined 说明只传递一个对象
// }

// // 使用参数得到事件对象
// document.onclick = function (ev) {
//     alert(ev);                       // MouseEvent 鼠标对象
// }

// 直接参数是W3c的做法，IE不兼容的方式，有自定义的方法
// document.onclick = function (ev) {
//     var ev = ev || window.event;        // W3c || IE
//     alert(ev);                       // MouseEvent 鼠标对象
// }


// ----------------------------鼠标事件（看图）
// 查看是按下的那个按钮（看图）
// document.onclick = function (ev) {
//     var ev = ev || window.event;
//     console.log(ev.button);
// }

// 使用浏览器的功能查看的更清楚，可以看到对应的对象都都有什么属性（看图）
// var box = document.getElementById("box");
// box.onclick = function (ev) {
//     var ev = ev || window.event;
//     console.log(ev.clientX, ev.clientY);
//     console.log(ev.screenX, ev.screenY)
// }
// box.ondblclick = function (ev) {
//     var ev = ev || window.event;
//     console.log(ev);
// }


// 修改键（看图）
// var box = document.getElementById("box");
// box.onclick = function (ev) {
//     var ev = ev || window.event;
//     console.log(ev.shiftKey, ev.altKey, ev.ctrlKey);
// }


// ----------------------------键盘事件（看图）
// 键码：键盘上所有的键
// 字符编码：键盘上可以输入的字符的键

// var box = document.getElementById("box2");
// box.onkeyup = function (ev) {
//     var ev = ev || window.event;
//     // console.log(ev.shiftKey, ev.altKey, ev.ctrlKey);
//     console.log(ev.keyCode);
// }

// box.onkeypress = function (ev) {
//     var ev = ev || window.event;
//     // console.log(ev.keyCode);
//     console.log(ev.charCode);
// }

// 转换成字符
// box.onkeypress = function (ev) {
//     var ev = ev || window.event;
//     // console.log(ev.keyCode);
//     console.log(String.fromCharCode(ev.charCode));
// }


// ----------------------------W3c与IE
// 鼠标点击得到对应的DOM元素对象
// document.onclick = function (ev) {
//     var e = ev || window.event;
//     console.log(e.target);
// }

// 事件流（看图）
document.onclick = function (ev) {
    console.log(ev);
}
document.documentElement.onclick = function (ev) {
    console.log(ev);
}
document.body.onclick = function (ev) {
    console.log(ev);
}
document.getElementById("box").onclick = function (ev) {
    console.log(ev);
}
document.getElementsByTagName("input")[0].onclick = function (ev) {
    var e = ev || window.event;
    console.log("input");
    e.stopPropagation();        // 取消冒泡
    // e.cancelBubble = true;        // IE取消冒泡
}
document.getElementsByTagName("input")[0].ondblclick = function (ev) {
    var e = ev || window.event;
    console.log(ev);
    e.stopPropagation();        // 取消冒泡
    // e.cancelBubble = true;        // IE取消冒泡
}





















































































































































































