


// 1.说明（看图片）


// 2.动态赋值



// 3.复制变量值
// 基本类型赋值的是值本身，引用类型复制的是地址



// 4.传递参数
// ps:所有的函数的参数都是按值传递的，也就是说，参数不会按引用传递，虽然变量有基本类型和引用类型；传递引用类型，传递的是地址。
// function box(obj){
//     obj.name = "jj";
//     // obj = new Object();
//     // obj.name = "kkk";
// }
// var obj = new Object();
// obj.name = "iii";
// alert(obj.name);
// box(obj);
// alert(obj.name);



// 5.引用类型的检测类型
// var box = [2,3,4];
// alert(box instanceof Array);
// var box2 = {};
// alert(box2 instanceof Object);
// var box3 = /g/g;
// alert(box3 instanceof RegExp);


// 6.执行环境及作用域（看图片）


// 7.没有快级作用域
// 快级作用域表示诸如if 语句等有花括号封闭的代码块，所以，支持条件判断来定义变量
// if(true){
//     var box = "jj111";
// }
// alert(box);


// for(var i = 1; i<4; i++){
//     console.log(i);
// }
// alert(i);



// 8.var 关键字再函数里的区别
// 如果有var，则是局部变量，没有var，则是全局变量
// function box(){
//     name = "qq";                // 全局变量
//     return name;
// }
// alert(box());
// alert(name);

// function box(){
//     var name = "qq";        // 局部变量
//     return name;
// }
// alert(box());
// alert(name);



// var box = {
//     name: 2
// };
// alert(box.name);
// alert(name);



// 9.内存
// 看图片





















































































































































