const url = window.location.search;
const param = new URLSearchParams(url);
const id = param.get("id");
console.log(id);
const detailTitle = document.querySelector("#detail-title");
const detail = document.querySelector("#detail");
const detailPageLeftContent = document.querySelector(
	"#detail-page-left-content"
);

fetch("./category.json")
	.then((response) => response.json())
	.then((result) => {
		result.items.forEach((item) => {
			if (item.id === id) {
				let sale;
				if (item.price.onsale) {
					sale = `${item.price.currency}${item.price.salePrice.toFixed(2)}`;
				} else {
					sale = "";
				}
				detailPageLeftContent.innerHTML += `		<p class="uk-edition">
				<span class="home-amplifier">Home / ${item.category}</span> / ${item.brand} ${
					item.title
				}
			</p>
			<div class="webshop-baner">
				<img src="images/webshop_banner.png" alt="" />
			</div>
			<div class="main-details" id="detail-page-left-content">
				<div class="detail-page-left-content">
					<div class="main-lefft-img">
						<img src="${item.image}" alt="" />
					</div>
					<p class="more-view">MORE VIEWS</p>
					<div class="mini-img">
						<img
							src="images/forforstaerkere/parasound_classic7100.jpg"
							alt=""
						/>
						<img src="images/pladespillere/rpm10/Pro_ject_rpm10.jpg" alt="" />
					</div>
					<div class="detail-page-description">
						<h2 class="desc">DESCRIPTION</h2>
						<ul>
							<li>
								<p>Power Output(8/4 Ohm RAMS)</p>
								<p>
									${item.details.description.powerOutput} 
									
								</p>
							</li>
							<li>
								<p>Frequency Response</p>
								<p>
								${item.details.description.frequencyResponse}
								</p>
							</li>
							<li>
								<p>Total Harmonic Distortion</p>
								<p>${item.details.description.totalHarmonicDistortion}</p>
							</li>
							<li>
								<p>Damping Factor</p>
								<p>${item.details.description.dampingFactor}</p>
							</li>
							<li>
								<p>Input Sensetivity:MM</p>
								<p>${item.details.description.inputSensetivityMm}</p>
							</li>
							<li>
								<p>Input Sensetivity: MC</p>
								<p>${item.details.description.inputSensetivityMc}</p>
							</li>
							<li>
								<p>Signal to Noise Ratio: MM/MC</p>
								<p>${item.details.description.signalToNoiseRatio}</p>
							</li>
							<li>
								<p>Input Sensetivity: High level</p>
								<p>${item.details.description.inputSensetivityHighLevel}</p>
							</li>
							<li>
								<p>Input Sensetivity: Balanced High level</p>
								<p>${item.details.description.inputSensetivityBalancedhighLevel}</p>
							</li>
							<li>
								<p>Signal to Noise Ratio: High level</p>
								<p>${item.details.description.signalToNoiseRatioHighLevel}</p>
							</li>
							<li>
								<p>Input Sensetivity: Power Amp Direct IN</p>
								<p>${item.details.description.inputSensetivityPowerAmpDirectIn}</p>
							</li>
							<li>
								<p>Signal to Noise Ratio:Power Amp Direct IN</p>
								<p>${item.details.description.signalToNoiseRatioPowerAmpDirectIn}</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="main-right-details" id="detail">
				 	<p class="edition" id="detail-title">
				${item.brand} ${item.title.replace("_", " ")}
			</p> 
			<div class="mini-flex">
				<div class="view-product"><p>see other ${item.brand} products</p></div>
				<div class="products-coast">
					<p>
						<span class="onsale">${sale}</span>
						<span class="current-price">${item.price.currency}${item.price.current.toFixed(
					2
				)}</span>
					</p>
				</div>
			</div>
			<p>
				${item.details.productInfo}
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
							<label for="black"> ${item.details.color[0]}</label><br />
						</div>
						<div class="silver-checkbox">
							<input
								type="checkbox"
								id="Silver"
								name="silver"
								value="silver"
							/>
							<label for="silver"> ${item.details.color[1]}</label><br />
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
					<td>${item.brand}</td>

					<tr>
						<th class="half-gray">MANUFACTUR LINK</th>

						<td class="marantz">${item.brand} ${item.title.replace("_", " ")}</td>
					</tr>
					<th class="half-gray">FREE WARRANTY</th>
					<td>${item.details.additionalInfo.freeWarranty}</td>

					<tr>
						<th class="half-gray">DELIVERY CHARGE</th>

						<td>${item.details.additionalInfo.deliveryCharge}</td>
					</tr>
					<th class="half-gray">DELIVERY TIME</th>
					<td>${item.details.additionalInfo.deliveryTime}</td>

					<tr>
						<th class="half-gray">CARD SURCHARGES</th>

						<td>${item.details.additionalInfo.cardSurcharges}</td>
					</tr>
				</table>
			</div>`;
			}
		});
	});
