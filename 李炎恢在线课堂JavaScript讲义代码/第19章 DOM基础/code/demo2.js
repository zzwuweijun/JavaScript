






/*
	var box = document.getElementById('box');
	alert(box.innerHTML);										//��ȡ��ǰԪ�ؽڵ���ı�����(����HTML)
	
	var box = document.getElementById('box');
	box.innerHTML = '��ת<strong>JS</strong>';	//��ֵ�����Խ���HTML�����ǵ������ı���(������HTML)

	var box = document.getElementById('box');
	box.id = 'kkk';		//ֱ�ӵ��õ�����Ҳ���Ը�ֵ
	
	var li = document.getElementsByTagName('li');		//��������һ����ǩ������
	//alert(li);			//����һ�����鼯�ϣ�HTMLCollection
	//alert(li.length);	//����li���������
	//alert(li[0]);		//HTMLLIElement��li�Ľڵ����
	//alert(li.item(0));	//ͬ�ϣ�����һ�¡�HTMLLIElement
	//alert(li[0].tagName);	//LI
	//alert(li[0].innerHTML);	//1
	
	��ȡbody�ڵ����
	var body = document.getElementsByTagName('body')[0];
	//alert(body);				//���� HTMLBodyElement����body�ڵ�
	
	var all = document.getElementsByTagName("*");
	//alert(all.length); 
	
	//����������firebug�򿪺󣬻��Զ�����һ��div�����Ի����һ��
	
	alert(all[0].tagName);
	//IE������Ȼ���͹ȸ��һ���ڵ㣬�ǰ�<!���ĵ�����Ҳ���ȥ��
	
	//alert(all[0].innerHTML);
	
	var box = document.getElementsByName('test')[0];
	alert(box);
	
	//IE������ڻ�ȡ���Ϸ���HTML�е�nameʱ�����ȡ����
	//Ҳ����˵name ���Ա�����div������ԣ�����IE�ͺ��Ե���
	
	
	var input = document.getElementsByName('test')[0];
	alert(input.value);
	alert(input.checked);
	
	//input���кϷ���name���ԣ����ԣ�IEҲ��֧���ˡ�
	
	
	var box = document.getElementById('box');
	alert(box.bbb);		//�Զ��壬W3C���Ϸ�����IE��֧�֣���IE֧��
	
	alert(box.getAttribute('style'));		//��IE���ص���style�ַ�����IE���ص��Ƕ��������и�������

	alert(box.getAttribute('bbb'));	//�Զ��壬��ȫ��������
	
	//alert(box.className);
	//alert(box.getAttribute('class'));		//IE�޷���ȡ
	//alert(box.getAttribute('className'));//IE���Ի�ȡ����IE�޷���ȡ
	
	//���������ȡclassName
	if (box.getAttribute('className') == null) {
		alert(box.getAttribute('class'));
	} else {
		alert(box.getAttribute('className'));
	}
	
	var box = document.getElementById('box');
	//alert(box.onclick); //�����غ���ʽ
	alert(box.getAttribute('onclick'));	//IE7��һ�»᷵�غ���ʽ����IE�����ַ���
	
	//box.setAttribute('title', '����');		//����һ�����Ժ�����ֵ
	//box.setAttribute('align', 'center');
	//box.setAttribute('bbb', 'cccc');
	box.setAttribute('style', 'color:green');		//IE7�����£�style��onclickû��Ч��������ʹ��
*/

window.onload = function () {
	var box = document.getElementById('box');
	box.removeAttribute('style');
};































