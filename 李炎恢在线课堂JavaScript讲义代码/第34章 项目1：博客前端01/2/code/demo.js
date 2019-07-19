


/*
	//alert(Base.getId('box'));
	Base.getId('box').css('color','red').css('backgroundColor', 'black').html('pox').click(function () {
		alert('a');
	}).addClass('a');
	
	Base是一个基础库的核心对象
	Base.getId('box')返回的是一个divElement，这个对象是没有css方法的
	将Base.getId('box')返回改成Base即可，返回Base对象
	Base.getId('box').css('color','red')返回的也是Base对象
	Base.getId('box').css('color','red').css('backgroundColor', 'black')还是返回的Base对象
	Base.getId('box').css('color','red').css('backgroundColor', 'black').html('pox')也是返回的Base对象
	Base.getId('box').css('color','red').css('backgroundColor', 'black').html('pox').click(function () {
		alert('a');
	}); click方法执行完毕之后，还是返回的Base对象
	
	
	
	在Base对象中，添加css方法,html方法,click方法
	
	var base = new Base();
	base.getId('box').style.color = 'red';
	base.getId('box').style.backgroundColor = 'black';
	base.getId('box').innerHTML = 'pox';
	base.getId('box').onclick = function () {
		alert(this.innerHTML);
	};
*/



window.onload = function () {
	//alert(base.getId('box').elements.length);
	$().getId('box').css('color', 'red').css('backgroundColor', 'black');
	//alert(base.getTagName('p').elements.length);
	$().getTagName('p').css('color', 'green').html('标题').click(function () {
		alert('a');
	}).css('backgroundColor', 'pink');
};
















