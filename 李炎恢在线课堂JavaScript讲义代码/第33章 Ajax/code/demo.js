


function createXHR() {
	if (typeof XMLHttpRequest != 'undefined') {
		return new XMLHttpRequest();
	} else if (typeof ActiveXObject != 'undefined') {
		var version = [
									'MSXML2.XMLHttp.6.0',
									'MSXML2.XMLHttp.3.0',
									'MSXML2.XMLHttp'
		];
		for (var i = 0; version.length; i ++) {
			try {
				return new ActiveXObject(version[i]);
			} catch (e) {
				//����
			}	
		}
	} else {
		throw new Error('����ϵͳ���������֧��XHR����');
	}
}


addEvent(document, 'click', function () {
	var xhr = createXHR();						//����XHR����
	xhr.open('get', 'demo.php?rand=' + Math.random(), false);	//׼������������get��ʽ����url��demo.php��ͬ��
	xhr.send(null);									//��������get����Ҫ�����ύ������дΪnull;
	if (xhr.status == 200) {
		alert(xhr.responseText);					//��ӡ�������˷��ػ���������
	} else {
		alert('��ȡ���ݴ��󣡴�����ţ�' + xhr.status + '��������Ϣ��' + xhr.statusText);
	}
});





//PS�����û����������˷���,firebug�޷�����ʾ�������send()��������firebug����ʾ�ѷ���
//PS��ͨ������¼������ϵ����������������Ȼ���������ʱʱ�ķ������µ����ݣ�����Ajax����
//PS��IE�������һ�λ�������������󣬻�ȡ�������ݣ����ڶ�������Ĭ�ϻ�ȡ�Ļ������ݣ��������ݲ������µ�
//PS����ô�����棿����ʹ��JS����ַ���























