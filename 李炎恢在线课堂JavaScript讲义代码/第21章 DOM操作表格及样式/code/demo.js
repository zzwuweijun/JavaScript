




/*
	thead��ǩ��һ�������ֻ����һ��
	tfoot��ǩ��һ�������ֻ����һ��
	tbody��ǩ��һ���������N��
	caption��ǩ����һ�������ֻ��һ��
	tr��ǩ����һ������������N��
	td��th��ǩ����һ������������N��
	
	ʹ��DOM������һ�����
	var table = document.createElement('table');
	table.width = 300;			//table.setAttribute('width', 300);
	table.border = 1;
	
	var caption = document.createElement('caption');
	table.appendChild(caption);
	//caption.innerHTML = '��Ա��';
	var captionText = document.createTextNode('��Ա��');
	caption.appendChild(captionText);
	
	var thead = document.createElement('thead');
	table.appendChild(thead);
	
	var tr = document.createElement('tr');
	thead.appendChild(tr);
	
	var th = document.createElement('th');
	tr.appendChild(th);
	
	th.appendChild(document.createTextNode('����1'));
	
	var th2 = document.createElement('th');
	tr.appendChild(th2);
	th2.appendChild(document.createTextNode('����2'));
	
	document.body.appendChild(table);
	
	//ʹ��DOMȥ��ȡ�������
	var table = document.getElementsByTagName('table')[0];
	//alert(table.children[0].innerHTML);		//������
	//alert(table.children[2].children[1].children[1].innerHTML);		//���������ܲ�����
	var tbody = table.getElementsByTagName('tbody')[0];
	var tr = tbody.getElementsByTagName('tr')[1];
	var td = tr.getElementsByTagName('td')[1];
	alert(td.innerHTML);												//�Ƚ���������������
	
	
	var table = document.getElementsByTagName('table')[0];
	//alert(table.caption.innerHTML);			//���������㣬��
	//table.caption.innerHTML = '�ǳ���';
	
	//alert(table.tHead);
	
	//alert(table.tBodies[0]);
	
	//alert(table.rows.length);		//�õ�����tr������
	
	//alert(table.tBodies[0].rows.length);
	//alert(table.tBodies[0].rows[0]);
	//alert(table.tBodies[0].rows[0].cells.length);
	
	//alert(table.tBodies[0].rows[1].cells[1].innerHTML);		//���������ܷ���
	
	//table.deleteCaption();
	//table.deleteTHead();
	
	//table.tBodies[0].deleteRow(0);
	//table.tBodies[0].rows[0].deleteCell(1);
	
*/


window.onload = function () {
	var table = document.createElement('table');
	table.width = 300;
	table.border = 1;
	
	table.createCaption().innerHTML = '��Ա��';
	
	//table.createTHead();
	//var tr = table.tHead.insertRow(0);		//table.tHead�ͱ�ʾ����thead�����ã�����������ô���������
	
	var thead = table.createTHead();
	var tr = thead.insertRow(0);
	tr.insertCell(0).innerHTML = '����1';
	tr.insertCell(1).innerHTML = '����2';
	tr.insertCell(2).innerHTML = '����3';
	
	document.body.appendChild(table);
};





















