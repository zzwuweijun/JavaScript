

	var box = new Date(2007, 10, 15, 17, 22, 45, 15);
	alert(box);																	//Thu Nov 15 2007 17:22:45 GMT+0800������Ĭ�Ͼ͵���toString����
	alert('toString:' + box.toString());									//Thu Nov 15 2007 17:22:45 GMT+0800 
	alert('toLocaleString:' + box.toLocaleString());			//2007-11-15 17:22:45 PS�ȸ践�ص�Thu Nov 15 2007 17:22:45 GMT+0800 ���ػ��ĸ�ʽ
	alert('valueOf:' + box.valueOf());									//1195118565015��������ĺ�����

	var box = new Date(2007, 10, 15, 17, 22, 45, 15);
	alert(box.toDateString());  //���ض��ĸ�ʽ��ʾ���ڼ����¡��պ���
	alert(box.toTimeString());	//���ض��ĸ�ʽ��ʾʱ���֡����ʱ��
	alert(box.toLocaleDateString());  //���ض�������ʽ��ʾ���ڼ����¡��պ���
	alert(box.toLocaleTimeString());   //���ض�������ʽ��ʾʱ���֡����ʱ��
	alert(box.toUTCString());			//���ض��ĸ�ʽ��ʾ������UTC ���ڡ�

	box.setTime(100);   //��ȡ���ڵĺ���������valueOf()����һ��
	alert(box.getTime());  //�Ժ������������ڣ���ı���������
	box.setFullYear(2009);  //������λ��ݣ����ص��Ǻ�����
	alert(box.getFullYear()); //��ȡ��λ���
	box.setMonth(5);	  //�����·�
	alert(box.getMonth());  
	var box = new Date();
	alert(box.getMonth() + 1);//��ȡ�·ݣ�ûָ���·ݣ���0 ��ʼ����
	alert(box.getMonth() + 1); //�·�Ҫ��1�������յ��·�
	alert(box.getDate()); //��ȡ����
	alert(box.setDate(8)); //�������ڣ����غ�����
	alert(box.getDay()); //�������ڼ���0 ��ʾ�����գ�6 ��ʾ������
	alert(box.setDay(2)); //�������ڼ�
	alert(box.getHours()); //����ʱ
	alert(box.setHours(12)); //����ʱ
	alert(box.getMinutes()); //���ط���
	alert(box.setMinutes(22)); //���÷���
	alert(box.getSeconds()); //��������
	alert(box.setSeconds(44)); //��������
	alert(box.getMilliseconds()); //���غ�����
	alert(box.setMilliseconds()); //���ú�����											
	box.setUTCFullYear(2008);
	alert(box.getUTCFullYear());
	alert(box.getUTCHours()); //��������8��Сʱ�Ĳ�࣬����getUTCHous��getHous���8��Сʱ
	var box = new Date(2007, 10, 15, 10, 22, 45, 15);
	alert(box.getTimezoneOffset()); //���ر���ʱ���UTC ʱ�����ķ�����	
	var box = new Date();
	alert(box.getFullYear() + '-' + box.getMonth() + '-' + box.getDate() + ' ' + box.getHours() + ':' + box.getMinutes() + ':' + box.getSeconds());















