



			function box() {											//����������
				alert('��ֻ�б����òſ���ִ�У�');		//��������û�����й���
			}																	//������òſ���ִ��
			box();															//����
			function box(name, age) {
				alert('��������ǣ�' + name + '������Ϊ��' + age);
			}
			box('���׻�', 28);    
			box('���׻�');    //����ֻ��һ��ֵ��û�д��ı�ʾû��û�ж��壬Undefined
			function box() {
				return '��ֻ�б����òſ���ִ�У�';			//return��ʾ����仰�ַ������ػ���
			}
			//��ӡ���������÷��ع����Ľ��
			alert(box());													//���ã��൱��box() ='��ֻ�б����òſ���ִ�У�'
			function box(name, age) {
				return '��������ǣ�' + name + '������Ϊ��' + age;
			}
			var strInfo = box('����',40);
			alert(strInfo);
			function box(num) {
				if (num < 5) return num;		//��һ������������һ��return���ͻ���ֹ������������ִ��
				return 100;									//break��������ѭ����switch����У��������ں���
			}
			alert(box(6));

			function box() {
				return arguments[0] + ' | ' + arguments[1] + ' | ' + arguments[2] + ' | ' + arguments[3] + ' | ' + arguments[4];//�õ�ÿ�β�����ֵ
			}
			alert(box('���׻�', 28, '�����','�γ�')); //���ݲ���,������ݵĲ����ں�����û�ж��壬�򲻻��������������ж����˵�û�д���ʾΪδ����undefined


			function box() {
				return arguments.length;
			}

			alert(box('���׻�', 28));
			
			function box() {
				var sum = 0;
				for (var i =0; i < arguments.length; i ++) {
					sum += arguments[i];
				}
				return sum;
			}
			alert(box(10,22));





			function box(num,a) {
				return num + 100;
			}

			function box(num) {					//�ڶ����������ѵ�һ���������ǵ��ˣ����߱����ع���
				return num + 200;
			}





			alert(box(50,1));	//���ؾ��Ǹ��ݲ�����ѡ����ͬ��������������ͬ�ĺ���









