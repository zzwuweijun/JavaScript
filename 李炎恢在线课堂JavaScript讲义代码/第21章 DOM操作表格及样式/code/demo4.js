







/*
	//检测是否支持sheet样式表，链接式内联式
	//alert(document.implementation.hasFeature('styleSheets', '2.0'));
	
	var link = document.getElementsByTagName('link')[0];
	var sheet = link.sheet;
	
	
	//alert(link);				//HTMLLinkElement
	//var sheet = link.sheet;		//CSSStyleSheet，表示链接的css样式表对象
	
	//alert(sheet);
	
	//为了兼容IE
	//var sheet = link.sheet || link.styleSheet;

	//alert(sheet);
	
		//更加简便的获取sheet的方法
	
	//document.styleSheets得到的是StyleSheetList集合
	
	var sheet = document.styleSheets[0];		//这个属性，所有浏览器都兼容的
	
	//alert(sheet.disabled = true);		//禁用
	
	//alert(sheet.href);
	
	//alert(sheet.media[0]);
	
	//alert(sheet.title);
	
	
	var sheet = document.styleSheets[0];	
	//alert(sheet.cssRules);			//CSSRuleList，是样式规则集合
	
	//样式的规则就是，一群样式的集合表示一个规则
	
	//alert(sheet.cssRules[0]);			//CSSStyleRule, 得到第一个规则
	//alert(sheet.cssRules[0].cssText);	//得到第一个规则的CSS文本
	//alert(sheet.cssRules[0].selectorText);	//得到第一个规则的选择符	
	
	//sheet.deleteRule(0);		//删除第一条规则
	
	//sheet.insertRule('body {background-color:red}', 0);		//添加一条规则在第一个位置上
	
	//非IE获取Rules
	//sheet.cssRules
	//IE获取Rules
	//alert(sheet.rules);
	
	//非IE删除第一条规则
	//sheet.deleteRule(0);
	//IE删除第一条规则
	//sheet.removeRule(0);
	
	//非IE添加一条规则
	//sheet.insertRule('body {background-color:red}', 0);	
	//IE添加一条规则
	//sheet.addRule('body', 'background-color:red', 0);
	
	
	// 跨浏览器兼容获取rules
	//var rules = sheet.cssRules || sheet.rules;
	//alert(rules);
	
	//跨浏览器兼容删除第一条规则
	//deleteRule(sheet, 0);
	
	//跨浏览器兼容添加第一条规则
	insertRule(sheet, 'body', 'background-color:red', 0);
	
	//跨浏览器兼容添加第一条规则
	function insertRule(sheet, selectorText, cssText, position) {
		if (sheet.insertRule) {
			sheet.insertRule(selectorText + ' { ' + cssText + ' }', position);	
		} else if (sheet.addRule) {
			sheet.addRule(selectorText, cssText, position);
		}
	}


	//跨浏览器兼容删除第一条规则
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
















