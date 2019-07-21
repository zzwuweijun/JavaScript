/*----------------基础函数库------------*/

// 跨浏览器获取视口大小
function getInner() {
    if(typeof window.innerHeight != "undefined"){
        return{
            width:window.innerWidth,
            height:window.innerHeight
        }
    }else{
        return{
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
    }
    }
}


//跨浏览器获取style
function getStyle(element, attr) {
    if (typeof window.getComputedStyle != "undefined") {  //W3C
        return window.getComputedStyle(element, null)[attr];
    } else { //IE
        return element.currentStyle[attr];
    }
}


//跨浏览器判断class是否存在
function hasClass(element, cName){
    return element.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'));
}

//跨浏览器添加link规则
function insertRele(sheet,selectorText, cssText, position){
    if (typeof sheet.insertRule != "undefined") {
        sheet.insertRule(selectorText + "{" + cssText + "}", position);
    } else if (typeof sheet.addRule != "undefined") {//IE
        sheet.addRule(selectorText, cssText, position);
    }
}

//跨浏览器移除link规则
function deleteRule(sheet,index){
    if (typeof sheet.deleteRule != "undefined") {
        sheet.deleteRule(index);
    } else if (typeof sheet.removeRule != "undefined") {//IE
        sheet.removeRule(index);
    }
}

//跨浏览器获取Event对象
function getEvent(event){
    return event || window.event;
}

//跨浏览器阻止默认行为
function preDef(event){
    var e = getEvent(event);
    if(typeof e.preventDefault != "undefined"){
        e.preventDefault();
    }
    else{// IE
        e.returnValue = false;
    }
}






//跨浏览器






//跨浏览器






//跨浏览器








































