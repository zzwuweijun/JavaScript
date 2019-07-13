



// --------------------------- 匿名函数及闭包的介绍(看图)

//匿名函数的自我执行: (匿名函数)()
// (function j(){
//     alert("jijij");
// })();


// 把匿名函数自我执行的返回值赋值给变量
// var box = (function j(){
//     alert("jijij");
// })();
// alert(box);


// 自我执行匿名函数的传参
// (function (age){
//     alert(age);
// })(1100);



// --------------------------- 闭包(看图)
// 匿名函数中定义的任何变量,都会在执行结束后被销毁

// 闭包:相当在函数中再有一个函数,
// 闭包:函数里放一个匿名函数
// function j(){
//     return function (){
//         return "lee";
//     };
// }
// alert(j()());




// 使用匿名函数实现局部变量驻留内存从而累加
// function box() {
//     var age = 100;
//     return function () {
//         age++;
//         return age;
//     }
// }
// var b= box();
// //相当于 b = return function () {
// //         age++;
// //         return age;
// //     }
// //从而保存了变量
// alert(b());
// alert(b());
// alert(b());
// alert(b());
// alert(b());
// b = null;   //解除引用,等待垃圾回收



// 闭包中使用this,(看图)1
// var user = 200;
// var box = {
//     user : 10000,
//     getThis : function () {
//         // 这里作用域是box
//         return function () {
//             // 这里作用域是window
//             return this.user;
//         }
//     }
// }
// alert(box.getThis()());




// 模仿块级作用域(看图)
// function box() {
//     (function () {
//         for (var i = 0; i < 5; i++ ){
//             alert(i);
//         }
//     })();
//     alert(i)
// }
// alert(box());



// 私有变量(看图)
function Box (){
    var age = 100;      // 私有变量
    function run() {    // 私有函数
        return "姐姐大姐";
    }
    this.getAge = function () {     // 对外公共的特权方法
        return age;
    }
    this.setAge = function (value) {
        age = value
    }
}
var box = new Box();
alert(box.age);     // 这是访问不到的,
alert(box.getAge());
box.setAge(20000);
alert(box.getAge());





































































































































