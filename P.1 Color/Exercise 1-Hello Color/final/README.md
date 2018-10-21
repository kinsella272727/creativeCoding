## Final Step

//When s is pressed it will create a screenshot of the canvas, with the timestamp and the mouse postion in the x and y position as the name

```js
function keyPressed() {
    if (key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
```
