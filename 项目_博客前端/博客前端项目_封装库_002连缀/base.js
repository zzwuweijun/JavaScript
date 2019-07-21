/*
var Base_ = {
    getId: function (id) {
        return document.getElementById(id);
    },
    getName:function (id){
        return document.getElementsByName(id);
    },
    getTagName:function (id){
        return document.getElementsByTagName(id);
    }
}



* */

function Base() {
    this.elements = [];

    // 获取ID节点
    this.getId=function (id) {
        this.elements.push(document.getElementById(id));
        return this;
    }

    // 获取元素节点
    this.getTagName=function (tag) {
        var tags = document.getElementsByTagName(tag);
        for(var i = 0; i<tags.length; i++){
            this.elements.push(tags[i]);
        }
        return this;
    }
}

var $ = function(){
    return new Base();
}();

Base.prototype.html = function(str){
    for(var i = 0; i<this.elements.length; i++){
        this.elements[i].innerHTML = str;
    }
    return this;
}

Base.prototype.css = function(attr, value){
    for(var i = 0; i<this.elements.length; i++){
        this.elements[i].style[attr] = value;
    }
    return this;
}

Base.prototype.click = function(fm){
    for(var i = 0; i<this.elements.length; i++){
        this.elements[i].onclick = fm;
    }
    return this;
}

Base.prototype.innerHtml = function(attr, value){
    return this.elements[0].innerHTML;
}









