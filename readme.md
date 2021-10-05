# HI-FI CORNER

## pages

In this project I have five pages:

- front page
- brand page
- brand list page
- category page
- list detail page

## reuseable component

## front page

front page contains logo and background image, there is also image gallery

```js
function skift() {
	// ... This function will perform to change the image galler
}
```

## brand page

This page shows the rest of the products that are found in the stock

## brand list page

## category page

I am fetching the data from `category.json`

```js
fetch("./category.json")
	.then((response) => response.json())
	.then((result) => {
		// ...
	});
```

## list detail page
