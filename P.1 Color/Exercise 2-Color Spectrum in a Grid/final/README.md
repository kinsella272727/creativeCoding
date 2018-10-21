## Final Step

This will count the number of tiles in the xaxis and the number of rows in the yaxis

```js
var numberofCols = mouseX + 2;
var numberofRows = mouseY + 2;
```

This will step in the nested for loop, the stepX and stepY will be used to increment
 and will be the width and the height of each rectangle
 
```js
var stepX = width/numberofCols;
var stepY = width/numberofRows;
```
