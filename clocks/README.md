# 第一节课制作一个钟表

# 主要用到了画园的方法

context.beginPath();
context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2, true);
context.fill()

# 改变圆心位置

context.moveTo(canvas.width / 2, canvas.height / 2);

# 画线的方法

context.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius, canvas.height / 2 + Math.sin(angle) * handRadius);

# 清空画板

context.clearRect(0, 0, canvas.width, canvas.height);



```