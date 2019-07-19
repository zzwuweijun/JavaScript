


/*

	var box = document.getElementById('box');
	
	//alert(box.childNodes[0].nodeValue);		//��ȡ��һ���ӽڵ�
	//alert(box.childNodes[box.childNodes.length - 1].nodeValue)		//��ȡ���һ���ӽڵ�
	
	alert(box.firstChild.nodeValue);			//��ȡ��һ���ӽڵ�
	alert(box.lastChild.nodeValue);				//��ȡ���һ���ӽڵ�
	
	//alert(box.ownerDocument);			//HTMLDocument�������ĵ����󣬸��ڵ�
	//alert(document);								//HTMLDocument
	//alert(box.ownerDocument === document);
	
	//alert(box.ownerDocument.nodeName);		//#document
	//alert(box.ownerDocument.nodeType);			//9
	
	//alert(box.parentNode);			//HTMLBodyElement
	//alert(box.firstChild.nextSibling);	//HTMLSpanElement
	//alert(box.firstChild.nextSibling.nodeName);	//��һ��ͬ���ڵ�ı�ǩ��
	//alert(box.lastChild.previousSibling.nodeName);//��һ��ͬ���ڵ�ı�ǩ��
	
	
	//alert(box.attributes);				//NamedNodeMap���������飬���������Ԫ�ؽڵ�������б�
	//alert(box.attributes.length);		//3������
	//alert(box.attributes[0]);			//Attr �����Խڵ�
	//alert(box.attributes[0].nodeType);		//2�����Խڵ������ֵ
	//alert(box.attributes[0].nodeValue);		//bbb����һ�����Ե�����ֵ
	//alert(box.attributes[0].nodeName);		//class����һ�����Ե�������
	
	//������ʱ���ǴӺ���ǰ��
	alert(box.attributes['title'].nodeValue);
	
	
	alert(removeWhiteNode(box.childNodes).length);
	
	//���Կհ��ַ�
	function filterWhiteNode(node) {
		var ret = [];
		for (var i = 0; i < node.length; i ++) {
			if (node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)) {
				continue;
			} else {
				ret.push(node[i]);
			}
		}
		return ret;
	}
	
	//�Ƴ��հ��ַ�
	function removeWhiteNode(node) {
		for (var i = 0; i < node.length; i ++) {
			if (node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)) {
				node[i].parentNode.removeChild(node[i]);
			} 
		}
		return node;
	}
*/



window.onload = function () {
	var box = document.getElementById('box');
	alert(removeWhiteNode(box).firstChild.nodeName);
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


























