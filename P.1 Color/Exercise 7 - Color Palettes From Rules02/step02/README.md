## Step 2

Global variable that will create a colour count with a value of 20

```js
var colorCount = 20;
```

Global arrays which are empty

```js
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
```

For loop that will create the colours and store them in the arrays for later use

```js
for (var i = 0; i < colorCount; i++)
```

Creates a variable that will have the counter modulo colorCount 

```js
var index = counter % colorCount;
```

Creates a variable to store the values of the 3 colour arrays

```js
var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
```
