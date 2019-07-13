
// ------------------------------------------- navigator 对象(看图)
// ------------ 常用的
// ---浏览器及版本号(看图)
// alert("浏览器名称"+window.navigator.appCodeName);
// alert("浏览器版本"+window.navigator.appVersion);
// alert("浏览器用户代理字符串"+window.navigator.userAgent);
// alert("浏览器所在的系统"+window.navigator.platform);

// --- 浏览器嗅探器-使用了browserdetect.js
// alert(BrowserDetect.browser);
// alert(BrowserDetect.version);
// alert(BrowserDetect.OS);

// --- 检测插件(看图)
// alert(navigator.plugins.length);
// for(var i= 0; i < navigator.plugins.length; i++){
//     document.writeln("插件名:--"+navigator.plugins[i].name + "<br/>");
//     document.writeln("文件 名:--"+navigator.plugins[i].filename + "<br/>");
//     document.writeln("描述信息:--"+navigator.plugins[i].description + "<br/>");
//
//     document.writeln("<br/><br/><br/>");
// }

// 判断浏览器是否有某个插件
// function hasPlugins(name) {
//     var name = name.toLowerCase();
//     for(var i = 0; i<navigator.plugins.length;i++){
//         if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
//             return true;
//         }
//     }
//     return false;
// }
// alert(hasPlugins("Viewer"));

// IE 组件(插件)的为题(看图)
// https://jingyan.baidu.com/article/19192ad8e80933e53f57076e.html

// 跨浏览器检测插件,上面两种方法组合起来使用


// --- MIME类型(看图)





// ------------------------------------------- 客户端检测(看图)
// ------------能力检测(看图)
//---
//---


// ------------怪癖检测 bug(缺陷)(看图)
//---
//---




// ------------用户代理检测(看图)
// 其实也就是自己编写BrowserDetect.js 文件
//---
//---














































































































































