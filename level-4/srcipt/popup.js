AFRAME.registerComponent('open-popup', {
	init: function () {
		let el = this.el
		let Firstpopup = document.getElementById('popupWindow')
		let Cylinder = document.getElementById('cylinder')
		this.openPopup = function () {
			Firstpopup.classList.remove('hide')
			Cylinder.classList.add('clicked')
		}
		this.el.addEventListener('click', this.openPopup)
	},
	remove: function () {
		this.el.removeEventListener('click', this.openPopup)
	},
})
function closeFirstPopup() {
	let Firstpopup = document.getElementById('popupWindow')
	Firstpopup.classList.add('hide')
}
