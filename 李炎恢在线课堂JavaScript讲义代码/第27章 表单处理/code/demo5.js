

/*
	//alert(city);			//HTMLSelectElement
	
	//city.multiple = true;
	//city.size = 5;
	
	//alert(city.options.length);		//HTMLOptionsCollection
	
	//alert(city.options[0]);			//HTMLOptionElement
	
	//alert(city.type);				//select-one���У�select-multiple����
	
	
	//alert(city.options[1].value + '---' + city.options[1].text);
	//value��textʹ�õ�HTML DOM���������Բο�HTML DOM�ֲ�
	
	//ʹ�ñ�׼DOMҲ���Ի�ȡ���������ڱ���ʹ�ñ�׼DOM��
	//��ΪHTML DOM�ļ������Ѿ��ǳ��õģ����Ҽ������ף����Һ����
	//alert(city.options[0].firstChild.nodeValue + '---' + city.options[0].getAttribute('value'));
	
	//alert(city.options[3].value);
	
	//addEvent(city, 'change', function () {
		//alert(this.selectedIndex);
	//	alert(this.options[this.selectedIndex].value + '---' + this.options[this.selectedIndex].text)
	//});
	
	
	//�����λ�Ǳ�����select������
	//city.selectedIndex = 3;			//��λ��ĳ��ѡ����
	
	//�����λ�Ǳ�����option������
	//city.options[1].selected = true;		//��λ��ĳ��ѡ����
	
	addEvent(city, 'change', function () {
		if (this.options[2].selected) {
			alert('��ȷ��');
		} else {
			alert('����');
		}
	});
	
	//��׼DOM��ӷ���
	//var option = document.createElement('option');
	//var text = document.createTextNode('����t');
	//option.appendChild(text);
	//option.setAttribute('value', '����v');
	//city.appendChild(option);
	
	//ʹ��Option���캯�����
	//var option = new Option('����t', '����v');
	//city.appendChild(option);		IE������
	//city.add(option, 0);			//0��IE������᲻����
	//city.add(option,null);
	//null��ʾ�����ڵ�λ�ã����������
	
	//city.add(option,undefined);	//��Ѽ��ݷ���
	
	
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
	
	var option1 = city.options[2];		//�õ������Ͼ�����
	city.insertBefore(option1, city.options[option1.index - 1]);
	
});





























