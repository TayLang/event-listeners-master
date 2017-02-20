// GO!
var studentButton = document.querySelector('#studentButton')
var	navMenu = document.querySelector('.nav-menu,a')
var navState = {
	showing: true,
}

studentButton.addEventListener('click', function() {
	if (navState.showing) {
		navMenu.style.opacity = '0'
		navState.showing = false
	}
	else {
		navMenu.style.opacity = '1'
		navState.showing = true
	}
})

var inputNode = document.querySelector('input[type="text"]')
var guestNode = document.querySelector('.guest-list')

inputNode.addEventListener('keydown', function(guest){
  if (guest.keyCode === KEYCODES.enter) {
  	guestNode.appendChild(guest.target.value)
  }
})	