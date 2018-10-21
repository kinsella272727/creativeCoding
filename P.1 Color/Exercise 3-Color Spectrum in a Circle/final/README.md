## Final Step

//This background will redraw when a key is pressed
this is to prevent the circle from redrawing over itself
and the background will redraw as the circle does

```js
background(50,100,100);
```

//When the s key is pressed the canvas will save a png

```js
if (key =='s' || key == 'S') saveCanvas(gd.timestamp(), '.png');
```

//in this switch statement when one of the numbers is pressed it will change
the number of vertexs thus changing the angle

```js
switch (key) {
            case '1':
            segmentCount = 360;
            break;
            case '2':
            segmentCount = 45;
            break;
            case '3':
            segmentCount = 24;
            break;
            case '4':
            segmentCount = 12;
            break;
            case '5':
            segmentCount = 6;
            break;
    }
```
