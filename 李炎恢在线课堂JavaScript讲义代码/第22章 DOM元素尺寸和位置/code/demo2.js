

/*
	����ʵ�ʴ�С
	alert(box.scrollWidth);
	alert(box.scrollHeight);
	
	//IE�������ָ���ĸ߶��»�ȡscrollHeight�����Ϊ��ȡ��Ч���ݵĸ߶�
	//����ı�����ˣ�û�ӹ���������ͬ�������Ҳ��̫����
	//��������Ϲ����������ɼ���
	
	Ԫ��ʵ�ʴ�С
	alert(box.offsetWidth);
	alert(box.offsetHeight);
	
	�߿��С
	alert(box.clientTop);
	alert(box.clientLeft);
	
	ƫ��
	//alert(box.offsetTop);
	//alert(box.offsetLeft);
	
	//alert(box.offsetParent);
	
	//IE��������ĸ��ϵĸ�Ԫ��ΪHTML����IE���ĸ��ϵĸ�Ԫ��ΪBODY�������ⲻ��
	//���û�����ö�λ��������
	
	//���box����ҳ���ֱ�ӵľ���
	
	
	//alert(box.offsetTop + box.offsetParent.offsetTop);
	
	alert(offsetTop(box));
	
	
function offsetTop(element) {
	var top = element.offsetTop;		//��һ��ľ���
	var parent = element.offsetParent;
	
	while (parent !== null) {
		top += parent.offsetTop;
		parent = parent.offsetParent;
	}
	
	return top;
}

	
*/



window.onload = function () {

	var box = document.getElementById('box');
	//alert(box.scrollTop);
	//alert(box.scrollLeft);
	//box.scrollTop = 100;
	//alert(box.scrollTop);
	
	//box.scrollTop = 34;
	
	scrollStart(box);
	
};


function scrollStart(element) {
	if (element.scrollTop != 0) element.scrollTop = 0;
}























