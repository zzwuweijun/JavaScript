/*
基础库
* */
// 前台调用
var $ = function (_this) {
    return new Base_(_this);
};

// 基础库
function Base_(_this) {
    // 创建一个数组，保存获取的节点和节点数组
    this.elements = [];
    if (_this != undefined) { //  _this是一个对象，undefined也是一个对象，区别与typeof返回“undefined”
        this.elements[0] = _this;
    }
}

//·······················元素

// 获取ID节点
Base_.prototype.getId = function (id) {
    this.elements.push(document.getElementById(id));
    return this;
};

// 获取元素节点
Base_.prototype.getTagName = function (tag) {
    var tags = document.getElementsByTagName(tag);
    for (var i = 0; i < tags.length; i++) {
        this.elements.push(tags[i]);
    }
    return this;
};

// 获取class节点数组
Base_.prototype.getClass = function (CName, idName) {
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
};


//获取某一个节点，并返回这个节点对象
Base_.prototype.getElement = function (num) {
    return this.elements[num];
};

//获取某一个节点，并且Base对象
Base_.prototype.eq = function (num) {
    var element = this.elements[num];
    this.elements = [];
    this.elements[0] = element;
    return this;
};



//·······················常规

// 设置CSS
Base_.prototype.css = function (attr, value) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 1) {
            return getStyle(this.elements[i], attr);
        }
        this.elements[i].style[attr] = value;
    }
    return this;
};

// 添加Class
Base_.prototype.addClass = function (cName) {
    for (var i = 0; i < this.elements.length; i++) {
        if (!hasClass(this.elements[i], cName)) {// 防止className重复
            this.elements[i].className += ' ' + cName;  // 和已有的class累加
        }
    }
    return this;
};

// 删除Class
Base_.prototype.removeClass = function (cName) {
    for (var i = 0; i < this.elements.length; i++) {
        if (hasClass(this.elements[i], cName)) {// 防止className重复
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ')
        }
    }
    return this;
};

// 添加link或style的CSS规则
Base_.prototype.addRule = function (sum, selectorText, cssText, position) {
    // sum:表示那个link或style；selectorText：规则元素名，可以是标签名、idea和类名；
    //cssText：规则；position：将规则添加到规则集的位置；
    var sheet = document.styleSheets[sum];
    insertRele(sheet, selectorText, cssText, position);
    return this;
};

// 移除link或style的CSS规则
Base_.prototype.removeRule = function (sum, index) {
    var sheet = document.styleSheets[sum];
    deleteRule(sheet, index);
    return this;
};

// 设置innerHTML
Base_.prototype.html = function (str) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 0) {
            return this.elements[i].innerHTML;
        }
        this.elements[i].innerHTML = str;
    }
    return this;
};

//·······················事件

// 锁屏功能
Base_.prototype.lock = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.width = document.documentElement.scrollWidth + "px";
        this.elements[i].style.height = document.documentElement.scrollHeight + "px";
        this.elements[i].style.display = "block";
        document.documentElement.style.overflow = "hidden";
    }
    return this;
};
Base_.prototype.unlock = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = "none";
        document.documentElement.style.overflow = "auto";
    }
    return this;
};

// 触发点击事件
Base_.prototype.click = function (fm) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].onclick = fm;
    }
    return this;
};

// 设置鼠标移入和移除事件
Base_.prototype.hover = function (over, out) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].onmouseover = over;
        this.elements[i].onmouseout = out;
    }
    return this;
};

// 设置显示
Base_.prototype.show = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = "block";
    }
    return this;
};


// 设置隐藏
Base_.prototype.hide = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = "none";
    }
    return this;
};

// 设置元素页面居中
// 该元素要设置为绝对定位
Base_.prototype.center = function () {
    for (var i = 0; i < this.elements.length; i++) {
        var width = this.elements[i].clientWidth;
        var height = this.elements[i].clientHeight;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        this.elements[i].style.top = (windowHeight - height) / 2 + "px";
        this.elements[i].style.left = (windowWidth - width) / 2 + "px";
        return this;
    }
};

// 触发浏览器窗口事件
Base_.prototype.resize = function (fm) {
    for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];
        window.onresize = function () {
            fm();
            if (element.offsetLeft > getInner().width - element.offsetWidth) {
                element.style.left = getInner().width - element.offsetWidth + "px";
            }
            if (element.offsetTop > getInner().height - element.offsetHeight) {
                element.style.top = getInner().height - element.offsetHeight + "px";
            }
        }

    }
    return this;
};

//插件
Base_.prototype.extend = function (name, fm) {
    Base_.prototype[name] = fm;
};































