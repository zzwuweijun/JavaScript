


// l-------------------------------cookie
// cookie 的完整形式：
// document.cookie = "user=值；expires=失效时间；path=路径访问；domain=域名访问；secure=安全的https限制通信"
// expires：到期；有效期

//  alert(document.cookie);
//  alert(typeof  document.cookie);

// 设置cookie
// document.cookie = "usere = 'okokok'";
// document.cookie = "usere=" + encodeURI("中文");

// 获取cookie
// alert(decodeURI(document.cookie));
// alert(new Date());

// 设置cookie的到期时间
// var date = new Date();
// date.setDate(date.getDate() + 7);
// // alert(date);
// document.cookie = "usere=" + encodeURI("中文")+";expires="+date;
//设置cookies的失效方法：重新给cookie设置过去的时间既可以

// 设置cookie的路径，同上

// 设置cookie的域名，同上

// 局限性就是一次性只能得到所有的cookie，其中保护”name= value“，不能只得到value。
// 可以自己编写函数


// -------------------------------cookie 局限性（看图）



// -------------------------------其他存储（看图）






















