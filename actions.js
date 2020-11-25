//modal toggle logic

document.querySelector('.close').addEventListener('click', () => {
	document.querySelector(".bg-modal").style.display = "none"

	window.removeEventListener("scroll", myFunction)
})

//show

