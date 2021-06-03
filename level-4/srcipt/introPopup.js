AFRAME.registerComponent('open-intro', {
	init: function () {
		let el = this.el
		let introPopup = document.getElementById('popupIntro')
		this.openIntro = function () {
			introPopup.classList.remove('hide')
		}
		this.el.addEventListener('click', this.openIntro)
	},
	remove: function () {
		this.el.removeEventListener('click', this.openIntro)
	},
})
function closeIntroPopup() {
	let introPopup = document.getElementById('popupIntro')
	introPopup.classList.add('hide')
}
