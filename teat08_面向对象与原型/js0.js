

//--------------------------常规对象
// var box = new Object();
// box.name = "lee";
// box.age = 100;
// box.run = function(){
//     alert(this.name+ "--"+this.age+"-"+"hahahahaah");   //this表示当前作用域下的对象
// };
// //this表示new Object（)实例化出来的那个对象。
// //this要放在一个作用域下，比如box.run(){},这个是box作用域下的方法,放可以用this,来表示box
//
// box.run();
// 没有解决重复实例化的问题



//--------------------------工厂模式
// function createObject(name, age){       // 集中实例化的函数
//     var box = new Object();
//     box.name = name;
//     box.age = age;
//     box.run = function (){
//         return this.name + "--" + this.age;
//     }
//     return box;
// }
// var box1 = createObject("lee", 100);
// var box2 = createObject("jack", 200);
// alert(box1.run());
// alert(box2.run());
// 解决重复实例化的问题，但识别问题没解决，因为根本无法高清楚他们到底是哪个对象的实例




//-------------------------- 构造函数(看图）
// function Box(name, age){
//     this.name = name;
//     this.age = age;
//     this.run = function () {
//         return this.name + "--" + this.age;
//     }
// }
// var box1 = new Box("lee", 1000);
// var box2 = new Box("jsak", 200);
// alert(box1.run());
// alert(box2.run());
//1.构造函数没有new Object， 但它后台会自动var obj = new Object
//2.this就相当obj
//3.构造函数不需要返回对象引用,它是后台自动返回的,没有return

//1.构造函数也是函数,但函数名第一个字母要大写
//2.必须new 构造函数名(), new Box(), 而这个Box第一个字母也是要大写的
// 必须使用new 运算符

//解决问题:重复实例化问题,对象识别问题


// 对象冒充
// function Box(name, age){
//     this.name = name;
//     this.age = age;
//     this.run = function () {
//         return this.name + "--" + this.age;
//     }
// }
//
// var box = new Object();
// Box.call(box,"lee", 200000);
// alert(box.run());




//-------------------------- 原型(看图）
// ----1.常规构造函数创建原型对象
// function Box(){} // 构造函数,函数体内什么都没有,这里如果有,就叫做实例属性,实例方法
// Box.prototype.name = "lee";     // 创建原型属性
// Box.prototype.age = 3333;
// Box.prototype.run = function () {       // 创建原型方1法
//     return this.name + "--" + this.age;
// };

// var box = new Box();    // 创建新对象
// alert(box.name);
// box.name = "jack";      // 创建实例属性
// alert(box.name);
// delete box.name;    // 删除对象的属性
// alert(box.name);
// delete Box.prototype.run;   // 删除对象的方法
// alert(box.run());
// alert(Box.name.isPrototypeOf(box));

//理解:
// 相当于定义隐形的静态的属性和方法,称为原型属性和原型方法
// 因为是相当于静态的属性和方法,所以不管new 多少个对象,他们的原型属性和方法的地址都是一样的
// 当没有实例属性或方法,而有原型属性或方法时,调用的是原型属性或方法
// 当都有实例和原型的属性或方法时,调用的是实例的属性或方法,就近原则


// isPrototypeOf()方法测试一个对象是否存在另一个对象的原型链上
// var o={};
// function Person(){};
// var p1 =new Person();//继承自原来的原型，但是现在已经无法访问
// Person.prototype=o;
// var p2 =new Person();//继承自o
// alert(o.isPrototypeOf(p1));//false o是不是p1的原型
// alert(o.isPrototypeOf(p2));//true o是不是p2的原型



// hasOwnProperty()方法用来判断某个对象是否含有指定的自身属性
// var box = new Box();
// alert(box.hasOwnProperty('name'));      // 参数是字符串
// box.name = "jack";
// alert(box.hasOwnProperty('name'));


// in 运算符
// var box = new Box();
// alert('name' in box);   //只要有就返回true,不管是实例的还是原型的

//判断只有原型中有属性
// function isProperty1(object, property){
//     return !object.hasOwnProperty(property) && (property in object);
// }
// var box = new Box();
// alert(isProperty1(box, "name"));
// box.name = "jsj";
// alert(isProperty1(box, 'name'));



// ----2.使用字面量方法创建原型对象（看图）
// function Box(){} // 构造函数,函数体内什么都没有,这里如果有,就叫做实例属性,实例方法
// Box.prototype = {
//     name : "lee",     // 创建原型属性
//     age : 3333,
//     run : function () {       // 创建原型方1法
//         return this.name + "--" + this.age;
//     }
// };
// var box = new Box();


//出现问题：(版本不同,可能不会丢掉)使用字面量的方式定义属性或方法，当重新为对象赋值新的属性或方法是，会把原来的属性或方法丢掉，如下：
// alert(box.age); // 有值
// Box.prototype = {
//     name : "jack"
// };
// alert(box.run()); // 没有发现






//-------------------------- 扩展
// // --- 内置引用类型的功能扩展
// alert(String.prototype.addstring);  //false,不存在
// String.prototype.addstring = function(){
//     return this + "新的方法";
// }
// alert("lee".addstring());




//-------------------------- 原型的优点和缺点(看图)
// function Box() {
// }
// Box.prototype = {
//     constructor : Box,
//     name : "lee",
//     age : 3333,
//     family : ["哥哥", "姐姐", "妹妹"],
//     run : function () {
//         return this.name + "--" + this.age;
//     }
// };
// var box2 = new Box();
// alert(box2.family);
// box2.family.push("dd");
// alert(box2.family);
// var box = new Box();
// alert(box.family);      //

//--- 解决方法(看图):构造函数+原型模式




//-------------------------- 动态原型模式(看图)
// function Box(name, age){
//     this.name = name;
//     this.age = age;
//
//     if(typeof this.run != "function"){      // 要有判断
//         alert("kanshi");
//         Box.prototype.run = function (){
//             return this.name + "--" + this.age;
//         }
//     }
// }





//-------------------------- 继承(看图)

// 对象冒充解决的问题:传参问题

//组合继承解决的问题:代码重用


































































































































































































