
		var box = new Object();			//或者写成{}
		box.name = 'Lee';						//添加一个属性
		alert(box.name);
		var box = 'Lee';						//基本类型值，是字符串
		box.age = 28;							//基本类型值添加属性，无法输出，不是引用类型
		alert(box.age);							//不是引用类型，无法输出。undefined


		var box = 'Lee';
		var box2 = box;
		box2 = 'kkk';								//基本类型保持独立，box2的修改不会影响到box
		alert(box2);
		alert(box);

		var box = new Object();
		box.name = 'Lee';
		var box2 = box;
		box2.name = 'kkk';					//因为他们指向的是同一个object，同一个name，不管修改谁，大家都修改了

		alert(box2.name);
		alert(box.name);

		function box(num) {							//按值传递
			num += 10;
			return num;
		}
		var num = 50;
		alert(box(num));
		alert(num);//输出50，如果是按引用传递，那么函数里的num会成为类似全局变量，把外面的num替换掉。也就是说，最后输出60
																											
		function box(obj) {							//这里将要传递一个引用类型的参数，但不是按引用传递，是按值传递的
			obj.name = 'Lee';
			var obj = new Object();				//所以，JS没有按引用传参的功能，切记，不能把传递引用参数当作按引用传参
			obj.name = 'kkk';            //并没有替换掉之前的name，
		}
		var obj = new Object();
		box(obj);
		alert(obj.name);  //输出lee，传参是传的地址，然后函数里面对地址中的属性赋值


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




















