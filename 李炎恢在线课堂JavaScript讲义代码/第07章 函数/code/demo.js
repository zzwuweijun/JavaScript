



			function box() {											//函数的声明
				alert('我只有被调用才可以执行！');		//函数本身没有运行功能
			}																	//必须调用才可以执行
			box();															//调用
			function box(name, age) {
				alert('你的姓名是：' + name + '，年龄为：' + age);
			}
			box('李炎恢', 28);    
			box('李炎恢');    //可以只传一个值，没有传的表示没有没有定义，Undefined
			function box() {
				return '我只有被调用才可以执行！';			//return表示把这句话字符串返回回来
			}
			//打印出函数调用返回过来的结果
			alert(box());													//调用，相当于box() ='我只有被调用才可以执行！'
			function box(name, age) {
				return '你的姓名是：' + name + '，年龄为：' + age;
			}
			var strInfo = box('马云',40);
			alert(strInfo);
			function box(num) {
				if (num < 5) return num;		//当一个函数遇到第一个return，就会终止函数继续往下执行
				return 100;									//break必须用在循环和switch语句中，不能用于函数
			}
			alert(box(6));

			function box() {
				return arguments[0] + ' | ' + arguments[1] + ' | ' + arguments[2] + ' | ' + arguments[3] + ' | ' + arguments[4];//得到每次参数的值
			}
			alert(box('李炎恢', 28, '计算机','盐城')); //传递参数,如果传递的参数在函数中没有定义，则不会输出，如果函数中定义了但没有传表示为未定义undefined


			function box() {
				return arguments.length;
			}

			alert(box('李炎恢', 28));
			
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

			function box(num) {					//第二个函数，把第一个函数覆盖掉了，不具备重载功能
				return num + 200;
			}





			alert(box(50,1));	//重载就是根据参数，选择相同函数名而参数不同的函数









