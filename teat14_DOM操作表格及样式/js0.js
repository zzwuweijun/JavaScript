// --------------------------------- 操作表格
// ---------使用DOM啦创建表格
// ---创建表格
// window.onload = function(){
//     var table = document.createElement("table");
//     // table.width = 300;
//     table.border = 1;
//     table.setAttribute("width", "300");
//
//     var caption = document.createElement("caption");
//     table.appendChild(caption);
//     // caption.innerHTLM = "人员表";
//     var captionTxt = document.createTextNode("人员表");
//     caption.appendChild(captionTxt);
//
//     var thead = document.createElement("thead");
//     table.appendChild(thead);
//
//     var tr = document.createElement("tr");
//     thead.appendChild(tr);
//
//     var th = document.createElement("th");
//     thead.appendChild(th);
//     th.appendChild(document.createTextNode("数据1"));
//
//     var th2 = document.createElement("th");
//     thead.appendChild(th2);
//     th2.appendChild(document.createTextNode("数据2"));
//
//
//     document.body.appendChild(table);
//     //使用这种方法会很烦的
// }


// ---得到表格数据
// window.onload = function(){
//     // var box = document.getElementById("table");
//     // alert(box.children[2].children[1].children[1].innerHTML);       // 很烦,也不清晰
//
//     // var table = document.getElementsByTagName("table")[0];
//     // alert(table.children[2].children[1].children[1].innerHTML);
//
//     // var table = document.getElementsByTagName("tbody")[0];
//     // var tr = table.getElementsByTagName("tr")[0];
//     // var td = tr.getElementsByTagName("td")[0];
//     // alert(td.innerHTML);        // 很烦,清晰
// }


// ---使用HTML DOM来获取和创建表格(看图)
// var box = document.getElementById("table");
// alert(box.caption.innerHTML);
// alert(box.tHead.innerHTML);
// alert(box.tBodies[0].innerHTML);
// alert(box.rows.length);
// alert(box.rows[1].innerHTML);
// alert(box.tBodies[0].rows[1].innerHTML);
// alert(box.tBodies[0].rows[1].cells[1].innerHTML);

// box.deleteCaption();

// 创建表格
// var br = document.createElement("br");
// document.body.appendChild(br);  // 回车

// var table = document.createElement("table");
// table.width = 300;
// table.border = 1;

// table.createCaption().innerHTML= "人员表";

// var thead = table.createTHead();
// var tr = thead.insertRow(0);
// tr.insertCell(0).innerHTML = "数据1";
// tr.insertCell(1).innerHTML = "数据2";
// tr.insertCell(2).innerHTML = "数据3";

// document.body.appendChild(table);



// ---------------------------------操作样式
// 第一种Style行内式的操作方法
// -----------检测浏览器是否支持DOM1级CSS能力或DOM2级CSS能里
// ---
// alert("DOM1"+document.implementation.hasFeature("CSS", "2.0"));
// alert("DOM2"+document.implementation.hasFeature("CSS2", "2.0"));
// alert("DOM1"+document.implementation.hasFeature("HTML", "2.0"));
// alert("DOM1"+document.implementation.hasFeature("STYLE", "2.0"));

// -----------访问样式的内容
// var box = document.getElementById("box");
// alert(box.style.color);
// alert(box.style.background);

// -----------设置样式
// var box = document.getElementById("box2");
// box.style.color = "red";
// box.style.background ="#fde";


// -----------计算出的样式（看图）
// 第二种行内、内联和联接，使用getComputedStyle或currentStyle，但可读不可写
//getComputedStyle 方法可用来获取元素中所有可用的css属性列表，以数组形式返回，并且是只读的
// ---获取样式1
// 如果样式是使用内联式的方法引用，那么上面的方法将不管用了，如下：。
// var box = document.getElementById("box2");
// alert(box.style.color);
// 使用计算出的样式的放式：
// var style = window.getComputedStyle(box, null);
// alert(style.color);
// IE 不兼容，但是IE有提供了对应的方法：
// var style = box.currentStyle;
// alert(style.color);


// ---操作样式
// var box = document.getElementById("box");
// // box.id = "pox";
//
// // 判断classname是否存在（看图）
// function hasClass(element, cName){
//     return !!element.className.match(new RegExp("(\\s|^)"+cName+"(\\s|$)"))
// }
// hasClass(box, "aa");
//
// // 添加class
// function addClass(element, cName){
//     element.className += " " + cName;
// }
// addClass(box, "bbb");
// alert(box.className);
//
// // 移除一个class
// function removeClass(element, cName){
//     if(hasClass(element, cName)){
//         element.className = element.className.replace(new RegExp("(\\s|^)"+cName+"(\\s|$)"), " ")
//     }
// }
// setTimeout(function () {
//     removeClass(box, "bbb");
//     // alert(box.className);
// }, 2000)

// 上面的所有方法或属性都是行内、内联和链接式的，但第二种只可读，
// 要操作外联和内联式的样式，就要使用下面的方法：
// -----------得到link和style的样式表（外联和内联式）（看图）
// 第三种 cssRules 或 rules，用于内联和链接，可读可写
// --- 获取数据
// var link = document.getElementsByTagName("link")[0];
// // alert(link);
// var sheet = link.sheet || link.styleSheet;   // 跨浏览器
// alert(sheet);

// ---使用document提供的方法，更加简便的获取sheet的方法
// var sheet = document.styleSheets;
// alert(sheet);   // 结果：StyleSheetList

// var sheet = document.styleSheets[0];    // 选取了link元素
// alert(sheet);   // 结果：CSSStyleSheet
// alert(sheet.disabled);  // 是否禁用样式表，可直接设置
// alert(sheet.href);

// 重点（整体规则）：
// var sheet = document.styleSheets[0];    // 选取了link元素
// 1.得到规则：
// alert(sheet.cssRules);      //CSSRuleList, 是样式规则集合
// 样式的规则集合：一群样式的集合表示一个规则
// 得到第一个规则：
// alert(sheet.cssRules[0]);       //CSSStyleRule
// CSSStyleRule 可以使用的属性
// alert(sheet.cssRules[0].cssText);       // 得到规则的css文本
// alert(sheet.cssRules[0].selectorText);      // 得到规则的选择符

// 2.删除规则：
// sheet.deleteRule(0);
// setTimeout(function () {
// sheet.deleteRule("#box3");      // 删除第一个规则集合中的指定规则
//     // sheet.deleteRule(0);     // 删除第一个规则集合中的第一个规则
// }, 2000)

// 3.插入规则
// setTimeout(function (){
//     sheet.insertRule("body{background-color:blue;}", 0); //第二个参数：表示在那里插入规则的索引
// }, 2000)

// 4.IE浏览器对应的三个方法:
// rules;
// deleteRule(0);
// addRule("body", "background-color:blue;", 0);

// 5.兼容：
// var rules = sheet.cssRules || sheet.rules;      // 跨浏览器
// alert(!!sheet.insertRule);      // 判断浏览器是否可以使用该函数插入规则
// alert(!!sheet.addRule);
// alert(!!sheet.deleteRule);
// alert(!!sheet.removeRule);


// 重点（单个规则）：
// var sheet = document.styleSheets[0];
// var rules = sheet.cssRules || sheet.rules;
// var rule1 = rules[0];
// alert(rule1.style.color);
// rule1.style.color = "blue";
// alert(rule1.style.color);

















































































































































































































































