// -----------------------------表单介绍
// 跨浏览器添加事件
function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + type, fn);
    }
}
// 跨浏览器删除事件
function removeEvent(obj, type, fn) {
    if (obj.removeEventListener) {
        obj.removeEventListener(type, fn, false);
    } else if (obj.detachEvent) {
        obj.detachEvent("on" + type, fn);
    }
}
// 跨浏览器阻止默认行为（看图）
function preDef(evt) {
    var e = evt || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}
// 跨浏览器得到对应的DOM元素对象
function domElement(ev) {
    var e = ev || window.event;
    if (e.target) {
        console.log(e.target);       // w3c
    } else if (window.event.srcElement) {
        console.log(window.event.srcElement);       // IE
    }
}

// 测试js调用form的方式：
// addEvent(window, "load", function () {
//     // var fn = document.getElementById("myForm");
//     // var fn = document.getElementsByTagName("form")[0];
//     // var fn = document.forms[0];
//     var fn = document.forms["yourForm"];
//     alert(fn);
// })

// 提交表单（看图）
// addEvent(window, "load", function () {
//     var fn = document.getElementsByTagName("form")[0];
//     // console.log(fn);
//
//     // 阻止提交
//     // addEvent(fn,"submit",function (ev) {
//     //     preDef(ev);
//     // });
//
//     //    按住键盘，就进行提交
//     fn.addEventListener("keydown", function (ev) {
//         // alert(ev.keyCode)
//         // alert(ev.altKey+"555")
//         // ev.keyCode == 13 表示回车
//         if(ev.altKey && (ev.keyCode == 13)){
//             document.getElementById("submit").click();
//             alert("555");
//         }
//     },false);
//
//     fn.onsubmit = function (){
//         alert("Lee");
//     }
// });


// 模拟延迟提交（看图）
// 解决方法一：只允许第一次提交，后面的提交都没用
// addEvent(window, "load", function () {
//     var fm = document.getElementById("myForm");
// //    阻止提交
//     addEvent(fm,"submit",function (ev) {
//         preDef(ev);
//         alert("提交");
//         // 这种方法，只限于通过提交按钮防止重复提交的
//         // document.getElementById("submit").disabled = true; 表示第一次提交后，将按钮禁用
//         setTimeout(function () {
//             document.getElementById("submit").click();
//         }, 1000);
//     })
// })

// 解决方法二：定义一个变量，用于判断是否已发生过了
// addEvent(window, "load", function () {
//     var fm = document.getElementById("myForm");
//     var flag = false;   // 用于判断，有执行过一次后就将flag赋值为true
// //    阻止提交
//     addEvent(fm,"submit",function (ev) {
//         preDef(ev);
//         alert("提交");
//         if(flag){
//             return false;
//         }
//         flag= true;
//         setTimeout(function () {
//             document.getElementById("submit").click();
//         }, 1000);
//     })
// })

// 重置
// 危险，不怎么用

// ---表单字段
// 共有属性
// var fm = document.getElementById("myForm");
// alert(fm.elements.length);
// alert(fm.length);
// alert(fm.elements["button"]);
// alert(fm.elements["sex"][0].value);
// alert(fm.elements["sex"][0].name);
// alert(fm.elements["sex"][0].type);
// alert(fm.elements["sex"][0].disabled = true);
// fm.elements["sex"][0].disabled = true;     // 禁用了
// alert(fm.elements["sex"][0].form);

// 共有方法
// 两个：都是超控焦点的，
// focus()
// blur()
// var fm = document.getElementById("myForm");
// var user = fm.elements["user"];
// user.focus();   // 移入
// setTimeout(function () {
//     // fm.elements["sex"][0].blur();
//     user.blur();        // 移出
//     // fm.elements["submit"].focus();
// }, 2000);

// 共有事件
// 有三个:onblur/onfocus/onchange



// -----------------------------文本框脚本
// var fm = document.getElementById("myForm");
// var user = fm.elements["user"];
// var content = fm.elements["content"];

// alert(user.value);
// alert(content.value);        // textarea文本框没有alue属性

// alert(user.getAttribute("value"));

// alert(user.defaultValue);

// ---选择所有文本
// user.select();


// ---选择部分文本
// user.setSelectionRange(0, 1);
// google 要先选择所有，再选择部分
// user.select();
// user.setSelectionRange(0, 1);
// user.focus();

// ---js选择文本框内的部分内容
// https://blog.csdn.net/watasihakami/article/details/22996411

// ---文本选择事件（看图）
// onselect 最少选中文本后触发
// 和onchange事件类似，不过onchange事件是内容改变后才触发，onselect是选中触发
// user.onselect = function () {
//     alert("lee");
// }

//---取得选择的文本（看图）
// user.onselect = function () {
//     // alert(this.selectionStart);
//     // alert(this.selectionEnd);
//     alert(this.value.substring(this.selectionStart, this.selectionEnd))
// };
// IE 的取得选择的文本（看图）(兼容）


//---过滤输入：纯数字
// 1.禁止或屏蔽非数字键的输入，阻止非数字键的默认行为
// 2。验证后取消，你可以先输入非法字符，然后判断后，取消你刚输入的文本

// 第一种方法案例如下：
// 屏蔽非数字的输入
// user.onkeypress = function (ev) {
//     // alert(ev.keyCode);
//     var e = ev || window.event;
//     var charCode = e.keyCode;
//     // 正则表达式来获取文本是否为数字
//     if(!/\d/.test(String.fromCharCode(charCode)) && charCode > 8 ){
//         preDef(ev); // 屏蔽掉非数字键盘的输入
//     }
// }

// 复制、黏贴和剪切(看图）
// content.oncopy = function (ev) {
//     alert("lee1");
// preDef(ev)
// }

// content.oncut = function (ev) {
//     alert("lee2");
// }

// content.onpaste = function (ev) {
//     alert("lee3");
// }

// 屏蔽中文输入法
// 在HTML中的textarea中的style属性中设置：ime-mode:disabled;
// content.style.imeMode = "disabled";

// 第一中方法用户体验不是很好，用户有的以为电脑坏了
// 第二种方法案例如下：
// content.onkeyup = function (ev) {
//     // 将非数字键转换为空
//     this.value = this.value.replace(/[^\d]/g, '');
// }

// ---自动切换焦点（看图）
// fm.elements["a1"].onkeyup = tabForWard;
// fm.elements["a2"].onkeyup = tabForWard;
// fm.elements["a3"].onkeyup = tabForWard;
// function  tabForWard(ev) {
//     var e = ev || window.event;
//     if(this.value.length == this.maxLength){
//         for(var i = 0; i < fm.elements.length; i++){
//             if(fm.elements[i] == this){
//                 fm.elements[i+1].focus();
//             }
//         }
//     }
// }



// -----------------------------选择框脚本
var fm = document.getElementById("myForm");
var city = fm.elements["city"];

// <!--multiple:n. 倍数；[电] 并联///用于选择多个option-->
// city.multiple = 'multiple';

// ---设置显示行数
// city.size = 6;

// ---获取option对象
// alert(city.options.length);
// alert(city.options[3].index);       // index 表示是第几个option
// alert(city.options[1].text);         // 得到option的文本
// alert(city.options[1].value);        // 得到要发送的值

// ---改变选择执行打印选中的文本
// selectedIndex 和index 的区别：index表示第几个option选项，可以设置
// selectedIndex表示在前端选择第几个option选项，可以设置
// selectedIndex 和index （看啊图）
// city.onchange = function () {
//     alert(this.options[this.selectedIndex].text);
// }

// ---定位到索引项
// 这个定位必须在select对象上
// 一般用于设置定位和获取
// city.selectedIndex = 3;

// 这个定位必须在option对象上
// 一般用于判读，因为selected返回的是布尔值
// city.options[3].selected = true;
// alert(city.options[3].selected);

// city.options[2].onclick = function () {
//     // alert("999");
//     // alert(this.parentNode.selectedIndex);
//     if(city.options[this.parentNode.selectedIndex].selected){
//         alert(city.options[this.parentNode.selectedIndex].value);
//     }
// }

// city.onchange = function () {
//     // alert("999");
//     // alert(this.parentNode.selectedIndex);
//     if(city.options[this.selectedIndex].selected){
//         alert(city.options[this.selectedIndex].value);
//     }
// }

// --- 添加选项
// 一：使用DOM方法：
// createElement（）；
// createTextNode（）；
// appendChild（）；

// 二：使用HTML自带的方法：
// 使用Option构造函数添加：
// var option = new Option("文本值", "value值");
// city.add(option, 3);        // 第二个参数表示添加到的位置。要兼容，设为undefined
// city.appendChild(option);


// --- 移除选项
// city.remove(0);
// city.remove(2);

// --- 移动选项
// city.multiple = 'multiple';
// var city2 = fm.elements["city2"];
// city2.multiple = 'multiple';
//
// city.onclick = function () {
//     city2.appendChild(this.options[this.selectedIndex]);
//
// }

// option交换位置



// --- 单选按钮

// --- 复选按钮






















