




/*
	thead标签在一个表格里只能有一个
	tfoot标签在一个表格里只有有一个
	tbody标签在一个表格里有N个
	caption标签，在一个表格里只有一个
	tr标签，在一个表格里可以有N个
	td和th标签，在一个表格里可以有N个
	
	使用DOM来创建一个表格
	var table = document.createElement('table');
	table.width = 300;			//table.setAttribute('width', 300);
	table.border = 1;
	
	var caption = document.createElement('caption');
	table.appendChild(caption);
	//caption.innerHTML = '人员表';
	var captionText = document.createTextNode('人员表');
	caption.appendChild(captionText);
	
	var thead = document.createElement('thead');
	table.appendChild(thead);
	
	var tr = document.createElement('tr');
	thead.appendChild(tr);
	
	var th = document.createElement('th');
	tr.appendChild(th);
	
	th.appendChild(document.createTextNode('数据1'));
	
	var th2 = document.createElement('th');
	tr.appendChild(th2);
	th2.appendChild(document.createTextNode('数据2'));
	
	document.body.appendChild(table);
	
	//使用DOM去获取表格数据
	var table = document.getElementsByTagName('table')[0];
	//alert(table.children[0].innerHTML);		//不清晰
	//alert(table.children[2].children[1].children[1].innerHTML);		//超级烦，很不清晰
	var tbody = table.getElementsByTagName('tbody')[0];
	var tr = tbody.getElementsByTagName('tr')[1];
	var td = tr.getElementsByTagName('td')[1];
	alert(td.innerHTML);												//比较清晰，但超超烦
	
	
	var table = document.getElementsByTagName('table')[0];
	//alert(table.caption.innerHTML);			//清晰，方便，简单
	//table.caption.innerHTML = '是出表';
	
	//alert(table.tHead);
	
	//alert(table.tBodies[0]);
	
	//alert(table.rows.length);		//得到所有tr的行数
	
	//alert(table.tBodies[0].rows.length);
	//alert(table.tBodies[0].rows[0]);
	//alert(table.tBodies[0].rows[0].cells.length);
	
	//alert(table.tBodies[0].rows[1].cells[1].innerHTML);		//很清晰，很方便
	
	//table.deleteCaption();
	//table.deleteTHead();
	
	//table.tBodies[0].deleteRow(0);
	//table.tBodies[0].rows[0].deleteCell(1);
	
*/


window.onload = function () {
	var table = document.createElement('table');
	table.width = 300;
	table.border = 1;
	
	table.createCaption().innerHTML = '人员表';
	
	//table.createTHead();
	//var tr = table.tHead.insertRow(0);		//table.tHead就表示返回thead的引用，但不建议这么做，会混淆
	
	var thead = table.createTHead();
	var tr = thead.insertRow(0);
	tr.insertCell(0).innerHTML = '数据1';
	tr.insertCell(1).innerHTML = '数据2';
	tr.insertCell(2).innerHTML = '数据3';
	
	document.body.appendChild(table);
};





















