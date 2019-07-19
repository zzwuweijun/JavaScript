// ---------------JSON语法（看图）
// 其实json数据就是将普遍数据用引号包起来


// ---------------解析和序列化（看图）
// 两个方法：stringify()/parse()
// stringify:

// 检查浏览器是否支持JSON
// alert(JSON);

// var box = [{"title": "a", "num": 1}, {title: "b", num: 2}, {title: "c", num: 3}];

// var json = JSON.stringify(json);
// alert(json);

// var json = JSON.stringify(box);
// var json = JSON.stringify(box,['title']);   // 只选择要的值--过滤
// var json = JSON.stringify(box,['title'], 14);   // 分割的进度；缩进，让可以读性更高
// var json = JSON.stringify(box,['title'], "|||");   // 分割的进度；缩进，让可以读性更高
// var json = JSON.stringify(box,null, "|||");   // 第二参数设为null既可
// alert(json);
// alert(typeof json);


// 林一种过滤方式
// var box2 = [{
//     "title": "a", "num": 1, toJSON: function () {
//         return this.num;
//     }
// }];
// var json = JSON.stringify(box2,null, "--");
// alert(json);


// 解析
var json = [{"title": "a", "num": 1},{"title": "b", num: 2}, {title: "c", num: 3}];
var json = JSON.stringify(json);
// alert(typeof json);
var box = JSON.parse(json, function (key, value) {
    if(key== "title"){
        return "----"+value;
    }else{
        return value;
    }
});
// alert(box);
// alert(box[2].title);
alert(box[2]);







