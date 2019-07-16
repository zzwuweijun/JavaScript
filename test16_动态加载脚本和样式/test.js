
// 上节课漏的内容：
// -------------------------------- 元素位置（看图）
// getBoundingClientRect（）
// 有四个属性：left，top， right， bottom，分别表示元素各边与页面上边和左边的距离
// var box = document.getElementById("box1");
// alert(box.getBoundingClientRect());
// var bounding = box.getBoundingClientRect();
// alert(bounding.top);        // 50
// alert(bounding.left);           // 50
// alert(bounding.right);              // 350
// alert(bounding.bottom);             // 350

// 表示文档内容到顶部的距离
// alert(document.documentElement.clientTop);



// -------------------------------- 动态脚本（看图）
// ------ 动态加载js文件
// 达到条件后就自动动态加载脚本
// setTimeout(aa, 3000);
// function aa() {
//     var flag = true;        // 标记
//     if(flag){
//         addJs("browserDetect.js");
//     }
//     setTimeout("alert(BrowserDetect.browser)", 500);
// }
// function addJs(jsName){
//     var html= document.getElementsByTagName("head")[0];
//     var script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = jsName;
//     html.appendChild(script);
// }


// ------ 动态加载js
// 不是加载整个文件，而是加载js模块
// setTimeout(aa, 2000);
// function aa() {
//     var flag = true;        // 标记
//     if(flag){
//         addJs("hello");
//     }
// }
// function addJs(jsName){
//     var html= document.getElementsByTagName("head")[0];
//     var script = document.createElement("script");
//     script.type = "text/javascript";
//     // script.appendChild(document.createTextNode("alert('lee');"));   // IE报错
//     script.text = "alert('Lee');";      // 除了IE支持外，其他的浏览器也会支持
//     html.appendChild(script);
// }



// -------------------------------- 动态样式（看图）
// 动态link
// setTimeout(aa, 2000);
// function aa() {
//     var flag = true;        // 标记
//     if(flag){
//         addJs("hello");
//     }
// }
// function addJs(jsName){
//     var link = document.createElement("link");
//
//     link.rel = "stylesheet";
//     link.type = "text/CSS";
//     link.href = "test2.css";
//
//     document.getElementsByTagName("head")[0].appendChild(link);
// }


// 动态style
alert("11:"+document.styleSheets.length);
setTimeout(aa, 2000);
function aa() {
    var flag = true;        // 标记
    if(flag){
        addJs("hello");
    }
}
function addJs(jsName){
    var style = document.createElement("style");

    style.type = "text/css";
    // style.appendChild(document.createTextNode("\n#box1{\n" +
    //     "    color: blue;\n" +
    //     "    background-color: orange;}"));      // IE 不支持，用下面的方法

    document.getElementsByTagName("head")[0].appendChild(style);
    alert("22:"+document.styleSheets.length);
    inserRule(document.styleSheets[1], "#box1", "color: blue;background-color: orange;",0);
}
function inserRule(sheet, selectorText, cssText, position){
    // 非IE
    if(sheet.insertRule){
        sheet.insertRule(selectorText + "{"+ cssText + "}", position);
    }
    //IE
    else if(sheet.addRule){
        sheet.addRule(selectorText, cssText, position);
    }
}












































































































































































