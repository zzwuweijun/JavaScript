


/*
	��������ģʽ��������
	1.��ֹ�����η����ּ������룬��ֹ�����ּ���Ĭ����Ϊ
	2.��֤��ȡ���������������Ƿ��ַ���Ȼ���жϺ�ȡ�����������ı�
	
	//���η����ּ�������
	addEvent(content, 'keypress', function (evt) {
		var e = evt || window.event;
		var charCode = getCharCode(evt);
		//alert(charCode);
		//alert(String.fromCharCode(charCode));
		//������ʽ����ȡ�ı��Ƿ�Ϊ����
		if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 8) {
			preDef(evt);			//���ε������ּ��̵�����
		}
		
		//PS��charCode > N��Nֻ���ڷſ������˸����ɾ�������ŵ�̫��ͻ��и���ļ����ͷ�
	});
	

	addEvent(content, 'copy', function (evt) {
		preDef(evt);
	});
	addEvent(content, 'cut', function (evt) {
		preDef(evt);
	});
	addEvent(content, 'paste', function (evt) {
		preDef(evt);
	});

	
	//�����������뷨����Chrome��Ч
	//content.style.imeMode = 'disabled';
	
	//PS���������뷨�û����鲻�Ǻܺã������û���Ϊ���Ի���
	
	//��֤���ݷǷ���ȡ������
	addEvent(content, 'keyup', function (evt) {
		this.value = this.value.replace(/[^\d]/g, '');		//�������ּ�ת��Ϊ��
	});
	
	
	//addEvent(content, 'beforecopy', function (evt) {
	//	alert('����ǰ��');
	//});
*/



addEvent(window, 'load', function () {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	
	
	addEvent(fm.elements['a1'], 'keyup', tabForWard);
	addEvent(fm.elements['a2'], 'keyup', tabForWard);
	addEvent(fm.elements['a3'], 'keyup', tabForWard);
	
	
	function tabForWard(evt) {
		var e = evt || window.event;
		//�жϵ�ǰ�ĳ����Ƿ����������ĳ����Ƿ�һ��
		if (this.value.length == this.maxLength) {
			//�������пؼ�
			for (var i = 0; i < fm.elements.length; i ++) {
				if (fm.elements[i] == this) {
					fm.elements[i + 1].focus();
					return;
				}
			}
		}
	}
	
});





























