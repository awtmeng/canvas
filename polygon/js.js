var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),

    sidesSelect = document.getElementById('sidesSelect'),
    startAngleSelect = document.getElementById('startAngleSelect'),

    fillCheckbox = document.getElementById('fillCheckbox'),
    drawBtn = document.getElementById('draw'),

    mousedown = {
        x: 300,
        y: 300
    },
    rubberbandRect = {
        width: 40
    },

    Point = function (x, y) {
        this.x = x;
        this.y = y;
    }

    function getPolygonPoints(centerX, centerY, radius, sides, startAngle) {
        var points = [],
            angle = startAngle || 0;

        for (var i = 0; i < sides; ++i) {
            points.push(new Point(centerX + radius * Math.sin(angle), centerY - radius * Math.cos(angle)))
            angle += 2* Math.PI/sides;
        }

        return points;
    }

    function creatPolygonPath(centerX, centerY, radius, sides, startAngle) {
        var points = getPolygonPoints(centerX, centerY, radius, sides, startAngle);

        context.strokeStyle = 'blue';
        context.fillStyle = 'red';

        context.beginPath();
        context.moveTo(points[0].x, points[0].y);

        for (var i = 1; i < sides; ++i){
            context.lineTo(points[i].x, points[i].y);
        }
        context.closePath();
    }

    function drawRubberbandShape(sides, startAngle) {
        creatPolygonPath(mousedown.x, mousedown.y, rubberbandRect.width, parseInt(sidesSelect.value), (Math.PI /180)*parseInt(startAngleSelect.value));
        context.stroke();

        if(fillCheckbox.checked){
            context.fill();
        }
    }

    drawBtn.addEventListener('click', function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawRubberbandShape(sidesSelect.value, startAngleSelect.value);
    }, false)