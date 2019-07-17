
// --------------------------传统事件绑定的问题（看图）
// 覆盖问题
// window.onload = function () {
//     alert("lee");
// };
// window.onload = function () {       // 把上个事件给覆盖了
//     alert("Mr.Lee");
// };

// 解决方法：
// window.onload = function () {
//     alert("lee");
// };
// if(typeof window.onload){
//     var saved = null;
//     saved = window.onload;
// }
// window.onload = function () {
//     saved();            // 第一个window.onload
//     alert("Mr.Lee");    // 第二个window.onload
// };

// 事件切换器(看图）
// 问题:1有多个同名的事件，后面的会覆盖前面的事件、
// 问题:2



// --------------------------W3c事件处理函数（看图）
//----addEventListener(事件，方法， 冒泡或捕获)
//----removedEventListener(事件，方法， 冒泡或捕获)

// 覆盖问题，解决
// window.addEventListener("load", function(){
//     alert("Lee");
// }, false);
// window.addEventListener("load", function(){
//     alert("Mr.Lee");
// }, false);
// window.addEventListener("load", function(){
//     alert("Mriss.Lee");
// }, false);

//相同函数屏蔽的问题,解决
// window.addEventListener("load",box , false);
// window.addEventListener("load",box , false);
// window.addEventListener("load",box , false);
// function box(){
//     alert("Mriss.Lee");
// }

//是否可以传递thism,解决
// window.addEventListener("load", function () {
//     var box = document.getElementById("box");
//     box.addEventListener("click", toBlue, false);
// }, false)
// function toBlue() {
//     this.className = "blue";
//     this.removeEventListener("click", toBlue,false);
//     // this.addEventListener("click", toOrange,false);
//     this.addEventListener("dblclick", toOrange,false);
// //    如果是不同的事件，那不使用删除removeEventListener方法也是可以正常运行的，
// //    但是如果是相同的事件，如都是点击事件，事件列表addEventListener里的事件会全部执行，
// //    这样的结果就是（例如本例的颜色的改变）只有一个结果，只显示橙色，
// //    但如果是相同的事件，但执行的是不同的样式，那都会执行，如下个例子。
// }
// function toOrange() {
//     this.className = "orange";
//     this.removeEventListener("click", toOrange,false);
//     this.addEventListener("click", toBlue,false);
// }

//添加一个额外的方法，会不会被覆盖，或者只能执行一次,解决
// window.addEventListener("load", function () {
//     var box = document.getElementById("box");
//     box.addEventListener("click", function () {
//         alert("Lee");
//     }, false);
//     box.addEventListener("click", toBlue, false);
// }, false)
// function toBlue() {
//     this.className = "blue";
//     this.removeEventListener("click", toBlue,false);
//     this.addEventListener("click", toOrange,false);
//     // this.addEventListener("dblclick", toOrange,false);
// }
// function toOrange() {
//     this.className = "orange";
//     this.removeEventListener("click", toOrange,false);
//     this.addEventListener("click", toBlue,false);
// }
// 结论：W3C是比较完美的解决了这些问题，非常好用
//但是IE8和之前的浏览器不支持，而是采用了自己的事件，IE9支持。



// --------------------------IE事件处理函数（看图）
// 好像浏览器不支持attachEvent()和detachEvent（）方法
//覆盖问题
// window.detachEvent();
// window.attachEvent("onload", function(){
//     alert("Lee");
// });



// --------------------------事件对象的其他补充（看图）
//relatedTarget() 得到移入最近的那个DOM对象
// window.addEventListener("load", function () {
//     var box = document.getElementById("box");
//     addEventListener("mouseover", function (ev) {
//         alert(ev.relatedTarget);
//     },false);
// }, false);

//relatedTarget() 得到移出最近的那个DOM对象
// window.addEventListener("load", function () {
//     var box = document.getElementById("box");
//     addEventListener("mouseout", function (ev) {
//         alert(ev.relatedTarget);
//     },false);
// }, false);

// 阻止默认行为（看图）

// 自定义右键菜单
// function preDef(evt){
//     var e = evt || window.event;
//     if(e.preventDefault){
//         e.preventDefault();
//     }else{
//         e.returnValue = false;
//     }
// }
// window.addEventListener("load", function () {
//     var text = document.getElementById("text");
//     text.addEventListener("contextmenu", function (ev) {
//         preDef(ev);
//         var menu = document.getElementById("menu");
//         var e = ev || window.event;
//         menu.style.left = e.clientX+"px";
//         menu.style.top =e.clientY+"px";
//         menu.style.display = "block";
//         document.addEventListener("click", function (ev1) {
//             menu.style.display = "none";
//         },false);
//     },false);
// },false);

// 卸载前事件
// function preDef(evt){
//     var e = evt || window.event;
//     if(e.preventDefault){
//         e.preventDefault();
//     }else{
//         e.returnValue = false;
//     }
// }
// window.addEventListener("beforeunload", function (ev) {
//     preDef(ev);
// })

// 鼠标滚轮：用于获取鼠标上下滚轮的距离（看图）
// 有火狐和非火狐之分，有两种事件
// window.addEventListener("mousewheel", function (ev) {
//     var e = ev || window.event;
//     alert(e.wheelDelta);
// },false)

// window.addEventListener("DomMouseScroll", function (ev) {
//     var e = ev || window.event;
//     alert(e.detail);
// },false)                 // 谷歌不支持




































































