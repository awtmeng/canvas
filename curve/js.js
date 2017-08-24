var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    endPoints = [
        {
            x: 130,
            y: 70
        },
        {
            x: 430,
            y: 270
        }
    ],
    controlPoints = [
        {
            x: 130,
            y: 250
        },
        {
            x: 450,
            y: 70
        }
    ]

function drawGrid(color, stepx, stepy) {
    
}

function drawBezierCurve() {
    context.strokeStyle = 'blue';
    context.beginPath()
    context.moveTo(endPoints[0].x,endPoints[0].y);
    context.bezierCurveTo(controlPoints[0].x, controlPoints[0].y,controlPoints[1].x,controlPoints[1].y,endPoints[1].x,endPoints[1].y)
    context.stroke()
}

function drawEndPoints() {
    context.strokeStyle = 'blue';
    context.fillStyle = 'red';
    endPoints.forEach(function (point) {
        context.beginPath()
        context.arc(point.x, point.y, 5, 0, Math.PI*2, false)
        context.stroke()
        context.fill()
    })
}

function drawControlPoints() {
    context.strokeStyle = 'yellow';
    context.fillStyle = 'blue';

    controlPoints.forEach(function (point) {
        context.beginPath();
        context.arc(point.x, point.y, 5, 0, Math.PI*2, false)
        context.stroke()
        context.fill()
    })
}

drawGrid('lightgray', 10, 10)

drawControlPoints();
drawEndPoints();
drawBezierCurve();
