


/*
	value�Ļ�ȡ
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	
	alert(user.value);			HTML DOM��ȡ
	alert(content.value);
	
	PS����HTML��input��value���ԣ�textareaû��value����
	PS����js��input �� textarea����value����
	
	//ʹ�ñ�׼DOM��ȡ
	//alert(user.getAttribute('value'));
	//alert(content.getAttribute('value'));		//�����Ի������⣬IE���Ի�ȡ����IE��ȡ����
	
	//alert(user.getAttribute('value'));				//��׼DOM�޷���ȡ���ĺ��value
	alert(user.value);
	
	alert(user.defaultValue);			//��ȡһ��ʼ��valueֵ������ı�
	
	
	user.select();		//ѡ���ı�
	
	//ѡ�񲿷��ı�
	//user.setSelectionRange(2,3);		//�ӵ�0��λ�õ���1��λ�õ��ı�
	//user.setSelectionRange(0,user.value.length);
	//user.focus();			//��������
	
	
	//PS����IE�ӵ�N������M��λ��
	
	//IE�ı���Χ�ĸ�����֪ʶ������û�н�����������ȼ���һ��
	//W3CҲ��һ����Χ�ĸ������DOM��Χ���Ժ���ʱ��ϵͳ�Ľ���
	

	var range = user.createTextRange();		//range�����ı���Χ
	range.collapse(true);							//���ı�ָ���Ƶ���ͷ
	range.moveStart('character',2);			//�����ƶ���0
	range.moveEnd('character',1);			//ͬ��
	range.select();

	
	//PS��IE�Ǵӵ�N����ʼѡ��M��
	
	//�������ѡ�������ı�
	function getSelectText(text, start, num) {
		if (text.setSelectionRange) {
			text.setSelectionRange(start,num);
			text.focus();
		} else if (text.createTextRange) {
			var range = text.createTextRange();		
			range.collapse(true);							
			range.moveStart('character',start);			
			range.moveEnd('character',num - start);				//������λ�� - ��ʼ��λ�� = ����		
			range.select();
		}
	}
	
	
	getSelectText(user, 1, 3);
*/



addEvent(window, 'load', function () {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	
	//select �¼�
	addEvent(user, 'select', function () {
		//alert(this.value);
		//alert(this.selectionStart);
		//alert(this.selectionEnd);
		//alert(this.value.substring(this.selectionStart, this.selectionEnd));
		//alert(document.selection.createRange().text);
		document.getElementById('p').innerHTML = getSelectText(user);
	});
	
	function getSelectText(text) {
		if (typeof text.selectionStart == 'number') {
			return text.value.substring(text.selectionStart, text.selectionEnd);
		} else if (document.selection) {
			return document.selection.createRange().text;
		}
	}
	
	//��IEѡ���ı����ͷ����󴥷�select�¼�
	//IE��ֻҪѡ����һ���ַ����ʹ���select�¼���������ٶȱȽϿ죬�Ϳ���ѡ�����������ȶ�
	
	//document.selection�������ѡ��
	//document.selection��һ���������Դ����ı���Χ����createRange();
	//createRange()��һ��������text�����Եõ���ѡ����ı�
	
});





























