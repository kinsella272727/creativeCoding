## Step 2

//This is for incrementingthe angle which wiil be 360/360 and added to the angle value
in the for loop

```js
var angleIncrement = 360/segmentCount;
```

//this will set the radius for the circle at 200px

```js
var radius = 200;
```

//Like before there needs to be a beginShape and a endShape
but inside it is a for loop that will be used for creating the circle

```js
beginShape(TRIANGLE_FAN);
```
//First vertex is the starting point for the circle, it will be positioned at
half the size of the width and height to place it in the middle

```js
vertex(width/2, height/2);
```

//This for loop will create the other vertexs to create the shape

```js
for(var angle = 0; angle <= 360; angle= angle+angleIncrement)
```

//These two variables will be used for the vertex points
it will be the radius multipled by cos and sin depending on the axis

```js
var vx = radius * cos(radians(angle)) + width/2;
var vy = radius * sin(radians(angle)) + height/2;
```
