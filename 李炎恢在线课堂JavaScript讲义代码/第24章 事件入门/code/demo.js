




/*
	����ģ�ͣ�onclick���¼�������
	<input type="button" value="��ť" onclick="alert('Lee');"  />
	<input type="button" value="��ť" onclick="box();"  />
	
	function box() {		//�������һ�������������棬�Ϳ�������
		alert('Lee');
	};
	
	//�ű�ģ��
	
	//����.�¼������� = ������������������
	input.onclick = function () {
		alert('Lee');
	};
	
	PS�����¼�������ִ��һ��������ʱ��ͨ����ֵ��ʽ����ôֱ�ӽ���������ֵ���¼����������ɡ�
	PS��Ҳ����˵input.onclick = box; ������������ž��Զ������ˣ�û����ɸ�ֵ input.onclick = box();
	
	input.onclick = box;		//��ֵ���ܼ�����
	function box() {
		alert('Lee');
	};
	
	PS�����Է������棬Ҳ���Ժ�inputͬ��
	
	
	����¼�
	
	����
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



























