



/*
	�ڵ��Ϊ���ࣺ
	1.Ԫ�ؽڵ㣺��ʵ���Ǳ�ǩ��<div></div>
	2.�ı��ڵ㣺��ʵ���Ǳ�ǩ�ڵĴ��ı�������Div
	3.���Խڵ㣺��ʵ���Ǳ�ǩ�����ԣ�id="box"
	
	����Ԫ�أ�
	getElementById();  ��������һ��Ԫ�ص�idֵ�������Ϳ��Ի�ȡ����Ԫ�ؽڵ�
	
	Ϊʲô���Ҳ���Ԫ�أ�
	DOM��������ȴ�HTML�ĵ�������ϣ��ſ��Ի�ȡ
	
	������ȡ��
	1.��<script>�ƺ�
	
	HTMLDivElement��ʾDiv�Ľڵ����
	
	IE����COMʵ�ֵ�DOM������ֻ�᷵��һ��object
	
	
	2.�ý�����ѧ����onload�¼���������HTML
	window.onload = function () {
		//�����ŵ���ҳ�������ݶ�������Ϻ���ִ�еĴ���
	};
	
	
	һ��ҳ��ֻ������һ��id����ʾΨһ�ԡ�
	getElementById�������ִ�Сд�����ⲻ����
	�����IE5.0-��������getElementById�����������ж�
	
	if (document.getElementById) {
		var box = document.getElementById('box');
		alert(box);
	} else {
		alert('��������������ݣ������~');
	}
	
	//alert(box.tagName);		//��ȡ���Ԫ�ؽڵ�ı�ǩ��
	//alert(box.innerHTML);		//��ȡ���Ԫ�ؽڵ�����ı�(����HTML��ǩ)�����ı����ܰ�����ǩ
	innerHTML��ȡ�������Ԫ�ص��ı����ݣ��������ı��ڵ�
	
	//alert(box.id);			//��ȡ���Ԫ�ؽڵ�id���Ե�ֵ��ע�ⲻ�����Խڵ�
	//alert(box.title);			//��ȡtitle���Ե�ֵ
	//alert(box.style);			//��ȡstyle���Զ���
	//alert(box.style.color);	//��ȡstyle���Զ�����color���Ե�ֵ
	//alert(box.class);			//ò���Ǳ�����
	//alert(box.className);	//��ȡclass���Ե�ֵ
	������HTML���Ե�ֱ�ӵ��ã���Ȼ���滹�м��ַ�ʽ���Ե���
	
	alert(box.bbb);				//�Զ������ԣ�ֱ�ӻ�ȡ����IE��֧��
	������������֧�֣���ô���������ݲ��������߾����ܲ�ȥʹ��
*/


window.onload = function () {
	var box = document.getElementById('box');
	
};




























