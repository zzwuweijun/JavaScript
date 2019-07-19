




/*

//JSON��ֵ
10
"hello"
true
null

//�����ʾ
var box = {
	name : 'Lee', 
	age : 100
};
alert(box.name);

//JSON�����ʾ
{
	"name" : "Lee",
	"age" : 100
}


//��ͨ����
var box = [100, 'Lee', true];

//JSON����
'[100, "Lee", true]'

//PS��JSON˵���˾���һ���ַ����������κα�ʾ����Ӧ�ü������ű�ʾ�ַ���
//PS��JSON������������ͨ��������飬���˷ֺţ����˱�����ֵ�����ұ���Ӧ�����ַ�����ʾ

//��õ�JSON�ṹ
[
	{
		"title" : "a",
		"num" : 1
	},
	{
		"title" : "b",
		"num" : 1
	},
	{
		"title" : "c",
		"num" : 1
	}
]

//ģ�����JSON�����ַ����Ĺ��̣�var json = load('demo.json');		//��JSON�ַ������ؽ������Ҹ�ֵ��json����
var json = '[{"title" : "a", "num" : 1},{"title" : "b", "num" : 2}]';		//ģ�����JSON�ַ����Ĺ���
//alert(typeof json);

//ʹ��eval()��ִ���ַ������JS����
var box = eval(json);			//����JSON�ַ������������JavaScript����
alert(box[1].title);


//PS��eval()����ȫ


var json = '[{"title" : "a", "num" : 1},{"title" : "b", "num" : 2}]';	
//alert(JSON);
var box = JSON.parse(json);
alert(box[0].title);


var box = [
					{
						title : 'a',
						num : 1
					},
					{
						title : 'b',
						num : 2
					}
];
var json = JSON.stringify(box);
alert(json);

var box = [
					{
						title : 'a',
						num : 1,
						height : 177
					},
					{
						title : 'b',
						num : 2,
						height : 188
					}
];
var json = JSON.stringify(box, ['num', 'height']);
alert(json);

var box = [
					{
						title : 'a',
						num : 1,
						height : 177
					},
					{
						title : 'b',
						num : 2,
						height : 188
					}
];
var json = JSON.stringify(box, function (key, value) {
	if (key == 'title') {
		return 'Mr.' + value;
	} else {
		return value;
	}
});
alert(json);


//PS�����3.5��3.6�����֧��JSON��ʱ��stringify�����и�СBUG��ִ��function�����
//PS�����ڻ���İ汾��17.0������3.5��3.6���г��ݶ���Ժ��Բ��ƣ�û��Ҫ��������


var box = [
					{
						title : 'a',
						num : 1,
						height : 177
					},
					{
						title : 'b',
						num : 2,
						height : 188
					}
];
var json = JSON.stringify(box, ['title', 'num'], 4);
alert(json);


var box = [
					{
						title : 'a',
						num : 1,
						height : 177
					},
					{
						title : 'b',
						num : 2,
						height : 188
					}
];
var json = JSON.stringify(box, null, 4);
alert(json);


var box = [
					{
						title : 'a',
						num : 1,
						height : 177,
						toJSON : function () {
							return this.title;
						}
					},
					{
						title : 'b',
						num : 2,
						height : 188,
						toJSON : function () {
							return this.title;
						}
					}
];
var json = JSON.stringify(box, null, 4);
alert(json);

*/




var json = '[{"title" : "a", "num" : 1},{"title" : "b", "num" : 2}]';	
var box = JSON.parse(json, function (key, value) {
	if (key == 'title') {
		return 'Mr.' + value;
	} else {
		return value;
	}
});
alert(box[0].title);


