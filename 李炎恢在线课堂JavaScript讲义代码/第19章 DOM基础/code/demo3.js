


/*
		var box = document.getElementById('box');
	//alert(box);
	//alert(box.nodeName);		//��ȡԪ�ؽڵ�ı�ǩ������tagName�ȼ�
	//alert(box.nodeType);		//��ȡԪ�ؽڵ������ֵ��1
	alert(box.nodeValue);		//Ԫ�ؽڵ㱾��û�����ݣ�null
	//node����ѽڵ�ָ�����Ԫ��<div></div>�ϣ�Ҳ����˵��������û��value
	//���Ҫ���<div>xxx</div>������������ı����ݣ���ôǰ��innerHTML
	alert(box.innerHTML);		//��ȡԪ�ؽڵ�������ı�����
	//nodeֻ�ܻ�ȡ��ǰ�ڵ�Ķ���
	
	�ı��ڵ�  ������  �ı�����
	
	//����Div<em>��б</em>��β���������Ԫ�ؽڵ���ı����ݣ�������һ������
	alert(box.innerHTML);
	
	//alert(box.childNodes);		//NodeList���ϣ����ص�ǰԪ�ؽڵ����е��ӽڵ��б�
	//alert(box.childNodes.length);	//3���ӽڵ�
	//3���ӽڵ�Ϊ������Div<em>��б</em>��β
	//��һ���ӽڵ�Ϊ������Div������ڵ����Ϊ���ı��ڵ�
	//�ڶ����ӽڵ�Ϊ��<em>��б</em>������ڵ����Ϊ��Ԫ�ؽڵ�
	//�������ӽڵ�Ϊ����β������ڵ����Ϊ���ı��ڵ�
	
	//alert(box.childNodes[0]);		//Object Text��ʾһ���ı��ڵ����
	//alert(box.childNodes[0].nodeType);	//3,��ʾ�ı��ڵ�
	//alert(box.childNodes[0].nodeValue);		//��ȡ�ı��ڵ���ı�����
	//alert(box.childNodes[0].innerHTML);		//undefined��Ч����ǰ���ı�����ô�����ҵ���������ݣ���
	//alert(box.childNodes[0].nodeName); 		//#text���ı��ڵ�û�б�ǩ��
	
	
	//ͨ���жϽڵ����ͣ�����ȡ��ͬ�����
	for (var i = 0; i < box.childNodes.length; i ++) {
		if (box.childNodes[i].nodeType === 1) {
			alert('Ԫ�ؽڵ㣺' + box.childNodes[i].nodeName);
		} else if (box.childNodes[i].nodeType === 3) {
			alert('�ı��ڵ㣺' + box.childNodes[i].nodeValue);
		}
	}
	
	
*/






window.onload = function () {
	var pox = document.getElementById('pox');
	//pox.innerHTML = '����<strong>Pox</strong>';
	//pox.nodeValue = '����Pox';	//û������û�и�ֵ�ϣ�nodeValue�����ڵ�ǰ�ڵ��ϲ���
	pox.childNodes[0].nodeValue = '����<strong>Pox</strong>';
};

























