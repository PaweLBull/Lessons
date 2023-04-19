document.addEventListener("click", function (event) {
	const targetElement = event.target;

	if (targetElement.closest('.menu__icon')) {
		document.documentElement.classList.toggle('menu-open');
		event.preventDefault();
	}
})


document.querySelector('.menu__search').onclick = function searchOpen() {
	document.querySelector('.menu__input').classList.toggle('search-open');
	document.querySelector('.menu__button-search').classList.toggle('search-open');
}

document.querySelector('.button-4-columns').onclick = function fourColumns() {
	document.querySelector('.articles__items').classList.remove('columns-3');
	document.querySelector('.button-3-columns').classList.remove('active');
	document.querySelector('.articles__items').classList.toggle('columns-4');
	document.querySelector('.button-4-columns').classList.add('active');
}

document.querySelector('.button-3-columns').onclick = function threeColumns() {
	document.querySelector('.articles__items').classList.remove('columns-4');
	document.querySelector('.button-4-columns').classList.remove('active');
	document.querySelector('.articles__items').classList.toggle('columns-3');
	document.querySelector('.button-3-columns').classList.add('active');
}
