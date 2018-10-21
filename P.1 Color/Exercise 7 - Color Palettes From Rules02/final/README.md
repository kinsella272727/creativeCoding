## Final Step

When certain keys is pressed the following will happen

```js
function keyPressed()
```

This will save a screenshot of the canvas as a png with the timestamp as the name

```js
if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
```

This will save an ase file of the colour palette which can be used in certain programs


```js
if (key == 'c' || key == 'C')
```
