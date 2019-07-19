




/*
	内联模型，onclick是事件处理函数
	<input type="button" value="按钮" onclick="alert('Lee');"  />
	<input type="button" value="按钮" onclick="box();"  />
	
	function box() {		//如果放在一个匿名函数里面，就看不到了
		alert('Lee');
	};
	
	//脚本模型
	
	//对象.事件处理函数 = 函数名或者匿名函数
	input.onclick = function () {
		alert('Lee');
	};
	
	PS：让事件处理函数执行一个函数的时候，通过赋值方式，那么直接将函数名赋值给事件处理函数即可。
	PS：也就是说input.onclick = box; 如果加上了括号就自动自行了，没有完成赋值 input.onclick = box();
	
	input.onclick = box;		//赋值不能加括号
	function box() {
		alert('Lee');
	};
	
	PS：可以放在外面，也可以和input同级
	
	
	鼠标事件
	
	单击
	input.onclick = function () {
		alert('Lee');
	};
	
	input.ondblclick = function () {
		alert('Lee');
	};
	
	input.onmousedown = function () {
		alert('Lee');
	};
	
	input.onmouseup = function () {
		alert('Lee');
	};
	
	input.onmouseover = function () {
		alert('Lee');
	};
	
	input.onmouseout = function () {
		alert('Lee');
	};
	
	input.onmousemove = function () {
		alert('Lee');
	};
	
	onkeydown = function () {
		alert('Lee');
	};
	
	onkeypress = function () {
		alert('Lee');
	};
	
	window.onload = function () {

	};
	
	window.onunload = function () {
		alert('Lee');
	};
	
	input.onselect = function () {
		alert('Lee');
	};
	
	input.onchange = function () {
		alert('Lee');
	};
	
	input.onfocus = function () {
		alert('Lee');
	};
	
	input.onblur = function () {
		alert('Lee');
	};
	
	var form = document.getElementsByTagName('form')[0];
	form.onsubmit = function () {
		alert('Lee');
	};
	
	var form = document.getElementsByTagName('form')[0];
	form.onreset = function () {
		alert('Lee');
	};
	
	
	window.onresize = function () {
		alert('Lee');
	};
	
	
	
*/


window.onload = function () {
	var input = document.getElementsByTagName('input')[0];
	var form = document.getElementsByTagName('form')[0];
	
	window.onscroll = function () {
		alert('Lee');
	};
};



























