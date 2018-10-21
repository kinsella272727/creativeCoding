## Final Step

//This has a number of functions if a certain key is pressed

```js
function keyPressed()
```

//If c is pressed it will create an ase file so you can use the color in future

```js
if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
```

//Like previous tasks if s is pressed it will save a screenshot of the canvas

```js
if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
```
