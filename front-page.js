const bigImg = document.querySelector("#galleryPhoto");
const photoList = ["slide.jpg", "slide-2.jpg"];
let index = 0;
let newPhoto;
const arrowRight = document.querySelector("#next");
const arrowLeft = document.querySelector("#prev");
console.log(arrowLeft);
arrowRight.addEventListener("click", skift);
arrowLeft.addEventListener("click", skift);

function skift() {
	if (this.getAttribute("id") === "next") {
		if (index < photoList.length - 1) {
			index++;
		} else {
			index = 0;
		}
	} else {
		if (index > 0) {
			index--;
		} else {
			index = photoList.length - 1;
		}
	}
	console.log(index);
	newPhoto = "images/" + photoList[index];
	bigImg.setAttribute("src", newPhoto);
}
