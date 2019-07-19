

/*
	//alert(city);			//HTMLSelectElement
	
	//city.multiple = true;
	//city.size = 5;
	
	//alert(city.options.length);		//HTMLOptionsCollection
	
	//alert(city.options[0]);			//HTMLOptionElement
	
	//alert(city.type);				//select-one单行，select-multiple多行
	
	
	//alert(city.options[1].value + '---' + city.options[1].text);
	//value和text使用的HTML DOM方法，可以参考HTML DOM手册
	
	//使用标准DOM也可以获取，不建议在表单中使用标准DOM，
	//因为HTML DOM的兼容性已经非常好的，而且兼容容易，并且好理解
	//alert(city.options[0].firstChild.nodeValue + '---' + city.options[0].getAttribute('value'));
	
	//alert(city.options[3].value);
	
	//addEvent(city, 'change', function () {
		//alert(this.selectedIndex);
	//	alert(this.options[this.selectedIndex].value + '---' + this.options[this.selectedIndex].text)
	//});
	
	
	//这个定位是必须在select对象上
	//city.selectedIndex = 3;			//定位到某个选项上
	
	//这个定位是必须在option对象上
	//city.options[1].selected = true;		//定位在某个选项上
	
	addEvent(city, 'change', function () {
		if (this.options[2].selected) {
			alert('正确！');
		} else {
			alert('错误！');
		}
	});
	
	//标准DOM添加方法
	//var option = document.createElement('option');
	//var text = document.createTextNode('北京t');
	//option.appendChild(text);
	//option.setAttribute('value', '北京v');
	//city.appendChild(option);
	
	//使用Option构造函数添加
	//var option = new Option('北京t', '北京v');
	//city.appendChild(option);		IE不兼容
	//city.add(option, 0);			//0非IE浏览器会不兼容
	//city.add(option,null);
	//null表示不存在的位置，但本身存在
	
	//city.add(option,undefined);	//最佳兼容方案
	
	
	//city.removeChild(city.options[0]);
	//city.remove(0);
	//city.remove(0);
	//city.remove(0);
	//city.options[0] = null;
	
	addEvent(city, 'click', function () {
		info.appendChild(this.options[city.selectedIndex]);
	});
*/


addEvent(window, 'load', function () {
	var fm = document.getElementById('myForm');
	var city = fm.elements['city'];
	//var info = fm.elements['info'];

	//alert(city.selectedIndex);
	//alert(city.options[0].index);
	
	var option1 = city.options[2];		//得到的是南京对象
	city.insertBefore(option1, city.options[option1.index - 1]);
	
});





























