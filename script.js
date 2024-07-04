document.querySelector('.map-page').style.display = 'none'
document.querySelector('.time').style.display = 'none'

const navItems = document.querySelectorAll(".nav-item")
const mainContentContainer = document.querySelectorAll('.main-content-container')
for (let item of navItems) {
	item.addEventListener("click", () => {
		for (let i of navItems) {
			i.classList.remove("active")
		}
		item.classList.add('active')
		for (let i of mainContentContainer) {
			i.style.display = 'none'
			if (i.classList.contains(item.id)) {
				i.style.display = 'flex'
			}
		}
	})
}
let startDate = new Date()
let time = 0;

const timer = setInterval(() => {
	time = Math.round((Date.now() - startDate) / 1000);
	let minutes = 0
	let seconds = time % 60
	let hours = 0

	if (time / 60 < 60) {
		minutes = Math.floor(time / 60)
	} else if (time / 60 >= 60) {
		minutes = Math.floor(time / 60) % 60
		hours = Math.floor(Math.floor(time / 60) / 60)
	}

	hours = String(hours).padStart(2, '0')
	minutes = String(minutes).padStart(2, '0')
	seconds = String(seconds).padStart(2, '0')
	let timer = document.querySelector('.timer')
	if (timer) {
		timer.textContent = `${hours}:${minutes}:${seconds}`
	}
}, 1000);
const spinner = document.querySelector('.spinner')
window.onload = () => {
	spinner.style.opacity = '0'
	spinner.style.pointerEvents = 'none'

}
