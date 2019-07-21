/*



* */
//前台调用
var $ = function (_this) {
    return new Base(_this);
};

//基础库
function Base(_this) {
    // 创建一个数组，保存获取的节点和节点数组
    this.elements = [];
    if(_this != undefined){ //  _this是一个对象，undefined也是一个对象，区别与typeof返回“undefined”
        this.elements[0] = _this;
    }
}

//·······················元素

// 获取ID节点
Base.prototype.getId = function (id) {
    this.elements.push(document.getElementById(id));
    return this;
}

// 获取元素节点
Base.prototype.getTagName = function (tag) {
    var tags = document.getElementsByTagName(tag);
    for (var i = 0; i < tags.length; i++) {
        this.elements.push(tags[i]);
    }
    return this;
}

// 获取class节点数组
Base.prototype.getClass = function (CName, idName) {
    // idName :表示class节点在id=“idName”区域内
    var node = null;
    if (arguments.length == 2) {
        node = document.getElementById(idName);
    } else {
        node = document;
    }
    var all = node.getElementsByTagName("*");
    for (var i = 0; i < all.length; i++) {
        if (all[i].className == CName) {
            this.elements.push(all[i]);
            // alert(this.elements[0]);
        }
    }
    return this;
}

// 获取某一个节点
Base.prototype.getElement = function (num) {
    var element = this.elements[num];
    this.elements = [];
    this.elements[0] = element;
    return this;
}


//·······················常规

//设置CSS
Base.prototype.css = function (attr, value) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 1) {
            if (typeof window.getComputedStyle != "undefined") {  //W3C
                return window.getComputedStyle(this.elements[i], null)[attr];
            } else { //IE
                return this.elements[i].currentStyle[attr];
            }
        }
        this.elements[i].style[attr] = value;
    }
    return this;
}

// 添加Class
Base.prototype.addClass = function (cName) {
    for (var i = 0; i < this.elements.length; i++) {
        if (!this.elements[i].className.match(new RegExp('(\\s|^)'+cName+'(\\s|$)'))) {// 防止className重复
            this.elements[i].className += ' ' + cName;  // 和已有的class累加
        }
    }
    return this;
}

// 删除Class
Base.prototype.removeClass = function (cName) {
    for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i].className.match(new RegExp('(\\s|^)'+cName+'(\\s|$)'))) {// 防止className重复
            this.elements[i].className=this.elements[i].className.replace(new RegExp('(\\s|^)'+cName+'(\\s|$)'), ' ')
        }
    }
    return this;
}

// 添加link或style的CSS规则
Base.prototype.addRule = function(sum, selectorText, cssText, position){
    // sum:表示那个link或style；selectorText：规则元素名，可以是标签名、idea和类名；
    //cssText：规则；position：将规则添加到规则集的位置；
    var sheet = document.styleSheets[sum];
    if(typeof sheet.insertRule != "undefined"){
        sheet.insertRule(selectorText+"{"+cssText+"}", position);
    }else if(typeof sheet.addRule != "undefined"){//IE
        sheet.addRule(selectorText, cssText, position);
    }
    return this;
}

// 移除link或style的CSS规则
Base.prototype.removeRule = function(sum, index){
    var sheet = document.styleSheets[sum];
    if(typeof sheet.deleteRule != "undefined"){
        sheet.deleteRule(index);
    }else if(typeof sheet.removeRule != "undefined"){//IE
        sheet.removeRule(index);
    }
    return this;
}

//设置innerHTML
Base.prototype.html = function (str) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 0) {
            return this.elements[i].innerHTML;
        }
        this.elements[i].innerHTML = str;
    }
    return this;
}

//·······················事件

//触发点击事件
Base.prototype.click = function (fm) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].onclick = fm;
    }
    return this;
}

//设置鼠标移入和移除事件
Base.prototype.hover = function (over, out) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].onmouseover = over;
        this.elements[i].onmouseout = out;
    }
    return this;
}

// 设置显示
Base.prototype.show = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = "block";
    }
    return this;
}


// 设置隐藏
Base.prototype.hide = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = "none";
    }
    return this;
}







