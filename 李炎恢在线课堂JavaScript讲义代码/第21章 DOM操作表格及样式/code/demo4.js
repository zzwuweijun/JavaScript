







/*
	//����Ƿ�֧��sheet��ʽ������ʽ����ʽ
	//alert(document.implementation.hasFeature('styleSheets', '2.0'));
	
	var link = document.getElementsByTagName('link')[0];
	var sheet = link.sheet;
	
	
	//alert(link);				//HTMLLinkElement
	//var sheet = link.sheet;		//CSSStyleSheet����ʾ���ӵ�css��ʽ�����
	
	//alert(sheet);
	
	//Ϊ�˼���IE
	//var sheet = link.sheet || link.styleSheet;

	//alert(sheet);
	
		//���Ӽ��Ļ�ȡsheet�ķ���
	
	//document.styleSheets�õ�����StyleSheetList����
	
	var sheet = document.styleSheets[0];		//������ԣ���������������ݵ�
	
	//alert(sheet.disabled = true);		//����
	
	//alert(sheet.href);
	
	//alert(sheet.media[0]);
	
	//alert(sheet.title);
	
	
	var sheet = document.styleSheets[0];	
	//alert(sheet.cssRules);			//CSSRuleList������ʽ���򼯺�
	
	//��ʽ�Ĺ�����ǣ�һȺ��ʽ�ļ��ϱ�ʾһ������
	
	//alert(sheet.cssRules[0]);			//CSSStyleRule, �õ���һ������
	//alert(sheet.cssRules[0].cssText);	//�õ���һ�������CSS�ı�
	//alert(sheet.cssRules[0].selectorText);	//�õ���һ�������ѡ���	
	
	//sheet.deleteRule(0);		//ɾ����һ������
	
	//sheet.insertRule('body {background-color:red}', 0);		//���һ�������ڵ�һ��λ����
	
	//��IE��ȡRules
	//sheet.cssRules
	//IE��ȡRules
	//alert(sheet.rules);
	
	//��IEɾ����һ������
	//sheet.deleteRule(0);
	//IEɾ����һ������
	//sheet.removeRule(0);
	
	//��IE���һ������
	//sheet.insertRule('body {background-color:red}', 0);	
	//IE���һ������
	//sheet.addRule('body', 'background-color:red', 0);
	
	
	// ����������ݻ�ȡrules
	//var rules = sheet.cssRules || sheet.rules;
	//alert(rules);
	
	//�����������ɾ����һ������
	//deleteRule(sheet, 0);
	
	//�������������ӵ�һ������
	insertRule(sheet, 'body', 'background-color:red', 0);
	
	//�������������ӵ�һ������
	function insertRule(sheet, selectorText, cssText, position) {
		if (sheet.insertRule) {
			sheet.insertRule(selectorText + ' { ' + cssText + ' }', position);	
		} else if (sheet.addRule) {
			sheet.addRule(selectorText, cssText, position);
		}
	}


	//�����������ɾ����һ������
	function deleteRule(sheet, position) {
		if (sheet.deleteRule) {
			sheet.deleteRule(position);
		} else if (sheet.removeRule) {
			sheet.removeRule(position);
		}
	}
	
*/



window.onload = function () {
	
	var sheet = document.styleSheets[0];	
	var rules = sheet.cssRules || sheet.rules;
	var rule1 = rules[0];
	
	//alert(rule1.cssText);
	//alert(rule1.selectorText);
	//alert(rule1.style.color);
	rule1.style.color = 'green';
	
	//var box = document.getElementById('box');
	//box.style.color = 'blue';
	
	
};
















