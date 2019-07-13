


// ------------------------------- Window对象
// ---------- 系统对话框(看图)
// 1.alert()
// 2.confirm()
// 3.prompt()

//弹出警告
// alert('');

//确定和取消,有返回值Boolean值,确定为true,取消为false
// var box = confirm("请确认!!");
// alert(box);

// 输入提示\框
// var box = prompt("请", 10);    // 第一个参数为提示,第二个参数为默认值
// //有三种返回值,一,为默认值,二,为用户输入值,三,用户点击取消,值为 null
// alert(box);


// ---------- 打印
// print();
// ---------- 查找
// window.find();


// ---------- 状态栏
//谷歌没有状态栏
// window.status = "lee";


// ---------- 新建窗口(看图)
//参数:
// 1.第一个参数,要导航的URL
// 2.窗口的名称或窗口的目标
    // 命名可以给新窗口设置一个名称,凡是以这个名称打开的窗口,都在这个窗口里加载URL
    // 目标:一般用两个:_blank(新标签), _parent(本标签)
// 3.特定的字符串,表示各种窗口配置的功能
// var box = open('http://www.baidu.com', "baidu", "location=no, width=1200, height=800, top=100, left=100, toolbar=yes");
// // alert(box);
// box.alert("lene");
// box.confirm("请确认!!");
//open本身会返回子窗口的window对象,表示子窗口



// ---------- 查看窗口的位置和大小(看图)
// ---窗口的位置
// window.screenLeft = 500;
// alert(window.screenX);
// alert(screenLeft);
// alert(screenTop);
// alert(typeof window.screenX);
// alert(typeof screenLeft);
// alert(typeof screenTop);

//用于判断浏览器是否识别--返回浏览器的窗口的位置
// var leftX = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
// alert(leftX);
// var topY = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
// alert(topY);

// ---窗口的大小
// 有四个属性:
// innerWidth,innerHerght.:返回浏览器窗口本身的尺寸
// outerHerght,outerWidth.:返回浏览器窗口本身及边框的尺寸
// 为防止浏览器不支持,可在属性前面加上window
// alert(window.innerHeight);
// alert(window.innerWidth);
// alert(window.outerHeight);
// alert(window.outerWidth);

// 使用document对象的方法:
// alert(document.documentElement.clientWidth);
// alert(document.documentElement.clientHeight);

// 跨浏览器获取视口(可视方位的页面窗口)
// var width = window.innerWidth;          // window.必须有,因为IE不支持
// var height = window.innerHeight;        // 如果支持inner的,那么就用它了
// // 不支持使用document对象的方法:
// //  alert(document.compatMode);
// if(typeof width != "number"){
//     if(document.compatMode == "CSS1Compat"){    // 判断是否为标准模式,是则弹出 CSS1Compat
//         width = document.documentelement.clientWidth;
//         height = document.documentelement.clientHeight;
//     }
//     else{
//         width = document.body.clientWidth;
//         height = document.body.clientHeight;
//     }
// }


// ---------- 修改窗口的位置和大小(看图)
// 可正负值
// --修改浏览器的位置
// window.moveTo(200, 300);     // 浏览器左顶点跳转到指定地点
// window.moveBy(10, 10);       // 每次跳转指定大小的位置
// --修改浏览器窗口的大小
// resizeTo(300, 500);
// resizeBy(-10, -10);     // 类似上面的moveBy


// ---------- 定时器(间歇调用和超时调用)
// -- 超时调用setTimeout()
// 第一个参数可以是字符串,而里面可以是代码块,因为它有解析功能,所以引号要配对好
// setTimeout("alert('Lee')", 2000);

// function box(){
//     alert("lee1");
// }
// setTimeout(box, 2000);

// 使用下面的方法,扩展性好,性能更佳
// setTimeout(function(){
//     alert("llll");
// }, 1000);

// -- 取消超时调用cleanTimeout():****因为setTimeout()方法有返回值(看图)
// var box = setTimeout(function(){
//     alert("llll");
// }, 2000);
// alert(box);
// clearTimeout(box);


// -- 间歇调用setInterval()
// var box = setInterval(function(){
//     alert("hhh");
// }, 100);
// -- 取消间歇调用clearInterval()
// clearInterval(box);


// -- 定时器的案例
// 使用setInterval()
// var num = 0;
// var max = 5;
// var id = null;
// id = setInterval(function(){
//     num ++;
//     document.getElementById("time").innerText += num;
//     if(num >= max){
//         clearInterval(this);      // this代表本身, 但是在一些浏览器中是没起到作用,Google有用
//         // clearInterval(id);
//         alert("chengGongLe");
//     }
// }, 1000);




// 使用setTimeout()
// var num = 0;
// var max = 5;
// function box(){
//     num ++;
//     document.getElementById("time").innerText += num;
//     if(num >= max){
//         alert("LLL");
//     }
//     else{
//         setTimeout(box, 1000);
//     }
// }
// setTimeout(box, 1000);




// ------------------------------- location对象(看图)
// alert(location);
// alert(window.location);
// alert(document.location);

// --属性(可查询和设置)
// location.hash = 23;     // 设置锚点
// location.hash = '#34';     // 设置锚点并跳转
// alert(location.hash);        // 锚点

// alert(location.href);
// location.href = "http://www.baidu.com";      // 设置跳转的URL,并跳转

// 下面的路径/端口/协议等都可以设置并跳转
// alert(location.pathname);
// alert(location.host);
// alert(location.hostname);
// alert(location.port);
// alert(location.protocol);        // 获取协议部分

// location.search = "?id=3";      // 设置?后的字符,并跳转
// alert(location.search);      // 查询字符串,获取?后的字符

// --方法
// location.assign("http://www.baidu.com"); //跳转到指定的URL
// location.reload();      // 最有效的重新加载,有可能从缓存加载
// location.replace('http://www.baidu.com');     // 可以避免产生跳转前的历史记录

// 查看区别:
// function a(){
//     location.replace("http://www.baidu.com");
// }
// function a(){
//     location.href="http://www.baidu.com";
// }




// ------------------------------- history对象(看图)
// -- 属性
// alert(history.length);

// -- 方法
// function back() {
//     history.back();
// }
// function forward() {
//     history.forward();
// }

// history.go(num);     // num为正负值,例如:-2表示后退两次页面,3表示前进3次页面



































































































































