## Step 1

//Variables for the tile count

```js
var tileCountX = 50;
var tileCountY = 10;
```

//This will prevent the rest of the code executing in the draw function

```js
noLoop();
```

//This variable will set a row count with a random number between 5 and 30
the int will ensure that the number won't end in a decimal

```js
var rowCount = int(random(5, 30));
```

//This will divide the height and the rowcount to make sure that the height isn't
the same for each row

```js
var rowHeight = height / rowCount;
```

//this for loop will begin the count for the row

```js
for (var i = rowCount; i >= 0; i--) 
```

//Creates an empty array to store

```js
var parts = [];
```

//This will add all the sub parts together

```js
var sumPartsTotal = 0;
```
