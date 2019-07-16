// -------------------------------获取元素CSS大小(优缺点看图）
// -----第一种方法（行内）
// var box = document.getElementById("box");
// alert(typeof box.style.width);
// alert(box.style.width);

// -----第二种方法（计算后的方法）
// var style = window.getComputedStyle ? window.getComputedStyle(document.getElementById("box", null)):null;
/*|| document.getElementById("box").currentStyle*/;
// alert(style.width);

// -----第三种方法（使用cssRules  || rules）
// var style = document.styleSheets[0];
// var rule = (style.cssRules|| style.rules)[0];
// alert(rule.style.width);


// -------------------------------获取元素实际大小（看图)
// -----使用clientWidth和clientHeight属性
// 但是只能获取值，没有单位，默认是px，如果设置的是其他的单位，会自动转换成px单位，并计算其值
// var box = document.getElementById("box");
// alert(box.clientWidth);
// alert(box.clientHeight);

// 改变边框的大小，看是否改变值
// alert(box.clientWidth);     // 没有改变
// alert(box.clientHeight);

// 添加外边距，没有改变实际大小
// alert(box.clientWidth);
// alert(box.clientHeight);

// 添加内边距，有改变实际大小
// var box = document.getElementById("box1");
// alert(box.clientWidth);
// alert(box.clientHeight);

// 添加滚动条，会减少实际大小，减少部分用来做滚动条，并不算滚动条部分的值
// alert(box.clientWidth);
// alert(box.clientHeight);


// -----使用scrollWidth和scrollHeight（看图）
// 获取滚动条内容的元素大小
// var box = document.getElementById("box2");
// alert(box.scrollWidth);
// IE浏览器在指定的高度下获取scrollHeight会理解为获取有效内容的高度，即18
// alert(box.scrollHeight);

// 添加边框、外边距、内边距和滚动条在不同浏览器的具体结果（看图）


// -------- 使用offsetWidth和offsetHeight（看图）
// var box = document.getElementById("box3");
// alert(box.offsetWidth);
// alert(box.offsetHeight);



// -------------------------------获取元素周边大小（相当于元素位置）（看图）
// ---- clientTop/clientLeft

// ---- offsetTop/offsetLeft

// ---- scrollTop/ scrollLeft
// 可以获取滚动条被隐藏的区域大小，也可设置定位到该区域
// var box = document.getElementById("box4");
// alert(box.scrollTop);
// alert(box.scrollLeft);
// box.scrollTop = 100;
// alert(box.scrollTop);

// 设置滚动条拉到最低
// height = box.offsetHeight;
// alert(height);
// box.scrollTop = height;
// alert(box.scrollTop);





