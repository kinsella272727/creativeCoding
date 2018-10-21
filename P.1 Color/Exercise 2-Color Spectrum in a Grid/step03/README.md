## Step 3

The Hue and Saturation will be the qidth and height of the saveCanvas. 
This will give the hue a full range of colours

```js
colorMode(HSB, width, height, 100);
```

The hue will now be whatever the position of gridX will be
the saturation will be height-gridY, this will ensure that the
colours with the highest saturation will be at the top of the canvas

```js
fill(gridX,height-gridY,100);
```

Similar to the previous exercise, this will save a screenshot off the canvas with the mouseX and mouseY position. 
That will become important in the final step

```js
function keyPressed() {
    if (key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
```
