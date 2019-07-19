// ------------------------------------------XMLHttpRequest
// window.onload = function (ev) {
//     function createXHR() {
//         var xmlhttp;
//         try {
//             if (window.XMLHttpRequest) {
//                 //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//                 xmlhttp = new XMLHttpRequest();
//             } else {
//                 // IE6, IE5 浏览器执行代码
//                 xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//             }
//         } catch (e) {
//             throw new Error("浏览器不支持！！！");
//         }
//         return xmlhttp;
//     }
//     var xmlhttp = createXHR();      // 创建XHR对象
//     // alert(xhr);
//     xmlhttp.onreadystatechange=function()
//     {
//         if (xmlhttp.readyState==4 && xmlhttp.status==200)
//         {
//             document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
//         }
//     };
//     xmlhttp.open('get', "http://localhost:63342/review/JavaScript/test26_Ajax/cc.xml", true);
// // 准备发送请求，以GET方式请求，URL是网址，第三个参数是设置为同步或步，false为同步
//     xmlhttp.send("dataType:'jsonp'");     // 看图
// }


// ------------------------------------------GET和POST
// window.onload = function (ev) {
//     function createXHR() {
//         var xmlhttp;
//         try {
//             if (window.XMLHttpRequest) {
//                 //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//                 xmlhttp = new XMLHttpRequest();
//             } else {
//                 // IE6, IE5 浏览器执行代码
//                 xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//             }
//         } catch (e) {
//             throw new Error("浏览器不支持！！！");
//         }
//         return xmlhttp;
//     }
//     var xmlhttp = createXHR();
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
//             // 得到相应头部信息（all）
//             document.getElementById("myDiv2").innerHTML = xmlhttp.getAllResponseHeaders();
//             // 得到相应头部信息（自定义的）
//             document.getElementById("myDiv3").innerHTML = xmlhttp.getResponseHeader("date");
//             document.getElementById("myDiv4").innerHTML = xmlhttp.getResponseHeader("cache-control");
//         }
//     };
//     // 防止中文乱码，进行编码
//     function params(url, name, value) {
//         url += url.indexOf("?") == -1 ? "?" : "&";
//         url + encodeURIComponent(name) + "=" + encodeURIComponent(value);
//         alert(url);
//         return url;
//     }
//     var uu = "http://localhost:63342/review/JavaScript/test26_Ajax/cc.xml";
//     var url = params(uu, "name", "重物");
//     xmlhttp.open('get', url, true);
//     // 设置请求头部信息
//     // xmlhttp.setRequestHeader("date", "2111-7-19");
//     xmlhttp.send("dataType:'jsonp'");
// }


// JSON 加载
function createXHR() {
    var xmlhttp;
    try {
        if (window.XMLHttpRequest) {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp = new XMLHttpRequest();
        } else {
            // IE6, IE5 浏览器执行代码
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    } catch (e) {
        throw new Error("浏览器不支持！！！");
    }
    return xmlhttp;
}
// window.onload = function (ev) {
//     var xmlhttp = createXHR();
//     var uu = "http://localhost:63342/review/JavaScript/test26_Ajax/test2.json";
//     var url = uu+"?rand="+Math.random();
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
//             // alert(xmlhttp.responseText);
//             // alert(typeof xmlhttp.responseText);
//             document.getElementById("myDiv2").innerHTML = JSON.parse(xmlhttp.responseText);
//         }
//     };
//     xmlhttp.open("get",url,true);
//     xmlhttp.send(null);
// }




// POST
// window.onload = function (ev) {
    // function createXHR() {
    //     var xmlhttp;
    //     try {
    //         if (window.XMLHttpRequest) {
    //             //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    //             xmlhttp = new XMLHttpRequest();
    //         } else {
    //             // IE6, IE5 浏览器执行代码
    //             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    //         }
    //     } catch (e) {
    //         throw new Error("浏览器不支持！！！");
    //     }
    //     return xmlhttp;
    // }
//     var xmlhttp = createXHR();
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
//             }
//     };
//     xmlhttp.open('post', url, true);
//     // 模拟表单提交
//     xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     xmlhttp.send("name=Lee&age=100");   // 表单数据数据是放在这里的；
// }



// ------------------------------------------封装Ajax
// 查看视频源码，这里不再重写

//封装Ajax
function ajax(){
    var xmlhttp = createXHR();
    alert(xmlhttp);
}

// 调用Ajax
document.onclick = function (ev) {
    ajax();

};










