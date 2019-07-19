












/*
����cookie
document.cookie = 'user=Lee';
document.cookie = 'url=yc60.com';
document.cookie = 'email=yc60.com@gmail.com';

alert(document.cookie);


setCookie('user', '���׻�', setCookieDate(7));
setCookie('url', 'yc60.com', setCookieDate(7));
setCookie('email', 'yc60.com@gmail.com', setCookieDate(7));
*/


//����cookie
function setCookie(name, value, expires, path, domain, secure) {
	var cookieName = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	if (expires instanceof Date) {
		cookieName += '; expires=' + expires;
	}
	if (path) {
		cookieName += '; path=' + path;
	}
	if (domain) {
		cookieName += '; domain=' + domain;
	}
	if (secure) {
		cookieName += '; secure';
	}
	document.cookie = cookieName;
}

//��ȡCookie
function getCookie(name) {
	var cookieName = encodeURIComponent(name) + '=';
	var cookieStart = document.cookie.indexOf(cookieName);
	var cookieValue = null;
	
	if (cookieStart > -1) {
		var cookieEnd = document.cookie.indexOf(';', cookieStart);
		if (cookieEnd == -1) {
			cookieEnd = document.cookie.length;
		}
		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
	}
	return cookieValue;
}

alert(getCookie('email'));



//����ʱ��
function setCookieDate(day) {			//����һ�����������紫��7����7���ʧЧ
	var date = null;
	if (typeof day == 'number' && day > 0) {
		date = new Date();
		date.setDate(date.getDate() + day);
	} else {
		throw new Error('�����ݵ��������Ϸ��������������Ҵ���0');
	}
	return date;
}













