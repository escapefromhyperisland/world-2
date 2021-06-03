AFRAME.registerComponent('open-popup', {
	init: function () {
		let el = this.el
		let Firstpopup = document.getElementById('popupWindow')
		this.openPopup = function () {
			Firstpopup.classList.remove('hide')
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
