## Step 1

//These will give a full range of colours when used

```js
colorMode(HSB, 360, 100, 100);
```

//The beginShape() and the endShape() will allow the user to create more complex shapes
instead of using rect(100,100,100,100) to create a shape
beginShape will need a parameter in this case it is a TRIANGLE_FAN, this will tell
what you are trying to create with the vertexs,

```js
beginShape(TRIANGLE_FAN);
   vertex(57.5, 50);
   vertex(57.5, 15);
   vertex(92, 50);
   vertex(57.5, 85);
   vertex(22, 50);
   vertex(57.5, 15);
endShape();
```
