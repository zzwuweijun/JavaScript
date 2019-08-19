$().extend('animate', function (obj) {
    //设置动画
    for (var i = 0; i < this.elements.length; i ++) {
        var element = this.elements[i];
        var attr = obj['attr'] == 'x' ? 'left' : obj['attr'] == 'y' ? 'top' :
            obj['attr'] == 'w' ? 'width' : obj['attr'] == 'h' ? 'height' :
                obj['attr'] == 'o' ? 'opacity' : obj["attr"] != undefined? obj["attr"] : 'left';

        var start = obj['start'] != undefined ? obj['start'] : 									// 设置初始值
            attr == 'opacity' ? parseFloat(getStyle(element, attr)) * 100 :
                parseInt(getStyle(element, attr));

        var t = obj['t'] != undefined ? obj['t'] : 30;												//可选，默认30毫秒执行一次
        var step = obj['step'] != undefined ? obj['step'] : 10;								//可选，每次运行10像素

        var alter = obj['alter'];       // 增加的值
        var target = obj['target'];     //  目标值
        var mul = obj['mul'];           //  同步实现

        var speed = obj['speed'] != undefined ? obj['speed'] : 6;							//可选，默认缓冲速度为6
        var type = obj['type'] == 0 ? 'constant' : obj['type'] == 1 ? 'buffer' : 'buffer';		//可选，0表示匀速，1表示缓冲，默认缓冲

        if (alter != undefined && target == undefined) {
            target = alter + start;
        } else if (alter == undefined && target == undefined && mul == undefined) {
            throw new Error('alter增量或target目标量必须传一个！');
        }

        if (start > target) step = -step;

        if (attr == 'opacity') {
            element.style.opacity = parseInt(start) / 100;
            element.style.filter = 'alpha(opacity=' + parseInt(start) +')';
        } else {
            element.style[attr] = start + 'px';
        }

        if (mul == undefined) {
            mul = {};
            mul[attr] = target;
        }

        clearInterval(element.timer);
        element.timer = setInterval(function () {
            //创建一个布尔值，这个值可以了解多个动画是否全部执行完毕
            var flag = true; //表示都执行完毕了

            //实现同步动画
            for (var i in mul) {
                attr = i == 'x' ? 'left' : i == 'y' ? 'top' : i == 'w' ? 'width' : i == 'h' ? 'height' : i == 'o' ? 'opacity' : i != undefined ? i : 'left';
                target = mul[i];

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
                    if (parseInt(target) != parseInt(parseFloat(getStyle(element, attr)) * 100)) flag = false;

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
                    if (parseInt(target) != parseInt(getStyle(element, attr))) flag = false;
                }
            }
            if (flag) {
                clearInterval(element.timer);
                if (obj.fn != undefined) obj.fn();
            }

            //document.getElementById('aaa').innerHTML += step + '<br />';
        }, t);

        function setTarget() {
            element.style[attr] = target + 'px';
        }

        function setOpacity() {
            element.style.opacity = parseInt(target) / 100;
            element.style.filter = 'alpha(opacity=' + parseInt(target) + ')';
        }
    }
    return this;
});

