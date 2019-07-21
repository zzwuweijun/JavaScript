/*
����ʽ
function getId(id){
    return document.getElementById(id);
}

``````````````````````````````````
����ʽ
var Base_ = {
    $: function (id) {
        return document.getElementById(id);
    },
    $$:function (id){
        return document.getElementsByName(id);
    },
    $$$:function (id){
        return document.getElementsByTagName(id);
    }
}


* */



var Base = {
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










