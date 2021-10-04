const url = window.location.search;
const param = new URLSearchParams(url);
const id = param.get("id");
console.log(id);
const detailTitle = document.querySelector("#detail-title");
const detail = document.querySelector("#detail");

fetch("./category.json")
	.then((response) => response.json())
	.then((result) => {
		result.items.forEach((item) => {
			if (item.id === id) {
				detail.innerHTML += `	<p class="edition" id="detail-title">
				${item.brand} ${item.title.replace("_", " ")}
			</p> 
			<div class="mini-flex">
				<div class="view-product"><p>see other marantz products</p></div>
				<div class="products-coast">
					<p>
						<span class="onsale">£469.00</span>
						<span class="current-price">£429.00</span>
					</p>
				</div>
			</div>
			<p>
				The PM6006 is an upgraded successor of the multi-award-winning
				PM6005. Marantz retained the pre-amp and power-amp sections that
				exclusively featured discret components-not a single IC in sight
				of the signal path.the PM6006 is upgraded for peak current at the
				amplifier stage, which makes it possible to refine the sound for
				you in much more detail
			</p>
			<button class="detail-button">ASK QUESTION</button>
			<button class="detail-button">PART EXCHANGE</button>
			<button class="detail-button">PAY BY FINANCE</button>
			<button class="detail-button">SEEN A BETTER PRICE</button>

			<form class="form-container" action="#">
				<div class="reqired-box">
					<div class="required-area">
						<p>Finish <span class="star">*</span></p>
						<p class="required">*Required Fields</p>
					</div>
					<div class="check-box">
						<div class="black-checkbox">
							<input
								type="checkbox"
								id="black"
								name="black"
								value="black"
							/>
							<label for="black"> Black</label><br />
						</div>
						<div class="silver-checkbox">
							<input
								type="checkbox"
								id="Silver"
								name="silver"
								value="silver"
							/>
							<label for="silver"> Silver</label><br />
						</div>
					</div>
				</div>
				<div class="gray-box">
					<label for="quantity">Qty</label>
					<input
						type="number"
						id="quantity"
						name="quantity"
						min="1"
						max="99"
					/>
					<button>ADD TO CART</button>
					<div class="paypal">
						<p>-OR-</p>
						<img src="images/paypal.jpg" alt="" />
					</div>
					<hr />
				</div>
			</form>
			<h2 class="table-heading">ADITIONAL INFORMATION</h2>
			<div class="table">
				<table>
					<th class="half-gray">MANUFACTUR</th>
					<td>Marantz</td>

					<tr>
						<th class="half-gray">MANUFACTUR LINK</th>

						<td class="marantz">Marantz PM6006</td>
					</tr>
					<th class="half-gray">FREE WARRANTY</th>
					<td>3 years</td>

					<tr>
						<th class="half-gray">DELIVERY CHARGE</th>

						<td>Free</td>
					</tr>
					<th class="half-gray">DELIVERY TIME</th>
					<td>1 - 5 working days</td>

					<tr>
						<th class="half-gray">CARD SURCHARGES</th>

						<td>No</td>
					</tr>
				</table>
			</div>`;
			}
		});
	});
