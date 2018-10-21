## Step 2

Loads a empty colors array

```js
var colors = [];
```

Define the number of tiles

```js
var tileCount = 20;
```

And the width of each tile

```js
var rectSize = width / tileCount;
```

This is to empty our colors array each time
the draw function loops

```js
colors = [];
```

If our image is 400px wide and high and our tile count is 20
which will mean our tile width is also 200px. We will want to grab the colors
at 0,20,40,60... and store them

```js
for(var gridY = 0; gridY < tileCount; gridY++)
```

For each gridX value we need to work out a color
to be stored

```js
for(var gridX = 0; gridX < tileCount; gridX++))
```

We work out a pixel value in the x and y

```js
var px = int(gridX * rectSize);
var py = int(gridY * rectSize);
```

We then convert this to the appropriadt index value in the pixels array

```js
var i = (py * img.width + px) * 4;
```

We then create a color object

```js
var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i+ 2], img.pixels[i + 3]);
```
