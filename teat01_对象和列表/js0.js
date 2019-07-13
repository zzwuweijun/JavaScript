// 数组
// alert(2343);

var test = [2, 3, 45, 5, "33434", 'i', 45, 5];

// pop()
// 删除数组的最后一个元素，减少数组的长度，返回删除的值。（无参）
// test.pop();
// alert(test);

// push()
// 将参数加载到数组的最后，返回新数组的胀肚。（参数不限）
// test.push(111);
// test.push(444, "iej");
// alert(test);


// shift()
// 删除数组的第一个元素，数组长度减一，返回删除的之
// test.shift();
// alert(test.shift());
// alert(test);


// unshift()
// 向数组头部添加一个或更多的元素，并返回新的长度
//alert(test.unshift());
//alert(test);

// sort()
//暗示顶的参数对数组尽心排序，返回的之时经过排序之后的数组（无参/函数）
//alert(test);
//alert(test.sort());
//alert(test);

//concat()
//把两个数组拼接起来。 返回的值是一个副本 （参数不限）
//alert(test.concat(33, 232, 4454));
//alert(test);        // 不是引用，是传值的方式

//join（）
//将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符
//alert(test.join("|\\\\+"));
//alert(test);

//indexOf()
//从数组开头向后查找，接受两个参数，要查找的项(可选)和查找起点位置的索引
//alert(test.indexOf(45, 3));// 下表是从0到后的
//alert(test.indexOf(45));

//lastIndexOf()
//	从数组末尾开始向前查找，接受两个参数，要查找的项(可选)和查找起点位置的索引?
//alert(test.lastIndexOf(45, 6)); // 下表是从0到后的
//alert(test.lastIndexOf(45));

//every（）
//对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。
//tt = [33,12,22,35,6,223,34];
//function ff(tt){
//    return tt > 1;
//}
//alert(tt.every(ff));


//filter()
//对数组中的每一项运行给定函数，返回该函数会返回true的项组成数组。
//tt = [33,12,22,35,6,223,34];
//function ff(tt){
//    return tt > 30;
//}
//alert(tt.filter(ff));


//forEach()
//对数组的每一项运行给定函数，这个方法没有返回值。
tt = [33,12,22,35,6,223,34];
function ff(tt){
    alert(tt)
}
alert(tt.forEach(ff))


//map()


//some()


//reduce()


//reduceRight()


//slice()


//splice()



