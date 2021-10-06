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

## shop list page

shop page will contain all brands and when the user click on one of them, it will show all the brands in that category

## category page

I am fetching the data from `category.json` and category page will contain all brands according to their category

```js
fetch("./category.json")
	.then((response) => response.json())
	.then((result) => {
		// ...
	});
```

## detail page

Here I am fetching data from `detail.json` and
In detail page the user can see all products with full information like price, brand and soon:

````js
fetch("./detail.json")
	.then((response) => response.json())
	.then((result) => {
		// ...
	});
	```
	```js
	if () {
		// ...
		}
```


````
