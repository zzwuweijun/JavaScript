
//两种创建方式：
//1.使用NEW
//2.使用字面量

//
//var box = new RegExp('BOX');        // 第一个参数  字符串
//alert(box);

//var box = new RegExp('BOXj', 'ig');     //第二个参数  可选模式修饰符
//alert(box);


//          可选模式修饰符:
//          参数        含义
//          i            忽略大小写
//          g             全局匹配
//          m             多行匹配


//2.使用字面量

//var box = /box/;
//var box = /box/ig;


//-----------------------------------------     测试
// 有两个测试方法
//1.test()
//2.exec()

//var box = RegExp('box', 'i');
//str = "this if Box!";
//alert(box.test(str));

//str = "this if Box!";
//alert(/box/ig.test(str));


// var box = RegExp('box', 'ig');
// str = "this if Box!, box,and Box!!";
// alert(box.exec(str));




//-----------------------------------------     使用字符串的正则表达式方法

// 第一：String对象提供的4个使用正则表达式的方法
// 1.match(patterm)                         //找到一个或多个正则表达式的匹配。 返回的是数组
// 2.replace(patterm, replacement)          //替换与正则表达式匹配的子串。      返回的是索引值，误匹配则-1
// 3.search(pattem)                         //检索与正则表达式相匹配的值。        返回的是替换的值
// 4.split(pattem)                          //把字符串分割为字符串数组。     返回的是


// var pattern = /box/igm;
// var str = "this is box!, that is a Box!";
// var a = str.match(pattern);
// alert(a);
// alert(str.match(pattern));
//总结：match（）方法是使用定义好的规则查找字符串，规则定义方式符合正则表达式，直接把正则表达式传给match（）方法即可。


// var pattern = /box/igm;
// var str = "this is box!, that is a Box!";
// alert(str.search(pattern));
//总结：search（）方法是使用定义好的规则查找字符串，规则定义方式符合正则表达式，直接把正则表达式传给search（）方法即可。



// var pattern = /box/igm;
// var str = "this is box!, that is a Box!";
// alert(str.replace(pattern, "tomcat"));
//总结：可以看成是match（）方法的进阶版，查到符合则在表达式的字符串，使用其他的字符串进行代替



// var pattern = /is/igm;
// var str = "this is box!, that is a Box!";
// alert(str.split(pattern));
//总结：可以看成是match（）方法的进阶版，查到符合则在表达式的字符串，然后以查找到的字符串为分割点，
// 把整个字符串分割成对应的数组，不包括查找到的字符串

// var str = "this is box!, that is a Box!";
// alert(str.slice(1, 5));
// alert(str);
//总结：提取字符串的片断，并在新的字符串中返回被提取的部分。是半闭半开区间



//-----------------------------------------     RegExp 属性

// 第二：RegExp 对象的静态属性

// 属性                          短名              含义
// input                           $_              当前被匹配的字符串
// lastMatch                       $&              最后一个匹配字符串
// lastParen                       $+              最后一堆圆括号内的匹配子串
// leftContext                     $`              最后一次匹配前的子串
// multiline                       $*              用于指定是否所有的表达式都用于多行的布尔值
// rightContext                    $'              在上次匹配之后的子串

// ps: 必须执行一次正则表达式后，静态属性才能生效

// var pattern = /(g)oogle/i;
// var str = "this is google ! OK ?";
// pattern.test(str);
//
// alert(RegExp.input);
// alert(RegExp.lastMatch);
// alert(RegExp.lastParen);
// alert(RegExp.leftContext);
// alert(RegExp.multiline);
// alert(RegExp.rightContext);



// 第二：RegExp 对象的实例属性

// 属性                            含义
// global                          Boolean值，表示 g 是否已设置
// ignoreCase                       Boolean值，表示 i 是否已设置
// multiline                      Boolean值，表示 m 是否已设置
// Source                    正则表达式的源字符串形式
// lastIndex                      整数，代表下次匹配将从哪里字符位置开始


// var pattern = /(g)oogle/igm;
//
// alert(pattern.global);
// alert(pattern.ignoreCase);
// alert(pattern.multiline);
// alert(pattern.Source);
// alert(pattern.lastIndex);




//-----------------------------------------     RegExp  获取控制
// 正则表达式元字符是包含特殊含义的字符。他们由一些特殊功能，可以控制匹配模式的方式。反斜杠后的元字符将失去其特殊含义
// 看图片




//---------------- 非 exec 模式
// 1.使用 . 元字符
// 2.重复匹配----*，？，+，{m, n}
// 3.使用字符类匹配----例如 [a-zA-Z0-0]
// 4.使用元字符匹配----例如 \w  \W  \d  \D
// 5.使用锚元字符匹配
// var pattern = /^123abc$/;           // ^从开头匹配，$ 从结尾开始匹配
// var str = "123abc";
// alert(pattern.exec(str));

// 6.使用分组模式匹配
// 7.使用贪婪模式和惰性模式----惰性：再重复元字符后加上？


//----------------  使用exec

// 1.使用exec符合数组
// 2.捕获行分组和非捕获行分组
// var pattern = /(\d+)([a-z])/;           //捕获行分组
// var str = "123abc";
// alert(pattern.exec(str));

// var pattern = /(\d+)(?:[a-z])/;         //非捕获行分组，即匹配时起作用，但是再分组匹配时不起作用
// var str = "123abc";
// alert(pattern.exec(str));


// 3.使用分组嵌套
// var pattern = /(a?(b?(c?)))/;           //先整体，再从外往内获取
// var str = "abc";
// alert(pattern.exec(str));


// 4.使用前瞻捕获
// var pattern = /(goo(?=gle))/;           //goo 后面必须跟着 gle 才能捕获
// var str = "google";
// alert(pattern.exec(str));


// 5.使用特殊字符匹配
// var pattern = /\.\[\/b\]/;           //特殊字符，用\符合转义即可
// var str = ".[/b]";
// alert(pattern.exec(str));



//-----------------------------------------     RegExp  正则表达式的常用正则
// 1.检查邮件编码
// 规则：必须是6为，必须是数字，第一位不能为0
// var pattern = /[1-9][0-9]{5}/;
// var str = "246303";
// alert(pattern.exec(str));


// 2.检查文件压缩包
// 规则：从头匹配，文件名：字母，数字，_  ； 扩展名：zip,gz,rar,7z
// var pattern = /^[\w\-]+\.（zip|gz|tat|7z）/;     //0-9a-zA-Z_ 可用\w 代替
// var str = "2-31.zip";
// alert(pattern.test(str));


// 3.删除多余空格
// var pattern = /\s/g;                          // 要全局
// var str = "123 232 4534dfd dfdf dfd ";
// alert(str.replace(pattern, ''));


// 4.三次首尾空格
// 首
// var pattern = /^\s*/g;                        //
// var str = "    123   dfd   ";
// alert(str.replace(pattern, ''));
// alert(str);

// 尾
// var pattern = /\s*$/g;                        //
// var str = "    123   dfd   ";
// alert(str.replace(pattern, ''));
// alert(str);

// // 中间
// var pattern = /\s*(.*?)\s+ $/g;
// var str = "    123   dfd   ";
// alert(pattern.exec(str)[1]);                  // 使用惰性
// alert(str.replace(pattern, $1));                  // 使用分组
// alert(str);


// 5.简单的电子邮件验证
// 规则：从头匹配，文件名：字母，数字，_  ； 扩展名：zip,gz,rar,7z
// var pattern = /^([\w\.\-]+)@([\w\-]+)\.([a-zA-Z]{2,4})$/;
// var str = "yc60.com@gmail.com";
// alert(pattern.test(str));







