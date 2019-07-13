


// 基本包装类型：String， Number， Boolean


// ----------------------------------- Number类型的属性和方法（看图片）
// var box  = 1990;
// alert(box.MAX_VALUE);   // 表示最大值
// alert(box.MIN_VALUE);   //表示最小值
// alert(box.NaN);         // 非数值
// alert(box.POSITIVE_INFINITY);       //无穷大，溢出返回该值
// alert(box.NEGATIVE_INFINITY);       //负无穷大，溢出返回该值
// alert(box.prototype);               // 原型，用于增加新属性和方法


// var box = 100.687;
// alert(typeof box);
// alert(typeof box.toString());
// alert(box.toLocaleString());
// alert(box.toFixed(2));   //保留小数位数,并转换成字符，四舍五入
// alert(box.toExponential());     //以指数形式，并转换字符串
// alert(box.toPrecision(9));   //根据参数来确定转换成点数或指数,必须在1  -  21的范围内，包括在内。






// ----------------------------------- String类型的属性和方法（看图片）
var box = "Mr.Lee+name+type";
// alert(box.length);
// alert(box.constructor);     // 返回创建String对象的函数
// alert(box.prototype);       // 通过添加属性和方法扩展字符串定义,原型在后面的面向对象与原型时讲


//字符串方法
// alert(box.charAt(2));   // 返回指定索引位置的字符
// alert(box.charCodeAt(1));       //以Unicode编码形式返回指定索引位置的字符(acssii码)



//字符串操作方法
// alert(box.concat("name"));
// alert(box.slice(2, 4));     // 返回字符串N到M之间位置的字符串
// alert(box.split("e", 3));   //提取符合正则之外的字符串,并可以设置符合规则的个数(限制 limit)
// alert(box.substring(2, 6));      // 返回字符串N到M之间位置的字符串
// alert(box.substr(2, 6)); // // 返回索引N的M个字符串
//注意,slice,subString,substr三个方法的多级使用,都有只有一个参数的使用,都有参数为负值的使用



//字符串的位置操作方法
// alert(box.indexOf("+"));        // 返回从初始位置所属L第一次出翔的位置
// alert(box.lastIndexOf("+"));        // 返回从末尾位置所属L第一次出翔的位置
// alert(box.indexOf("+", 7));         // 从第7个位置开始搜索+第一次出现的位置
// alert(box.lastIndexOf("+", 7));         // 从第7个位置开始向前搜索+第一次出现的位置
// alert(box.indexOf("o"));        //找不到,返回-1;



//字符串大小写转换方法
// alert(box.toLowerCase());   //转小写
// alert(box.toUpperCase());



//字符串的模式匹配方法
// match()          // 找到就返回找到的字符,否则返回Null
// replacer()       // 替换
// split()          // 以匹配到的字符作为标记,把字符串分隔成字符数组
// search()         // 找到则返回字符的搜索位置,和indexOf类似




//字符串的其他方法
// fromCharCode();
// localeCompare();         //两个字符串进行比较



























































