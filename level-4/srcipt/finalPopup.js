AFRAME.registerComponent('open-final', {
	init: function () {
		let el = this.el
		let Cylinder = document.getElementById('cylinder')
		let finalPopup = document.getElementById('finalClue')
		let finalFalsePopup = document.getElementById('finalClueFalse')

		this.finalInfo = function () {
			if (Cylinder.classList.contains('clicked')) {
				finalPopup.classList.remove('hide')
			} else {
				finalFalsePopup.classList.remove('hide')
			}
		}
		this.el.addEventListener('click', this.finalInfo)
	},
	remove: function () {
		this.el.removeEventListener('click', this.finalInfo)
	},
})

function closeFinalPopup() {
	let finalPopup = document.getElementById('finalClue')
	finalPopup.classList.add('hide')
}
function closeFinalFalsePopup() {
	let finalFalsePopup = document.getElementById('finalClueFalse')
	finalFalsePopup.classList.add('hide')
}
// if (document.getElementById('cylinder').classlist.contains('clicked')) {
