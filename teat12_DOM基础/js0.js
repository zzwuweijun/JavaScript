

// --------------------------------------DOM介绍(看图)
// ------------节点(看图)
// ------------节点种类(看图)
// ---元素节点:其实就是标签,<div></div>
// ---文本节点:其实就是标签内的纯文本
// ---属性节点:标签的属性


// --------------------------------------查找元素
// ------------getElementById();
// var box = document.getElementById("box");
// alert(box.innerText);

// ---封装,页面加载完后才执行
// window.onload = function (){
//     var box = document.getElementById('box');
//     alert(box);
// }

// ---得到元素节点的属性
// window.onload = function (){
//     var box = document.getElementById('box');
//     // alert(box.tagName);
//     // alert(box.innerHTML);   // 节点的文本
// }

// ---HTML节点的属性
// window.onload = function (){
//     var box = document.getElementById('box');
//     // alert(box.id);
//     // alert(box.title);
//     // alert(box.className);
//     // alert(box.style);
//     alert(box.style.color);
// }

// ---自定义属性
// window.onload = function (){
//     var box = document.getElementById('box');
//     alert(box.bbb); // 非IE不支持(待定中)
// }

// ---修改
// window.onload=function (){
//     var box = document.getElementById('box');
//     box.innerHTML = "llll";
// }


// ------------getElementByTagName():返回一个对象数组,里面保存这所有相同元素名的节点列表
// ---得到信息
// window.onload=function (){
//     var box = document.getElementsByTagName("li");
//     // alert(box);
//     // alert(box.length);
//     // alert(box[0]);
//     // alert(box.item(0)); //同上,意义一致
//     // alert(box.item(1).tagName);
//     // alert(box[2].innerHTML);
// }

// ---修改信息
// window.onload=function (){
//     var box = document.getElementsByTagName("li");
//     box.item(0).innerHTML = "8333";
// }

// ---获取body节点对象
// window.onload=function (){
//     var box = document.getElementsByTagName("body")[0];
    // alert(box);
// }

// ---获取所有对象节点
// window.onload=function (){
//     var box = document.getElementsByTagName("*");
//     // alert(box);
//     //     alert(box.item(0).tagName);
// }


// ------------getElementsByName():获取相同名称(name)的元素
// --- 要元素里有name属性才好,要不然有的浏览器不支持,如IE
// window.onload=function (){
//     var input = document.getElementsByName("test")[0];
//     // alert(input);
//     // alert(input.checked);
// }


// ------------getAttribute()(看图)
//和直接使用 .属性 获取的属性值有一定差别(看图),例如自定义的属性
// ---得到自定义的属性值
// window.onload=function (){
//     var box = document.getElementById("box");
//     // alert(box.bbb);      //自定义的不能直接得到
//     // alert(box.getAttribute("bbb"));     // 能够得到自定义的属性值
//     document.getElementBy
//
// }


// ------------setAttribute()(看图)
// 设置属性值,
// ---
// window.onload=function () {
//     var box = document.getElementById("box");
    // box.setAttribute("title", "jijiijij");
    // box.setAttribute("align", "center");
    // box.setAttribute("bbb", "ccc");
    // box.setAttribute("style", "color:green");
// }


// ------------removeAttribute():移除属性
// ---测试
// window.onload=function () {
//     var box = document.getElementById("box").removeAttribute("style");
// }



// --------------------------------------DOM节点(看图)
// ------------node 节点属性(看图)
// 分为元素节点,属性节点,文本节点
// ---test(看图)
// window.onload=function () {
//     var box = document.getElementById("box1");
    // alert(box);
    // alert(box.nodeName);
    // alert(box.nodeType);
    // alert(box.nodeValue);
    // alert(box.innerText);   //innerText 和 innerHTML 的区别
    // alert(box.innerHTML);
// }



// ------------层次节点属性(看图)
// 父节点,子节点,兄弟节点
// ---chlidNodes属性(看图)---文本也算是一个节点
// window.onload=function () {
//     var box = document.getElementById("box1");
//     // alert(box.childNodes.length);
//     // alert(box.childNodes);
//     // alert(box.childNodes.item(0));
//     // alert(box.childNodes.item(0).nodeName);
//     // alert(box.childNodes[0].nodeValue);
//     // alert(box.childNodes[0].nodeType);
// }

// ---firstChild属性

// ---ownerDocument属性

// ---lastChild属性

// ---parentChild属性

// ---attributes属性

// ---previousSibling属性

// ---nextSibling属性
// window.onload=function () {
//     var box = document.getElementById("box1");
//     alert(box.childNodes[1].nextSibling.nodeValue);
// }


// --------------------------------------节点操作(看图)
//创建,复制,插入,删除,替换
// ------------插入
// ---write():会覆盖以前的
// window.onload=function () {
//     document.write("jiejdo");
// }

// ------------创建
// --- createElement()
// window.onload=function () {
//     document.createElement("div");  // 只是创建了一个元素节点p,还美誉添加到文档中,只是驻留在内存中
// }

// ---appendChild()方法
// 将一个新节点添加到某一个节点的子节点列表的末尾上
// window.onload=function () {
//     var box = document.getElementById("box1");
//     var p =  document.createElement("p");  // 只是创建了一个元素节点p,还美誉添加到文档中,只是驻留在内存中
//     box.appendChild(p);     //  将新节点p添加到id="box1"的div里的子节点列表的末尾上
// }

// ---createTextNode()
//创建文件节点
// window.onload=function () {
//     var box = document.getElementById("box1");
//     var p =  document.createElement("p");  // 只是创建了一个元素节点p,还美誉添加到文档中,只是驻留在内存中
//     box.appendChild(p);     //  将新节点p添加到id="box1"的div里的子节点列表的末尾上
//
//     var text = document.createTextNode("新创建的文本");
//     p.appendChild(text);        // 把文本添加到P里面
//
// }

// ---insertBefore()
// 两个参数,第一个为要创建的新节点,第二个为目标节点
// window.onload=function () {
//     var box = document.getElementById("box1");
//     var p = document.createElement("p");
//     box.parentNode.insertBefore(p, box);        //在box的父节点添加一个p,就是在box前面添加一个元素节点
//     // 必须先返回到父节点上,才能在该节点前添加一个元素
// }

// ---insertBefore(),使用该方法在目标元素后面添加一个元素
// window.onload=function () {
//     var box = document.getElementById("box1");
//     var p = document.createElement("p");
//     p.setAttribute("style", "color:red");
//     p.innerText="看见艰苦看见";
//     box.parentNode.insertBefore(p, box.nextSibling);
// }

// ---浏览器的createElement()兼容
// https://zisetoufa.iteye.com/blog/1833965

// ------------替换
// ---repalceChild()
// window.onload=function () {
//     var box = document.getElementById("box1");
//     var p = document.createElement("p");
//     p.innerText="看见艰苦看见";
//     box.parentNode.replaceChild(p, box);
//     // 必须先返回到父节点上,才能在替换该节点
// }

// ------------移除
// ---removeChild()
// window.onload=function () {
//     var box = document.getElementById("box1");
//     box.parentNode.removeChild(box);
//     // 必须先返回到父节点上,才能移除该节点

// }



// ------------复制
// window.onload=function () {
//     var box = document.getElementById("box1");
//     var clone = box.firstChild.cloneNode(true); //true 克隆标签和内容,false 只克隆标签
//     box.appendChild(clone);
// }



// --------------------------------------移除空白节点
function removeeWhiteNode(node) {
    for(var i = 0; i< node.childNodes.length; i++){
        if(node.childNodes[i].nodeType == 3 && /^\s+$/.test(node.childNodes[i].nodeValue)){
            node.childNodes[i].parentNode.removeChild(node.childNodes[i]);
        }
    }
    return node;

}




















































































































































































































