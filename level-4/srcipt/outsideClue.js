AFRAME.registerComponent('open-out-clue', {
	init: function () {
		let el = this.el
		let outPopup = document.getElementById('outClue')
		this.outIntro = function () {
			outPopup.classList.remove('hide')
		}
		this.el.addEventListener('click', this.outIntro)
	},
	remove: function () {
		this.el.removeEventListener('click', this.outIntro)
	},
})
function closeOutPopup() {
	let outPopup = document.getElementById('outClue')
	outPopup.classList.add('hide')
}
