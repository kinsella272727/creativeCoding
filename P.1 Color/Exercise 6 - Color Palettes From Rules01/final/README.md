## Final Step

Creates an ase file of the colours currently on screen

```js
f (key == 'c' || key == 'C') {
   var colors = [];
   for (var i = 0; i < hueValues.length; i++) {
     colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
   }
  writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
}
```

The following will change the colours in the grid

```js
if (key == '1') {
  for (var i = 0; i < tileCountX; i++) {
     hueValues[i] = random(360);
     saturationValues[i] = random(100);
     brightnessValues[i] = random(100);
  }
}
```
