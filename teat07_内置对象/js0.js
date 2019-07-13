






// Global对象
// Math对象



// ----------------------------------- Global

// -----Global对象的第一个方法:对URL的编码和解码

// 编码
// encodeURI();
// encodeURIComponent()

// alert(encodeURI("//?:Lee李"));   // 只编码了中文
// alert(encodeURIComponent("//?:Lee李"));  // 特殊字符和中文编码了


// 编码之后要用对应的解码方法进行解码


// 解码
// decodeURI()
// decodeURIComponent()

// var a = encodeURI("//?:Lee李");
// var b = encodeURIComponent("//?:Lee斯");
// alert(decodeURI(a));
// alert(decodeURIComponent(b));



// -----Global对象的第二个方法:eval()方法
// eval()方法主要担当一个字符串解析器的作用,他只接受一个参数,而这个参数就是要执行的JavaScript代码的字符串

// eval("var box = 1020;");    // 没有返回值
// alert(box);

// alert(eval("var b = 2;"));  //undefined


// eval("function box(){return 234};");
// alert(box());




// -----Global对象:Global对象属性
// Global对象包含了一些属性:undefined,NaN,Object,Array,Function等等.
// alert(Array);       // 返回构造函数





// -----Global对象:Window对象
// Global没有办法直接访问,而web浏览器可以使用window对象来实现一全局访问
// alert(window.Array);      // 返回构造函数












// ----------------------------------- Math
// 1.math对象的属性:(看图)
// alert(Math.PI); //圆周率
// alert(Math.E);  // 自然对数的底数,即常量E的值


// 2.math对象的方法:
// min()
// max()

// alert(Math.max(2,3,4,51,1,4,5,2));
// alert(Math.min(3,4,5,6,3,22,55,22));


// 3.math对象的舍入方法:
// Math.ceil()执行向上舍入,即他总是将数值向上舍入为最接近的整数
// Math.ceil()执行向下舍入,即他总是将数值向下舍入为最接近的整数
// Math.ceil()执行标准舍入,即他总是将数值四舍五入为最接近的整数

// alert(Math.ceil(23.1));
// alert(Math.ceil(23.9));
// alert(Math.ceil(23.5));

// alert(Math.floor(23.1));
// alert(Math.floor(23.9));
// alert(Math.floor(23.5));

// alert(Math.round(23.1));
// alert(Math.round(23.9));
// alert(Math.round(23.5));



// 4.math对象的随机方法:
// alert(Math.random());       // 值为 (0, 1) 不包含0和1
// alert(Math.random() * 10);

// for(let i = 0; i < 10; i++){
//     document.write(Math.floor(Math.random() * 10 + 1));     // 表示1到10之间, 10+1-1 = 10
//     document.write("<br/>");
// }

// for(let i = 0; i < 10; i++){
//     document.write("<strong>"+Math.floor(Math.random() * 6 + 5)+"</strong>");     // 表示5到10之间, 5+6-1 = 10
//     document.write("<br/>");
// }


// for(let i = 0; i < 10; i++){
//     document.write("<strong>"+myRandom(3, 9)+"</strong>");
//     document.write("<br/>");
// }
// function myRandom(start, end){
//     var tool = end - start + 1;
//     return Math.floor(Math.random() * tool + start);
// }




// 5.math对象的其他方法:
// alert(Math.abs(-34));       // 绝对值
// alert(Math.pow(3, 2));  // 指数
// alert(Math.sqrt(9));        // 平方根


























































































