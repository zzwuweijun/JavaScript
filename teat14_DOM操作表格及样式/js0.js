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
var br = document.createElement("br");
document.body.appendChild(br);  // 回车

var table = document.createElement("table");
table.width = 300;
table.border = 1;

table.createCaption().innerHTML= "人员表";

var thead = table.createTHead();
var tr = thead.insertRow(0);
tr.insertCell(0).innerHTML = "数据1";
tr.insertCell(1).innerHTML = "数据2";
tr.insertCell(2).innerHTML = "数据3";




document.body.appendChild(table);
























// --------------------------------- 操作样式
// ---------
// ---

















































































































































































































































