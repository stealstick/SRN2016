function heightResize() {
	var mainPage = document.getElementById('main');
	var photo = document.getElementById('test');
	mainPage.style.height = window.innerHeight + 'px';
	mainPage.style.width = window.innerWidth + 'px';
}
window.onload = function() {
	heightResize();
	window.addEventListener('resize', heightResize);
}
