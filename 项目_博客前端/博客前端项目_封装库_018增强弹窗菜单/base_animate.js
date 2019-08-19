$().extend('animate', function (obj) {
    //设置动画
    for (var i = 0; i < this.elements.length; i ++) {
        var element = this.elements[i];
        var attr = obj['attr'] == 'x' ? 'left' : obj['attr'] == 'y' ? 'top' :
            obj['attr'] == 'w' ? 'width' : obj['attr'] == 'h' ? 'height' :
                obj['attr'] == 'o' ? 'opacity' : 'left';

        var start = obj['start'] != undefined ? obj['start'] : 									// 设置初始值
            attr == 'opacity' ? parseFloat(getStyle(element, attr)) * 100 :
                parseInt(getStyle(element, attr));

        var t = obj['t'] != undefined ? obj['t'] : 30;												//可选，默认30毫秒执行一次
        var step = obj['step'] != undefined ? obj['step'] : 10;								//可选，每次运行10像素

        var alter = obj['alter'];
        var target = obj['target'];

        var speed = obj['speed'] != undefined ? obj['speed'] : 6;							//可选，默认缓冲速度为6
        var type = obj['type'] == 0 ? 'constant' : obj['type'] == 1 ? 'buffer' : 'buffer';		//可选，0表示匀速，1表示缓冲，默认缓冲

        if (alter != undefined && target == undefined) {
            target = alter + start;
        } else if (alter == undefined && target == undefined) {
            throw new Error('alter增量或target目标量必须传一个！');
        }

        if (start > target) step = -step;

        if (attr == 'opacity') {
            element.style.opacity = parseInt(start) / 100;
            element.style.filter = 'alpha(opacity=' + parseInt(start) +')';
        } else {
            element.style[attr] = start + 'px';
        }

        clearInterval(element.timer);
        element.timer = setInterval(function () {

            if (type == 'buffer') {
                step = attr == 'opacity' ? (target - parseFloat(getStyle(element, attr)) * 100) / speed :
                    (target - parseInt(getStyle(element, attr))) / speed;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
            }

            if (attr == 'opacity') {
                if (step == 0) {
                    setOpacity();
                } else if (step > 0 && Math.abs(parseFloat(getStyle(element, attr)) * 100 - target) <= step) {
                    setOpacity();
                } else if (step < 0 && (parseFloat(getStyle(element, attr)) * 100 - target) <= Math.abs(step)) {
                    setOpacity();
                } else {
                    var temp = parseFloat(getStyle(element, attr)) * 100;
                    element.style.opacity = parseInt(temp + step) / 100;
                    element.style.filter = 'alpha(opacity=' + parseInt(temp + step) + ')'
                }

            } else {
                if (step == 0) {
                    setTarget();
                } else if (step > 0 && Math.abs(parseInt(getStyle(element, attr)) - target) <= step) {
                    setTarget();
                } else if (step < 0 && (parseInt(getStyle(element, attr)) - target) <= Math.abs(step)) {
                    setTarget();
                } else {
                    element.style[attr] = parseInt(getStyle(element, attr)) + step + 'px';
                }
            }

            //document.getElementById('aaa').innerHTML += step + '<br />';
        }, t);

        function setTarget() {
            element.style[attr] = target + 'px';
            clearInterval(element.timer);
            // 动画队列
            if(obj.fn != undefined) obj.fn();
        }

        function setOpacity() {
            element.style.opacity = parseInt(target) / 100;
            element.style.filter = 'alpha(opacity=' + parseInt(target) + ')';
            clearInterval(element.timer);
            // 动画队列
            if(obj.fn != undefined) obj.fn();
        }
    }
    return this;
});

