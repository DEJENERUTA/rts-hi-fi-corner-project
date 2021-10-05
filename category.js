const url = window.location.search;
const param = new URLSearchParams(url);
const search = param.get("search");

const cotegorylist = document.querySelector("#category-list");
const cardList = document.querySelector("#card-list");
const brandList = document.querySelector("#brand-list");
const title = document.querySelector("#title");
const miniTitle = document.querySelector("#mini-title");

fetch("./category.json")
	.then((response) => response.json())
	.then((result) => {
		function category(prop, element) {
			let arry = new Array();
			result.items.forEach((item) => {
				if (!arry.includes(item[prop])) {
					arry.push(item[prop]);
				}
			});
			arry.forEach((arrayItem) => {
				element.innerHTML += `<li>${arrayItem}</li>`;
			});
		}

		function createProduct(object) {
			let sale;
			if (object.price.onsale) {
				sale = `${object.price.currency}${object.price.salePrice.toFixed(2)}`;
			} else {
				sale = "";
			}
			let cart;
			if (object.price.cart) {
				cart = `<button class="cart-button">ADD TO CART</button>`;
			} else {
				cart = "";
			}

			cardList.innerHTML += `<a href="detail.html?id=${
				object.id
			}"><div class="products">
			<div class="single-product">
				<img src="${object.image}" alt="" />
			</div>
			<h3>${object.title}</h3>
			<p><span>${sale}</span> ${object.price.currency}${object.price.current.toFixed(
				2
			)}</p>
			${cart}
		</div></a>`;
		}

		if (search) {
			miniTitle.innerHTML += search;
			title.append(search.toUpperCase());
		}

		result.items.forEach((object) => {
			if (search && object.category == search) {
				createProduct(object);
			} else if (!search) {
				createProduct(object);
			}
		});
		category("category", cotegorylist);
		category("brand", brandList);
	});
