## Step 3

This will draw the colors using the array

```js
var i = 0;
    for(var gridY = 0; gridY < tileCount; gridY++) {
        for(var gridX = 0; gridX < tileCount; gridX++) {
            fill(colors[i]);
            rect(gridX * rectSize, gridY * rectSize, rectSize,rectSize);
            i++;
        }
    }
```
