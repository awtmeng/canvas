var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    FONT_HEIGHT = 15,
    MARGIN = 35,
    HAND_TRUNCATION = canvas.width / 25,
    HOUR_HAND_TRUNCATION = canvas.width / 10,
    NUMERAL_SPACING = 20,
    RADIUS = canvas.width / 2 - MARGIN,
    HAND_RADIUS = RADIUS + NUMERAL_SPACING;

function drawCircle() {
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, RADIUS, 0, Math.PI * 2, true);
    context.stroke();
}

function drawNumbers() {
    var numberals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        angle = 0,
        numberalWidth = 0;

    numberals.forEach(function (numberal) {
        angle = Math.PI / 6 * (numberal - 3);
        numberalWidth = context.measureText(numberal).width;
        context.fillText(numberal,
            canvas.width / 2 + Math.cos(angle) * (HAND_RADIUS) - numberalWidth / 2,
            canvas.height / 2 + Math.sin(angle) * (HAND_RADIUS) + FONT_HEIGHT / 3);
    })
}

function drawCenter() {
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2, true);
    context.fill()
}

function drawHand(loc, isHours) {
    var angle = (Math.PI * 2) * (loc / 60) - Math.PI / 2,
        handRadius = isHours ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION : RADIUS - HAND_TRUNCATION;

    context.moveTo(canvas.width / 2, canvas.height / 2);
    context.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius, canvas.height / 2 + Math.sin(angle) * handRadius);
    context.stroke();
}

function drawHands() {
    var date = new Date,
        hours = date.getHours();

    hours = hours > 12 ? hours - 12 : hours;

    drawHand(hours * 5 + (date.getMinutes() / 60) * 5, true, 0.5)
    drawHand(date.getMinutes(), false, 0.5)
    drawHand(date.getSeconds(), false, 0.2)
}

function drawClock() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    drawCenter();
    drawHands();
    drawNumbers();
}

context.font = FONT_HEIGHT + 'px Arial'
loop = setInterval(drawClock, 1000)