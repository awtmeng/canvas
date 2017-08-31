## 第一节课制作一个钟表

<a href="clocks/index.html">制作一个钟表</a>

## 第二节课制作一个坐标查看器

<a href="coordinate/index.html">坐标查看器</a>

## 第三节课绘制三次方贝塞尔曲线

<a href="curve/index.html">绘制三次方贝塞尔曲线</a>
### 绘制二次方贝塞尔曲线方法

```
quadraticCurveTo(double cpx, double cpy, double x, double y)
cpx, cpy 表示曲线控制点
x，y表示描点
```
### 绘制三次方贝塞尔曲线方法

```
bezierCurveTo(double cpx, double cpy, double cp2x, double cp2y, double x, double y)
cpx, cpy, cp2x, cp2y 表示曲线控制点
x，y表示描点
```

###绘制虚线

```
CanvasRenderingContext2D
```

## 绘制多边形

<a href="polygon/index.html">绘制多边形</a>

```
getPolygonPoints()创建并返回一个含有多边形的顶点的数组
createPolygonPath()调用getPolygonPoints()函数，以获得包含指定多边形各个顶点的数组，该函数先移动到第一个顶点，然后创建一条包含此多边形所有顶点的路径
drawRubberbandShape()完成多边形的绘制
```