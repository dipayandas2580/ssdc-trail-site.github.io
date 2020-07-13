(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 1000,
            interval: 3000,
            
        };

        $.extend(true, setting, options);
        var states = [
            { $zIndex: 2, width: 600, height: 300, top: 50, left: -295, $opacity: 0.3 },
            { $zIndex: 4, width: 1000, height: 400, top: 0, left: -125, $opacity: 1 },
            { $zIndex: 2, width: 600, height: 300, top: 50, left: 450, $opacity: 0.3 },
            { $zIndex: 1, width: 250, height: 100, top: 69, left: 250, $opacity: 0 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
