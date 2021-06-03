AFRAME.registerComponent('open-paper', {
	init: function () {
		let el = this.el
		let popup = document.getElementById('paperClue')
		this.openPaper = function () {
			popup.classList.remove('hide')
		}
		this.el.addEventListener('click', this.openPaper)
	},
	remove: function () {
		this.el.removeEventListener('click', this.openPaper)
	},
})
function closePopup() {
	let popup = document.getElementById('paperClue')
	popup.classList.add('hide')
}
