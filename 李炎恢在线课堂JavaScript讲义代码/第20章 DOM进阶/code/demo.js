
/*
		//alert(Node);				//object Node,IE��֧��
	//if (xxx.nodeType === 1) //��ʾ�ж�Ԫ�ؽڵ�
	//if (xxx.nodeType === 3) //��ʾ�ж��ı��ڵ�
	//alert(Node.ELEMENT_NODE);	//��ʾԪ�ؽڵ������ֵ
	//alert(Node.TEXT_NODE);		//��ʾ�ı��ڵ������ֵ
	
	//if (xxx.nodeType === Node.ELEMENT_NODE)
	//if (xxx.nodeType === Node.TEXT_NODE)
	
	//if (xxx.nodeType === Ԫ��)
	//if (xxx.nodeType === �ı�)
	
	//ͨ��Ӣ�ĳ��������氢�������֣�ʹ���жϸ��ӵ�����
	
	if (typeof Node == 'undefined') {
	//����һ��ȫ��Node
		window.Node = {
			ELEMENT_NODE : 1,
			TEXT_NODE : 3
		};
	};
	
	alert(Node.ELEMENT_NODE);	
	alert(Node.TEXT_NODE)
	


	//alert(document);					//HTMLDocument
	//alert(document.nodeType);	//9
	//alert(document.nodeValue);	//null
	//alert(document.nodeName);	//#document
	//alert(document.childNodes[0]);	//DocumentType��IE���Ϊע��
	//alert(document.childNodes[0].nodeType);	//10��IEΪ8
	//alert(document.childNodes[0].nodeName);
	
	//���ΪHTML���ȸ�Ϊhtml��IEΪ#comment
	//����°汾Ϊhtml
	
	//alert(document.childNodes[1]);	//HTMLHtmlElement
	//alert(document.childNodes[1].nodeType);	//1
	//alert(document.childNodes[1].nodeName)
	
	
	//alert(document.documentElement);	//HTMLHtmlElement
	//alert(document.body.nodeName);		//��ȡBody
	
	//alert(document.doctype);			//DocumentType,	IE����ʾnull
	
	//alert(document.title);
	//document.title = 'box';
	//alert(document.URL);
	//alert(document.domain);
	//alert(document.referrer);
	alert(document.images.length);
	
	var box = document.getElementById('box');
	var text1 = document.createTextNode('Mr.');
	var text2 = document.createTextNode('Lee');
	box.appendChild(text1);
	box.appendChild(text2);
	//box.normalize();					//�ϲ�ͬһ������ı��ڵ�
	//alert(box.childNodes.length);
	alert(box.childNodes[0].nodeValue);
	
	
	var box = document.getElementById('box');
	box.childNodes[0].splitText(3);					//��ǰ�����ַ�������½ڵ�
	alert(box.childNodes[0].nodeValue);
	
	
	var box = document.getElementById('box');
	//box.childNodes[0].deleteData(0,3);
	//box.childNodes[0].insertData(0,'Hello,');
	//box.childNodes[0].replaceData(0,2,'Miss');
	alert(box.childNodes[0].substringData(0,2));
	//alert(box.childNodes[0].nodeValue);
	
	//var box = document.getElementById('box');
	//alert(box.firstChild);			//Comment
	//alert(box.firstChild.nodeType);		//8
	//alert(box.firstChild.nodeValue);		//����ע��
	var c = document.getElementsByTagName('!');		//IE֧�֣�������֧��
	alert(c[1].nodeValue);
*/


window.onload = function () {

}

	






























