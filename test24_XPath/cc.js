/*
 * 纯JS解析XML文档(兼容各个浏览器)
 */
function parseXMLDOM(){
    var _browserType = "";
    var _xmlFile = "";
    var _XmlDom = null;
    return {
        "getBrowserType" : function(){
            return _browserType;
        },
        "setBrowserType" : function(browserType){
            _browserType = browserType;
        },
        "getXmlFile" : function(){
            return _xmlFile;
        },
        "setXmlFile" : function(xmlFile){
            _xmlFile = xmlFile;
        },
        "getXmlDom" : function(){
            return _XmlDom;
        },
        "setXmlDom" : function(XmlDom){
            _XmlDom = XmlDom;
        },
        "getBrowserType" : function(){
            var browserType = "";
            if(navigator.userAgent.indexOf("MSIE") != -1){
                browserType = "IE";
            }else if(navigator.userAgent.indexOf("Chrome") != -1){
                browserType = "Chrome";
            }else if(navigator.userAgent.indexOf("Firefox") != -1){
                browserType = "Firefox"
            }
            return browserType;
        },
        "createXmlDom" : function(xmlDom){
            if(this.getBrowserType() == "IE"){//IE浏览器
                xmlDom = new ActiveXObject('Microsoft.XMLDOM');
                xmlDom.async = false;
                xmlDom.load(this.getXmlFile());
            }else{
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", this.getXmlFile(), false);
                xmlhttp.send(null);
                xmlDom = xmlhttp.responseXML;
            }
            return xmlDom;
        },
        "parseXMLDOMInfo" : function(){
            var xmlDom = this.getXmlDom();
            if(this.getBrowserType() == "IE"){
                var bookObj = xmlDom.selectNodes("books/book");
                if(typeof(bookObj) != "undifined"){
                    var strHtml="";
                    for(var i = 0; i < bookObj.length; i++){
                        strHtml += bookObj[i].selectSingleNode("age").text;
                        strHtml += " ";
                        strHtml += bookObj[i].selectSingleNode("email").text;
                        strHtml += " ";
                        strHtml += bookObj[i].selectSingleNode("name").text;
                        if(i != bookObj.length - 1){
                            strHtml += "<br>";
                        }
                    }
                }
            }else{
                var book = xmlDom.getElementsByTagName("book");
                var strHtml="";
                for(var i = 0;i < book.length;i++){
                    strHtml += book[i].getElementsByTagName("age")[0].textContent;
                    strHtml += " ";
                    strHtml += " ";
                    strHtml += book[i].getElementsByTagName("email")[0].textContent;
                    strHtml += " ";
                    strHtml += book[i].getElementsByTagName("name")[0].textContent;
                    if(i != book.length - 1){
                        strHtml += "<br>";
                    }
                }
            }
            document.getElementById("msg").innerHTML = strHtml;
            return xmlDom;
        }
    }
}
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
// }