
// 说明：Function（函数）类型实际上是对象。
// 每个函数都是Function类型的实例，而且都与其他引用类型一样具有属性和方法。
// 由于函数是对象，因此函数名实际上也是一个指向函数对象的指针。





// -----------------------------------------函数的声明方式
// 1.普通的函数声明
// function box(num1, num2){
//     return num1 + num2;
// }
// alert(box(2, 4));

// 2.使用变量初始化函数
// var box = function (num1, num2){
//     return num1 + num2;
// }
// alert(box(32, 422));

// 3.使用Function构造函数（不推荐）
// var box = new Function("num1", "num2", "return num1 + num2");
// alert(box(2, 3));



// -----------------------------------------作为值的函数
// function box(sum, num2){
//     return sum + num2;
// }
// function sum(num){
//     return num + 2;
// }
// alert(box(sum(44), 3));




// -----------------------------------------函数的内部属性
// 由两个特殊的对象：arguments和this.

// arguments是一个类数组对象，包含着传入函数中的所有参数，主要用途是保存函数参数。
// 但这个对象还有一个名叫 callee 的属性，该属性是一个指针，指向拥有这个arguments对象的函数。
// callee属性的作用：如有的函数会调用自身，但是有时要改变函数名称，这就要调用自身函数的函数名都有改变，这样很容易忘掉，而callee属性就是指向函数本身
// 例如递归函数：
// function box(num){
//     if(num<=1){
//         return 1;
//     }
//     else{
//         // return num * box(num-1);     // 转换成下面形式
//         return num * arguments.callee(num-1);
//     }
// }
// alert(box(3));


//this:this引用的是函数据以执行操作的对象，或者说函数调用语句所处的那个作用域。
// PS:当再全局作用域中调用函数时，this对象引用的就是window。










// -----------------------------------------函数属性和方法
// 函数是对象，所有函数也是有属性和方法。每个函数都包含两个属性：length和prototype
// length：该属性表示函数希望接收的命名参数的个数
// function box(a, b){
//     return a+ b;
// }
// alert(box.length);

//冒充
// prototype:（看图片）有两个方法：apply（）和 call（）方法
















































































































































