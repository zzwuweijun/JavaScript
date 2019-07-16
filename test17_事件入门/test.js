// -----------------------------------事件介绍（看图）
// JavaScript有三种事件模型：内联、脚本和DOM2模型
// DOM2模型在test19将学习到


// -----------------------------------内联模型（看图）
// function box(){
//     alert("Lee222");
// }


// -----------------------------------脚本模型(看图）
// var input = document.getElementsByTagName("input")[0];
// input.onclick = function(){
//     alert("lee");
// }


// -----------------------------------事件处理函数(看图）
// 事件类型有：鼠标事件、键盘事件、HTML事件
// ----------鼠标事件
// 单击
// window.onload = function () {
//     var input = document.getElementsByTagName("input")[0];
//     input.onclick = function () {
//         alert("jlll");
//     }
// }

// 双击
// window.onload = function () {
//     var input = document.getElementsByTagName("input")[0];
//     input.ondblclick = function () {
//         alert("jlll");
//     }
// }

// 当用户按下了鼠标还未弹起时触发
// window.onload = function () {
//     var input = document.getElementsByTagName("input")[0];
//     input.onmousedown = function () {
//         alert("jlll");
//     }
// }

// 当用户释放鼠标时触发
// window.onload = function () {
//     var input = document.getElementsByTagName("input")[0];
//     input.onmouseup = function () {
//         alert("jlll");
//     }
// }

// 当鼠标移到某个元素上方时触发
// window.onload = function () {
//     var input = document.getElementsByTagName("input")[0];
//     input.onmouseover = function () {
//         alert("jlll");
//     }
// }

// 当鼠标指针在元素上移动时触发
// window.onload = function () {
//     var input = document.getElementsByTagName("input")[0];
//     input.onmousemove = function () {
//         alert("jlll");
//     }
// }

// 当鼠标移出某个元素上方移动时触发
// window.onload = function () {
//     var input = document.getElementsByTagName("input")[0];
//     input.onmouseout = function () {
//         alert("jlll");
//     }
// }


// ----------键盘事件
// 当用户按下键盘上任意键触发，如果按住不放，会重复触发       任意键
// window.onload = function () {
//     onkeydown = function () {
//         alert("jlll");
//     }
// }

// 当用户按下键盘上字符键触发，如果按住不放，会重复触发       字符键
// window.onload = function () {
//     onkeypress = function () {
//         alert("jlll");
//     }
// }

// 当用户释放键盘上的键触发
// window.onload = function () {
//     onkeyup = function () {
//         alert("jlll");
//     }
// }


// ----------HTML事件
// load: 当页面完全加载后在window上触发，或当框架集加载完毕后在框架集上触发
// unload：当页面完全卸载后在window上面触发，或当框架集卸载后在框架集上触发
// select：当用户选择文本框（input或textare）中的一个或多个字符触发
// change：当文本框（input或textarea）内容改变且失去焦点后触发
// focus：当页面或者元素获得焦点时再window及相关元素上面触发、
// focus :集中(注意力、精力等于); (使) 调节焦距; 集中(光束于); 聚焦(于);
// blur:当页面或元素失去焦点时再window及相关元素上触发
// submit:当用户点击提交按钮在《form》元素上触发
// reset：当用户点击终止按钮在《form》元素上触发
// resize：当窗口或框架的大小变化是在window或框架上触发
// scroll：当用户滚动带滚动条的元素时触发

// 下面是案例：
// window.onload = function () {
//     alert("ljjljl");
// }

// window.onunload = function () {
//     var box = document.getElementsByTagName("input")[0];
//     box.value = "请重新加载";
//     alert("请重新加载");
// }

// window.onload = function () {
//     var box = document.getElementsByTagName("input")[0];
//     box.value = "请选择文本中的内容";
//     box.onselect = function () {
//         alert("选择成功");
//     }
// }

// window.onload = function () {
//     var box = document.getElementsByTagName("input")[0];
//     box.value = "请改变文本中的内容";
//     box.onchange = function () {
//         alert("改变成功");
//     }
// }

// window.onload = function () {
//     var box = document.getElementsByTagName("input")[0];
//     box.value = "请文本中区拥有焦点";
//     box.onfocus = function () {
//         alert("有焦点了");
//     }
// }

// window.onload = function () {
//     var box = document.getElementsByTagName("input")[0];
//     box.value = "请文本中失去焦点";
//     box.onblur = function () {
//         alert("没有焦点了");
//     }
// }

// window.onload = function () {
//     var box = document.getElementsByTagName("form")[0];
//     document.getElementsByTagName("input")[0].value = "提交表达shi触发";
//     box.onsubmit = function () {
//         alert("ok");
//     }
// }

// window.onload = function () {
//     var box = document.getElementsByTagName("form")[0];
//     document.getElementsByTagName("input")[0].value = "重置";
//     box.onsubmit = function () {
//         alert("ok");
//     }
// }

// window.onload = function () {
//     window.onresize = function () {
//         alert("ok");
//     }
// }

// window.onload = function () {
//     window.onscroll = function () {
//         alert("ok");
//     }
// }






































