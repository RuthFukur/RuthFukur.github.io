$(document).ready(function () {
    var Timer;

    function Interval() {
        Timer = setInterval(funX, parseInt($("#growRate").val()));
    }

    function funX() {
        let size = parseInt($(".circles").height()) + parseInt($("#growthAmount").val());
        $(".circles").height(size);
        $(".circles").width(size);
    }

    function generateColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color = color + letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function randomGenerator(max) {
        return Math.floor(Math.random() * max);
    }

    function createCircles() {
        let height = $('#container').height();
        let width = $('#container').width();
        let circleSize = parseInt($("#width").val());
        for (let i = 0; i < parseInt($("#numCircles").val()); i++) {
            $("#container").append($("<div>", {
                "class": "circles",
                "css": {
                    "background-color": generateColor(),
                    "width": circleSize,
                    "height": circleSize,
                    "top": randomGenerator(height - circleSize),
                    "left": randomGenerator(width - circleSize)
                },
                "click": function () {
                    this.remove();
                }
            }));
        }
    }

    $("form").submit(function (x) {
        x.preventDefault();
        createCircles();
        Interval();
    });
});