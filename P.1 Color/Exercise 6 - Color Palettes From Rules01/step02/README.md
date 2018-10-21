## Step 2

//This will constrain the changes to the rectangles to the canvas

```js
var mX = constrain(mouseX, 0, width);
var mY = constrain(mouseY, 0, height);
```

//variable sets up counter

```js
var counter = 0;
```

//this will map the tilecount with the constraints

```js
var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
```

//This has changed from dividing by the tilecount to dividing by the currentTileCount

```js
var tileWidth = width / currentTileCountX;
var tileHeight = height / currentTileCountY;
```
