


/*
	document.write('<p>����write</p>');			//һ�����ڲ���
	
	var box = document.getElementById('box');
	var p = document.createElement('p');			//ֻ�Ǵ�����һ��Ԫ�ؽڵ�p����û����ӵ��ĵ���ȥ��ֻ��פ�����ڴ���
	box.appendChild(p);									//���½ڵ�p��ӵ�id=box��div����ӽڵ��б��ĩβ��
	
	var text = document.createTextNode('����Div4');
	//p.appendChild(text);									//���ı���ӵ�P����
	//box.appendChild(text);
	document.getElementsByTagName('body')[0].appendChild(p);
	
	
	var box = document.getElementById('box');
	var p = document.createElement('p');	
	//box.parentNode����body
	box.parentNode.insertBefore(p, box);		//��box�ĸ��ڵ����һ��p��������boxǰ�����һ��Ԫ�ؽڵ�

	var box = document.getElementById('box');
	var p = document.createElement('p');	
	insertAfter(p, box);
	
	function insertAfter(newElement, targetElement) {
		//�õ����ڵ㣬����body�����ǲ���ֱ��ʹ��body�������ν϶࣬���ڵ㲻һ����body
		var parent = targetElement.parentNode;
		if (parent.lastChild === targetElement) {
			alert('');
			parent.appendChild(newElement, targetElement) 
		} else {
			//span�ڵ��ǰ����ӣ��Ϳ�����insertBefore����ôspan�ڵ���ô��ȡ��nextSibling
			parent.insertBefore(newElement,targetElement.nextSibling);
		}
	}
	
	var body = document.getElementsByTagName('body')[0];
	if (BrowserDetect.browser == 'Internet Explorer' && BrowserDetect.version <= 7) {
		var input = document.createElement("<input type=\"radio\" name=\"sex\">");
	} else {
		var input = document.createElement('input');
		input.setAttribute('type', 'radio');
		input.setAttribute('name', 'sex');
	}
	
	body.appendChild(input);
	
	var span = document.getElementsByTagName('span')[0];
	var em = document.createElement('em');
	span.parentNode.replaceChild(em, span);
	
	var box = document.getElementById('box');
	var clone = removeWhiteNode(box).firstChild.cloneNode(false);	//��¡һ���ڵ㣬�����true���ǰѱ�ǩ�ڵ��ı�Ҳ��¡�������false��ֻ��¡��ǩ
	box.appendChild(clone);
*/



window.onload = function () {
	var box = document.getElementById('box');
	//box.removeChild(removeWhiteNode(box).firstChild);		//ɾ��box��һ���ӽڵ�
	//ɾ������box
	box.parentNode.removeChild(box);			//ɾ������box
};




//�Ƴ��հ׽ڵ�
function removeWhiteNode(node) {
	for (var i = 0; i < node.childNodes.length; i ++) {
		if (node.childNodes[i].nodeType === 3 && /^\s+$/.test(node.childNodes[i].nodeValue)) {
			node.childNodes[i].parentNode.removeChild(node.childNodes[i]);
		} 
	}
	return node;
}























