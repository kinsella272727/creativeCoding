## Step 2

//This is a loop within a loop, this will create a grid of squares covering the canvas. 
It will be 16 in the xaxis and and 8 in the yaxis, This is because 50 that is in eachloop,
will divide into 800 = 16 times and will divide into 400 = 8 times

```js
for(var gridY = 0; gridY < height; gridY += 50) {
      for(var gridX = 0; gridX < width; gridX += 50){
        fill('blue');
        rect(gridX,gridY,100,100);
      }
  }
```
