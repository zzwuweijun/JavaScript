// ----------------------------------------IE中的XML
// 创建XML DOM
function createXMLDOM() {
    var version = [
        "MSXML2.DOMDocument6.0",
        "MSXML2.DOMDocument3.0",
        "MSXML2.DOMDocument"
    ];
    for (var i = 0; i < version.length; i++) {
        try {
            var xml = new ActiveXObject(version[i]);
            return xml;
        } catch (e) {
            //    跳过
        }
    }
    throw new Error("你的浏览器或系统不支持MSXML！！！");
}


// 载入XML文件，两种方法：1.加载XML字符loadXML（）；2.加载XML外部文件load（）；

// var xmlDom = createXMLDOM();
// console.log(xmlDom);

// 同步或异步加载
// xmlDom.async = false;       // 同步设置false，异步设置问true；默认就是异步；

// 加载字符串
// xmlDom.loadXML("<root>\n" +
//     "    <user>Lee</user>\n" +
//     "    <email>123456789@qq.com</email>\n" +
//     "    <url>http://www.baidu.com</url>\n" +
//     "</root>");         // 加载XML字符
// 加载文件
// xmlDom.load("test.xml");


// alert(xmlDom.xml);      // 序列化XML，带劲字符串

// 使用DOM操作XML
// var user = xmlDom.getElementsByTagName("user")[0];
// alert(user.nodeType);
// alert(user.nodeName);
// alert(user.firstChild.nodeValue);
// alert(user.nextSibling.firstChild.nodeValue);

// // 创建标签
// var bbb = xmlDom.createElement("bbb");
// var root = xmlDom.documentElement;
// root.appendChild(bbb);
// var bbbtext = xmlDom.createTextNode("kkkkkk");
// bbb.appendChild(bbbtext);
// alert(xmlDom.xml);



// ---通过异步加载并判断状态
// var xmlDom = createXMLDOM();
// xmlDom.async = true;
//
// xmlDom.onreadystatechange = function(){ // 这个事件必须放在load（）方法前面，意图先载入事件，再当load（）加载文件
//     // alert(xmlDom.readyState);
//     // alert(this == window);      // onreadystatechange 比较特殊，里面的this表示window而不是执行的Object；
//     if(xmlDom.readyState == 4){
//         alert(xmlDom.xml);
//     }
// }
//
// xmlDom.load("test.xml");


// --- 解析错误(看图）
// var xmlDom = createXMLDOM();
// xmlDom.async = true;
// xmlDom.onreadystatechange = function(){ // 这个事件必须放在load（）方法前面，意图先载入事件，再当load（）加载文件
//     // alert(xmlDom.readyState);
//     // alert(this == window);      // onreadystatechange 比较特殊，里面的this表示window而不是执行的Object；
//     if(xmlDom.readyState == 4){
//         // alert(xmlDom.xml);
//         if(xmlDom.parseError){
//             alert(xmlDom.parseError.errorCode);
//             alert(xmlDom.parseError.line);
//             alert(xmlDom.parseError.reason);
//         }
//     }
// }
// xmlDom.load("test.xml");



// ----------------------------------------DOM2中的XML（看图）
// var xmlDom = document.implementation.createDocument('', 'root',null);   //
// alert(xmlDom.documentElement.tagName);

// 使用标准DOM去创建节点
// var bbb = xmlDom.createElement("bbb");
// var root = xmlDom.documentElement;
// root.appendChild(bbb);
// var bbbtext = xmlDom.createTextNode("kkkkkk");
// bbb.appendChild(bbbtext);
// alert(xmlDom.getElementsByTagName("bbb")[0].nodeValue);

//----使用外部文件
// 有同步和异步
// var xmlDom = document.implementation.createDocument('', 'root',null);   //
// xmlDom.async = false;
// xmlDom.load("test.xml");
// // alert(xmlDom.getElementsByTagName("user")[0].tagName);
// alert(xmlDom.getElementsByTagName("user")[0].firstChild.nodeValue);


//--- 解析字符串
// var xmlParse = new DOMParser();
// var xmlStr = "<root>\n" +
//     "    <user>Lee</user>\n" +
//     "    <email>123456789@qq.com</email>\n" +
//     "    <url>http://www.baidu.com</url>\n" +
//     "</root>";
// var xmlDom = xmlParse.parseFromString(xmlStr, "text/xml");// // alert(xmlDom.getElementsByTagName("user")[0].tagName);
// alert(xmlDom.getElementsByTagName("user")[0].tagName);


// --- 模拟.xml属性序列化字符串

//
// alert(xml);

// --- 解析错误
// var xmlParse = new DOMParser();
// var xmlStr = "<root>\n" +
//     "    <user>Lee</user>\n" +
//     "    <email>123456789@qq.com</email>\n" +
//     "    <url>http://www.baidu.com</url>\n" +
//     "</root>";
// var xmlDom = xmlParse.parseFromString(xmlStr, "text/xml");// // alert(xmlDom.getElementsByTagName("user")[0].tagName);
//
// var serializer = new XMLSerializer();
// var xml = serializer.serializeToString(xmlDom);
// var errors = xmlDom.getElementsByTagName("parsererror");
// if (errors.length==0){
//     alert(xml);
// }
// else{
//     //让xmlStr字符串出错
//     throw new Error(errors[0].textContent);
// }




// ----------------------------------------跨浏览器处理XML
// 查看 CC.js文件，有详细的跨浏览器处理XML方式

//typeof window.DOMParser和 typeof window.ActiveXObject不管是在IE的任意
// 版本或是在其他的浏览器，都是显示一样的值，所以无法判断。
// 要进行浏览器的兼容，使用cc.js的方式
function getXMLDOM(xmlStr) {
    var xmlDom = null;
    if(typeof window.DOMParser != "undefined"){
        xmlDom = (new DOMParser).parseFromString(xmlStr, "text/xml");
        var errors = xmlDom.getElementsByTagName("parsererror");
        if(errors.length > 0){
            throw new Error("错误信息："+ errors[0].textContent);
        }
    }else if(typeof window.ActiveXObject != "undefined"){
        var version = [
            "MSXML2.DOMDocument6.0",
            "MSXML2.DOMDocument3.0",
            "MSXML2.DOMDocument"
        ];
        for (var i = 0; i < version.length; i++) {
            try {
                var xmlDom = new ActiveXObject(version[i]);
            } catch (e) {
                //    跳过
            }
        }
        xmlDom.loadXML(xmlStr);
        if(xmlStr.parseError != 0){
            throw new Error("错误信息："+ xmlStr.parseError.reason);
        }
        return xmlDom;
    }else{
        throw new Error("你的浏览器或系统不支持XML DOM对象！！！");
    }
    return xmlDom;
}

var xmlStr = "<root>\n" +
    "    <user>Lee</user>\n" +
    "    <email>123456789@qq.com</email>\n" +
    "    <url>http://www.baidu.com</url>\n" +
    "</root>";
// var xmlDom = getXMLDOM(xmlStr);
// alert(xmlDom);
