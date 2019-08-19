$().extend('drag', function () {
    // tags 表示要传入的具体的对象
    var tags = arguments;
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].onmousedown = function (e) {
            // 在火狐中，如果拖动空白元素，出BUG，没有拖动过程，直接给出拖动结果。
            // 这是火狐支持的问题，关闭默认行为即可。
            var e = getEvent(e);
            // 判断元素内是否有其他元素，没有则阻止默认行为
            if (trim(this.innerHTML).length == 0) e.preventDefault();
            var _this = this;
            var diffX = e.clientX - _this.offsetLeft;
            var diffY = e.clientY - _this.offsetTop;

            var flag = false;
            for (var i = 0; i < tags.length; i++) {
                if (e.target == tags[i]) {
                    flag = true;					//只要有一个是true，就立刻返回
                    break;
                }
            }
            // alert(e.target);
            // alert(tags[0]);
            if (flag) {
                document.onmousemove = function (e) {
                    var e = getEvent(e);
                    var left = e.clientX - diffX;
                    var top = e.clientY - diffY;
                    //防止元素拖出视线范围内
                    if (left < 0) {
                        left = 0;
                    } else if (left <= getScroll().left) {
                        left = getScroll().left;
                    } else if (left > getInner().width + getScroll().left - _this.offsetWidth)
                        left = getInner().width + getScroll().left - _this.offsetWidth;
                    if (top < 0) {
                        top = 0
                    } else if (top <= getScroll().top) {
                        top = getScroll().top;
                    } else if (top > getInner().height + getScroll().top - _this.offsetHeight)
                        top = getInner().height + getScroll().top - _this.offsetHeight;
                    _this.style.left = left + "px";
                    _this.style.top = top + "px";
                    //将鼠标事件锁定在指定的元素上，当元素捕获了鼠标事件后，该事件只能作用在当前元素上。
                    if (typeof _this.setCapture != 'undefined') {
                        _this.setCapture();
                    }
                };
                document.onmouseup = function () {
                    this.onmousemove = null;
                    this.onmouseup = null;
                    if (typeof _this.releaseCapture != 'undefined') {
                        _this.releaseCapture();
                    }
                }
            }
        };
        return this;
    }
});

