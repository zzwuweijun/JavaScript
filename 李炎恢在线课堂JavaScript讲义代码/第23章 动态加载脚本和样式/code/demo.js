

/*
	var box = document.getElementById('box');
	//alert(box.getBoundingClientRect().top);
	//alert(box.getBoundingClientRect().right);
	//alert(box.getBoundingClientRect().bottom);
	//alert(box.getBoundingClientRect().left);
	
	//alert(document.documentElement.clientTop + ',' +document.documentElement.clientLeft);
	
	alert(getRect(box).top);
	alert(getRect(box).right);
	alert(getRect(box).bottom);
	alert(getRect(box).left);
	
	
function getRect(element) {
	var rect = element.getBoundingClientRect();
	var clientTop = document.documentElement.clientTop;
	var clientLeft = document.documentElement.clientLeft;
	
	return {
		top : rect.top - clientTop,
		bottom : rect.bottom - clientTop,
		left : rect.left - clientLeft,
		right : rect.right - clientLeft
	};
	
}

//alert(typeof BrowserDetect);

alert(typeof BrowserDetect);

var flag = true;						//���flagΪ�棬��ô�ͼ���JS�ű�


//ִ��˳����������
if (flag) {
	loadScript('browserdetect.js');
}

function loadScript(url) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}

var flag = false;						//���flagΪ�棬��ô�ͼ���JS�ű�


//ִ��˳����������
if (flag) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	//script.appendChild(document.createTextNode("alert('Lee')"));	IE��֧������д��
	script.text = "alert('Lee')";
	document.getElementsByTagName('head')[0].appendChild(script);
}

var flag = true;

if (flag) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = 'basic.css';
	document.getElementsByTagName('head')[0].appendChild(link);
}

	
*/




window.onload = function () {
	

	
};


var flag = true;

if (flag) {
	var style = document.createElement('style');
	style.type = 'text/css';
	//style.appendChild(document.createTextNode('#box {width:200px;height:200px;background:red}'));	//IE��֧��
	document.getElementsByTagName('head')[0].appendChild(style);
	insertRule(document.styleSheets[0], '#box', 'width:200px;height:200px;background:red', 0);
}


function insertRule(sheet, selectorText, cssText, position) {
	//����Ƿ�IE
	if (sheet.insertRule) {
		sheet.insertRule(selectorText + "{" + cssText + "}", position);
	//�����IE
	} else if (sheet.addRule) {
		sheet.addRule(selectorText, cssText, position);
	}
}
















