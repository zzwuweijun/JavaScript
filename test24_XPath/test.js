
// ----------------------------------------IE中的XPath（看图）
// window.onload = function(){
//     var parseObj = new parseXMLDOM();
//     //设置浏览器类型
//     parseObj.setBrowserType(parseObj.getBrowserType());
//     //设置文件路径
//     parseObj.setXmlFile("cc.xml");
//     //创建XMLDOM
//     parseObj.setXmlDom(parseObj.createXmlDom(null));
//     //解析XMLDOM
//     var xmlDom = parseObj.parseXMLDOMInfo();

    // alert(xmlDom.firstChild.textContent);
    // var book = xmlDom.selectSingleNode("books/book[0]");
    // books 表示根节点
    // alert(book.xml);

    // var book = xmlDom.selectSingleNode("books/book[0]/age/text()");
    // // text()可以获取节点内的值
    // alert(book.xml);
    // alert(book.nodeValue);

    // var book = xmlDom.selectSingleNode("//book[0]");
    // // 双斜杆可以获取不关心层次的第一个目标
    // alert(book.xml);

    // var book = xmlDom.selectSingleNode("books//age[0]");
    // // 表示在books范围内获取不关心层次的第一个目标
    // alert(book.xml);
    // alert(book.firstChild.nodeValue);

    // var book = xmlDom.selectSingleNode("books//age[@id= 'age2']");
    // // [@id= 'age2']表示查找指定的目标
    // alert(book.xml);
    // alert(book.firstChild.nodeValue);
// }



// ----------------------------------------DOM2中的XPath
// window.onload = function() {
//     var parseObj = new parseXMLDOM();
//     //设置浏览器类型
//     parseObj.setBrowserType(parseObj.getBrowserType());
//     //设置文件路径
//     parseObj.setXmlFile("cc.xml");
//     //创建XMLDOM
//     parseObj.setXmlDom(parseObj.createXmlDom(null));
//     //解析XMLDOM
//     var xmlDom = parseObj.parseXMLDOMInfo();
//
//     var eva = new XPathEvaluator();
//     var number = XPathResult.FIRST_ORDERED_NODE_TYPE;
//     // W3C的XPath下标是从1开始的
//     var result = eva.evaluate("books/book[0]/age",xmlDom,null,number,null);
//     // alert(result);
//
// //     获取单一节点
//     var xml = (new XMLSerializer()).serializeToString(result.singleNodeValue);
//     alert(xml);

// 感觉不是很好，xpath教程要学，视频没看完
// 跳过，需要时再学
alert("再说了");

// }

// ----------------------------------------跨浏览器处理XPath


















