






/*
	navigator������window�����µ�
	alert(window.navigator);
	alert(navigator.appName);			//����������ƣ�������Բ��ܾ�ȷ��ȡ�������������
	alert(navigator.userAgent);			//�û������ַ�������ʾ�������Ϣ�Ķ���
	alert(navigator.platform);			//����ϵͳ,ƽ̨
	
	alert(BrowserDetect.browser);		//�����������
	alert(BrowserDetect.version);		//������İ汾
	alert(BrowserDetect.OS);			//���ڵ�ϵͳ

	//��IE7һ�µ�����������⴦��
	if (BrowserDetect.browser == 'Internet Explorer' && BrowserDetect.version < 7) {
		alert('��Ҫ��IE�Ͱ汾�ļ��ݣ�');
	}


//������

for (var i = 0; i < navigator.plugins.length; i ++) {
	document.write('�������' + navigator.plugins[i].name + '<br />');
	document.write('�ļ�����' + navigator.plugins[i].filename + '<br />');
	document.write('�衡����' + navigator.plugins[i].description + '<br />');
	document.write('<br />');
}

//����IE���������Ƿ����

function hasPlugin(name) {
	var name = name.toLowerCase();
	for (var i = 0; i < navigator.plugins.length; i ++) {
		if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
			return true;
		}
	}
	return false;
}


alert(hasPlugin('Flash'));


//���IE������Ŀؼ�
function hasIEPlugin(name) {
	try {													//�������������ȥִ��һ�δ��룬������󣬾�ȥִ��catch
		new ActiveXObject(name)			//�����name�����ǿؼ���Ψһ��ʶ��ID
		return true;									//���new �ɹ��ˣ�û�в���������ô�Ͳ�ȥִ��catch
	} catch (e) {
		return false;								//���new ʧ���ˣ���ִ��catch��������
	}
}


alert(hasIEPlugin('ShockwaveFlash.ShockwaveFlash'));


//����������Flash�Ƿ����

function hasPlugin(name) {
	var name = name.toLowerCase();
	for (var i = 0; i < navigator.plugins.length; i ++) {
		if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
			return true;
		}
	}
	return false;
}


function hasIEPlugin(name) {
	try {													
		new ActiveXObject(name)		
		return true;								
	} catch (e) {
		return false;								
	}
}


function hasFlash() {
	//���ȣ���ȥ����IE�������
	var result = hasPlugin('Flash');			//�������true��˵����⵽�ˣ����Ҳ���IE�����
	if (!result) {										//���û�м�⵽��˵����������û��flash�����������������IE�����
		result = hasIEPlugin('ShockwaveFlash.ShockwaveFlash');
	}
	return result;
}

alert(hasFlash());


*/



//mime����

//������IE ������MIME ������Ϣ
for (var i = 0; i < navigator.mimeTypes.length; i++) {
	if (navigator.mimeTypes[i].enabledPlugin != null) {
	document.write('<dl>');
	document.write('<dd>�������ƣ�' + navigator.mimeTypes[i].type + '</dd>');
	document.write('<dd>�������ã�' + navigator.mimeTypes[i].enabledPlugin.name +'</dd>');
	document.write('<dd>����������' + navigator.mimeTypes[i].description + '</dd>');
	document.write('<dd>���ͺ�׺��' + navigator.mimeTypes[i].suffixes + '</dd>');
	document.write('</dl>')
	}
}

















