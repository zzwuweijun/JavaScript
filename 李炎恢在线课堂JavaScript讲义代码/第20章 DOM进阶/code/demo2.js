


/*
	����
		
	if (document.compatMode == 'CSS1Compat') {
		alert(document.documentElement.clientWidth);
	} else {
		alert(document.body.clientWidth);
	}
	
	document.getElementById('box').scrollIntoView();		//��ָ���Ľڵ�������ɼ���Χ��
	
	var box = document.getElementById('box');
	//alert(box.childNodes.length);
	//alert(box.children.length);				//���Ե��˿հ׽ڵ�
	alert(box.children[0].nodeName);
	
	

function contains(refNode, otherNode) {
	if (typeof refNode.contains != 'undefined' && !(BrowserDetect.browser == 'Safari' && BrowserDetect.version < 3)) {
		return refNode.contains(otherNode);
	} else if (typeof refNode.compareDocumentPosition == 'function') {
		return refNode.compareDocumentPosition(otherNode) > 16;
	} else {
		var node = otherNode.parentNode;
		do {
			if (node === refNode) {
				return true;
			} else {
				node = otherNode.parentNode;
			}
		} while (node != null)
		return false;
	}
}

	var box = document.getElementById('box');
	var p = box.firstChild;
	//alert(box.contains(p));			//�ж�box�ǲ���p�ĸ��ڵ�
	
	//alert(box.compareDocumentPosition(p) > 16);	//������ϵ
	
	//alert(typeof box.contains);
	
	
	//PS������ɰ汾��֧��3.6���°�֧��14
	//PS��Safari2.x��֧�֣�3.0���ϲ�֧��
	//PS���ܶ���͵İ汾���ṩ��������������֧��
	
	alert(contains(box,p));
	
	
	var box = document.getElementById('box');
	
	function getInnerText(element) {
		if (typeof element.textContent == 'string') {
			return element.textContent;
		} else {
			return element.innerText;
		}
	}


	function setInnerText(element, text) {
		if (typeof element.textContent == 'string') {
			element.textContent = text;
		} else {
			element.innerText = text;
		}
	}

	//alert(box.innerText);			//��ȡ�ı������˵�HTML��ֱ��ɾ���ģ������֧��
	//box.innerText = '<b>123</b>';	//��ֵ��ת��HTML
	
	//alert(typeof box.textContent);
	alert(getInnerText(box));
	
	//alert(document.getElementById('box').innerHTML); //��ȡ�ı�(������HTML)
	//document.getElementById('box').innerHTML = '<b>123</b>'; //�ɽ���HTML
	document.getElementById('box').innerHTML = "<script>alert('')</script>";
	
*/



window.onload = function () {
	
	var box = document.getElementById('box');
	//alert(box.outerText);
	box.outerText = '<b>123</b>';
	box.outerHTML = '<b>123</b>';
	alert(document.getElementById('box'));		//null�ˣ�����<div>�����ǩ��Ĩȥ��
};

























