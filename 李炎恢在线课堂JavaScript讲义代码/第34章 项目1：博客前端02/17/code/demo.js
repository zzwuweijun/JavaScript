

//��������
/*
function getState() {
	alert('');
};

getState();		//��Ҫ����һ�£��Ƚ϶���
*/

//alert('');				//ֱ��д��ȫ����Ƚϻ���

/*
(function getState() {			//�հ�
	alert('');
})();
*/

(function () {
	
	window.sys = {};											//���ⲿ���Է��ʣ������������Ϣ����
	var ua = navigator.userAgent.toLowerCase();	//��ȡ�������Ϣ�ַ���
	var s;															//�������Ϣ���飬���������+�汾

	//alert(ua);
	//alert(ua.match(/msie ([\d.]+)/));			//msie 7.0,7.0
	//alert(ua.match(/firefox\/([\d.]+)/));		//firefox/3.6.28,3.6.28
	//alert(ua.match(/chrome\/([\d.]+)/));
	//alert(window.opera.version());
	//alert(ua.match(/opera\/.*version\/([\d.]+)/));
	//alert(ua.match(/version\/([\d.]+).*safari/));
	
	/*
	if ((/msie ([\d.]+)/).test(ua)) {
		s = ua.match(/msie ([\d.]+)/);
		sys.ie = s[1];
	}
	
	if ((/firefox\/([\d.]+)/).test(ua)) {
		s = ua.match(/firefox\/([\d.]+)/);
		sys.firefox = s[1];
	}
	
	if ((/chrome\/([\d.]+)/).test(ua)) {
		s = ua.match(/chrome\/([\d.]+)/);
		sys.chrome = s[1];
	}
	
	if ((/opera\/.*version\/([\d.]+)/).test(ua)) {
		s = ua.match(/opera\/.*version\/([\d.]+)/);
		sys.opera = s[1];
	}
	
	if ((/version\/([\d.]+).*safari/).test(ua)) {
		s = ua.match(/version\/([\d.]+).*safari/);
		sys.safari = s[1];
	}
	*/
	
	
	(s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
	(s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
	(s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] : 
	(s = ua.match(/opera\/.*version\/([\d.]+)/)) ? sys.opera = s[1] : 
	(s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
	
	
})();



alert(sys.safari);



//��Ԫ
//true ? s =1 : 0;

//(s = 1) ? b = 1 : (s = 2) ? b = 2 : (s = 3) ? b = 3 : 0;

//alert(b);













