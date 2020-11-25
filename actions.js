//modal toggle logic

function myFunction() {
  var elmnt = document.getElementsByTagName("BODY")[0];
  var y = elmnt.scrollTop;
  if ( y > 100) {
  	document.querySelector(".bg-modal").style.display = "flex"
  }
}

window.onload = () => {
	window.addEventListener("scroll", myFunction)
}

document.querySelector('.close').addEventListener('click', () => {
	document.querySelector(".bg-modal").style.display = "none"

	window.removeEventListener("scroll", myFunction)
})
