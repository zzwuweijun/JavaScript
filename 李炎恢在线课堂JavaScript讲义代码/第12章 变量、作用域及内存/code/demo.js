
		var box = new Object();			//����д��{}
		box.name = 'Lee';						//���һ������
		alert(box.name);
		var box = 'Lee';						//��������ֵ�����ַ���
		box.age = 28;							//��������ֵ������ԣ��޷������������������
		alert(box.age);							//�����������ͣ��޷������undefined


		var box = 'Lee';
		var box2 = box;
		box2 = 'kkk';								//�������ͱ��ֶ�����box2���޸Ĳ���Ӱ�쵽box
		alert(box2);
		alert(box);

		var box = new Object();
		box.name = 'Lee';
		var box2 = box;
		box2.name = 'kkk';					//��Ϊ����ָ�����ͬһ��object��ͬһ��name�������޸�˭����Ҷ��޸���

		alert(box2.name);
		alert(box.name);

		function box(num) {							//��ֵ����
			num += 10;
			return num;
		}
		var num = 50;
		alert(box(num));
		alert(num);//���50������ǰ����ô��ݣ���ô�������num���Ϊ����ȫ�ֱ������������num�滻����Ҳ����˵��������60
																											
		function box(obj) {							//���ｫҪ����һ���������͵Ĳ����������ǰ����ô��ݣ��ǰ�ֵ���ݵ�
			obj.name = 'Lee';
			var obj = new Object();				//���ԣ�JSû�а����ô��εĹ��ܣ��мǣ����ܰѴ������ò������������ô���
			obj.name = 'kkk';            //��û���滻��֮ǰ��name��
		}
		var obj = new Object();
		box(obj);
		alert(obj.name);  //���lee�������Ǵ��ĵ�ַ��Ȼ��������Ե�ַ�е����Ը�ֵ


		var box = 'Lee';
		alert(typeof box);
		var box = [1,2,3];
		alert(box instanceof Array);
		var box2 = {};
		alert(box2 instanceof Object);
		var box3 = /g/;
		alert(box3 instanceof RegExp);
		var box = new String('Lee');
		alert(box instanceof String);




















