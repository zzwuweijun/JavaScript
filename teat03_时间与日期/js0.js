
//++++++++++++++++++       1. Date 类型


//var box = new Date();  // 创建一个日期对象,是构造方法，返回当前时间格式
//alert(box); // 结果：Fri Jun 28 2019 22:03:34 GMT+0800 (中国标准时间)


//parse() // 方法是静态方法，输入事件格式，返回输入当前事件到1970/1/1之间的毫秒数
//alert(Date.parse('3/2/2019 ')); //结果：1551456000000


//var box = new Date(Date.parse('3/11/2019'));    // 包毫秒传给Date对象的构造方法，返回事件格式
//alert(box);         //结果： Mon Mar 11 2019 00:00:00 GMT+0800 (中国标准时间)


//var box = new Date(1551456000000);    // 直接放置毫秒的整形数据也行
//alert(box);         //结果：Sat Mar 02 2019 00:00:00 GMT+0800 (中国标准时间)

//var box = new Date('3/11/2019');    // 直接放置事件的格式，默认后台调用Date。parse（）
//alert(box);         //结果：Mon Mar 11 2019 00:00:00 GMT+0800 (中国标准时间)


//Date.parse()有三种方式实现时间
//第一：'3/11/2019'
//第二：'May 3, 2019'
//第三：'Mon Mar 11 2019 00:00:00 GMT+0800'





//-----------------------------------------------------------
//Date.UTC()        // 同样也返回表示日期的毫秒数，与parse（）在构造值时使用不通过的信息。
// （年份，基于0月份【0表示1月，1表示2月】，月中的那一天【1-31】，小时数【0-23】，分钟，秒以及毫秒）
// 只用前两个参数是必须的。如果没有提供月数，则天数为1，如果省略其他参数，则统统为0；

//alert(Date.UTC(2011, 11, 14));        // 返回毫秒数


// UTC世界协调时间， 他会按照他的区域基准来计算
//var box = new Date(Date.UTC(2019, 5, 28, 22, 30, 45));
//alert(box);         //结果：Sat Jun 29 2019 06:30:45 GMT+0800 (中国标准时间)


//如果不是哟个UTC，那么就会返回本地时间
//var box = new Date(2019, 5, 28, 22, 30, 45);
//alert(box);         //结果：Fri Jun 28 2019 22:30:45 GMT+0800 (中国标准时间)





//************************ end    方法是静态方法



//*************************  start    动态方法


//+++++++++++++++++++++++++        2.通用方法
//toLocaleString（）
//toString（）
//valueOf（）

//var box = new Date(2019, 5, 28, 22, 30, 45);
//alert(box);                                         //结果：Fri Jun 28 2019 22:30:45 GMT+0800 (中国标准时间)
//alert("toString:"+ box.toString());                 //结果：Fri Jun 28 2019 22:30:45 GMT+0800 (中国标准时间)
//alert("toLocaleString:" + box.toLocaleString());    //结果：2019/6/28 下午10:30:45
//alert("valueOf:" + box.valueOf());                  //结果：1561732245000







//++++++++++++++++++++++++          3.格式化方法


//var box = new Date(2019, 5, 28, 22, 30, 45);
//alert(box.toDateString());                  //结果：Fri Jun 28 2019
//alert(box.toTimeString());                  //结果：22:30:45 GMT+0800 (中国标准时间)
//alert(box.toLocaleDateString());            //结果：2019/6/28
//alert(box.toLocaleTimeString());            //结果：下午10:30:45
//alert(box.toUTCString());                   //结果：Fri, 28 Jun 2019 14:30:45 GMT








//++++++++++++++++++++++++          4.组件方法

// 是为我们单独获取你想要的各种时间/日期二提供的方法。
// 需要注意的时候，这些方法中，有带UTC的，有不逮UTC的。
// UTC日期指的是在没有时区偏差的情况下的日期值

//组件方法有getter 方法 和 setter 方法， 是一一对应的
//getTime()               // 获取日期的毫秒数，和valueOf()一样
//getFullYear()           // 获取四位年份
//getMonth()              // 获取月份，没指定月份，从0开始算起
//getDate()               // 获取日期
//getDay()                // 返回星期几，0表示星期日，6表示星期6
//getHours()              // 返回时
//getMinutes()            // 返回分钟
//getSeconds()            // 返回秒
//getMilliseconds()       // 返回毫秒
//getTimezoneOffset()     // 返回本地时间和UTC时间相差的分钟数


//var box = new Date(2019, 5, 28, 22, 30, 45, 999);
//alert(box.getTime());
//alert(box.getFullYear());
//alert(box.getMonth());
//alert(box.getDate());
//alert(box.getDay());
//alert(box.getHours());
//alert(box.getMinutes());
//alert(box.getSeconds());
//alert(box.getMilliseconds());
//alert(box.getTimezoneOffset());

// 当前时间看看
var box = new Date();
alert(box.getTime()+ "豪秒数");
alert(box.getFullYear());
alert(box.getMonth() + 1);          // 因为时从0开始的，所以要加1
alert(box.getDate());
alert(box.getDay() + "星期几");
alert(box.getHours());
alert(box.getMinutes());
alert(box.getSeconds());
alert(box.getMilliseconds());
alert(box.getTimezoneOffset());


























