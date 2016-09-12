function heightResize() {
	var photoPage = document.getElementById('photo');
	var mainPage = document.getElementById('main');
	var photo = document.getElementById('test');
	mainPage.style.height = window.innerHeight + 'px';
	mainPage.style.width = window.innerWidth + 'px';
	photoPage.style.height = window.innerHeight + 700 + 'px';
}
window.onload = function() {
	heightResize();
	window.addEventListener('resize', heightResize);
}