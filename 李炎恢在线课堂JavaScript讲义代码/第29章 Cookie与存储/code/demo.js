




/*
	alert(typeof document.cookie);
	
	//�򱾵ش���д��cookie
	document.cookie = 'user=���׻�';
	alert(document.cookie);

	//PS�����ز������������������Ϊ��
	
	//����
	document.cookie = 'user=' + encodeURIComponent('���׻�');		//����Ѿ�д������ˣ����Բ�Ҫ���Ҳ���Ի�ȡcookie
	alert(decodeURIComponent(document.cookie));
	
	����ʱ�䣬���ǵ������ʱ��㣬�ͻ��Զ�����cookie
	�ڻỰ����ʱ�����ǹر����������Զ�����cookie��
	
	�����������رպ󣬻����cookie��ɾ���ˣ�
	����Ӱ�������������cookie����Ϊÿ������������Ա������Լ���cookie����ͨ��һ��cookie
	
	var date = new Date();
	date.setDate((date.getDate() + 7));
	document.cookie = 'user=' + encodeURIComponent('���׻�') + '; expires=' + date;	
	���������ʱ��㣬��ôcookie�ͱ�������
	����Ϊ��ǰʱ���֮ǰʱ�䣬�����ֹ����� cookie
	
	var date = new Date();
	date.setDate((date.getDate() - 1));		//ɾ��cookie������������ɾ����
	document.cookie = 'user=' + encodeURIComponent('���׻�') + '; expires=' + date;
	
	alert(new Date(0));
	document.cookie = 'user=' + encodeURIComponent('���׻�') + '; expires=' + new Date(0);
	
	
	path ·�����ƣ��������Ʒ���cookie��Ŀ¼
	var path = '/E:/%E5%A4%87%E8%AF%BE%E7%AC%94%E8%AE%B0/JS1/29/demo';
	document.cookie = 'user=' + encodeURIComponent('���׻�') + '; path=' + path;
	alert(decodeURIComponent(document.cookie));
	//����������д��cookie�����ǻ��ǿ��Ի�ȡcookie��
	
	domain ������������
	
	secure ָ������ͨ��https��ͨ�ŷ���
	���޼������ӣ���ȫ�Ը��ã��������͵�����
	
	������ʽ
	document.cookie = 'user=ֵ; [expires=ʧЧʱ��; path=·������; domain=��������; secure=��ȫ��https����ͨ��]'
*/



	document.cookie = 'user=' + encodeURIComponent('���׻�');
	alert(decodeURIComponent(document.cookie));




















