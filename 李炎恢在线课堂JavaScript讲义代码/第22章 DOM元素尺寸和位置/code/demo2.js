

/*
	滚动实际大小
	alert(box.scrollWidth);
	alert(box.scrollHeight);
	
	//IE浏览器在指定的高度下获取scrollHeight会理解为获取有效内容的高度
	//如果文本溢出了，没加滚动条，不同的浏览器也不太兼容
	//有溢出加上滚动条，方可兼容
	
	元素实际大小
	alert(box.offsetWidth);
	alert(box.offsetHeight);
	
	边框大小
	alert(box.clientTop);
	alert(box.clientLeft);
	
	偏移
	//alert(box.offsetTop);
	//alert(box.offsetLeft);
	
	//alert(box.offsetParent);
	
	//IE浏览器理解的根上的父元素为HTML，非IE理解的根上的父元素为BODY，但问题不大
	//如果没有设置定位，问题多多
	
	//求出box距离页面口直接的距离
	
	
	//alert(box.offsetTop + box.offsetParent.offsetTop);
	
	alert(offsetTop(box));
	
	
function offsetTop(element) {
	var top = element.offsetTop;		//第一层的距离
	var parent = element.offsetParent;
	
	while (parent !== null) {
		top += parent.offsetTop;
		parent = parent.offsetParent;
	}
	
	return top;
}

	
*/



window.onload = function () {

	var box = document.getElementById('box');
	//alert(box.scrollTop);
	//alert(box.scrollLeft);
	//box.scrollTop = 100;
	//alert(box.scrollTop);
	
	//box.scrollTop = 34;
	
	scrollStart(box);
	
};


function scrollStart(element) {
	if (element.scrollTop != 0) element.scrollTop = 0;
}























