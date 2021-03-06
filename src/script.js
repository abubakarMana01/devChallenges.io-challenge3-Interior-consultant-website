const sideNav = document.querySelector('.side-nav');
const sideNavLinks = document.querySelector('.side-nav ul');
const section = document.querySelector('section');
const body = document.querySelector('body');
const close = document.querySelector('.close');
const hamburger = document.getElementById('hamburger');
const icon = document.querySelector('.icon');

function showNav() {
	sideNav.style.transform = 'scale(1)';
	hamburger.style.opacity = '0';
	hamburger.style.pointerEvents = 'none';
	body.style.overflow = 'hidden';
	close.style.transform = 'translateX(0)';
}
function hideNav() {
	sideNav.style.transform = 'scale(0)';
	hamburger.style.opacity = '1';
	hamburger.style.pointerEvents = 'all';
	body.style.padding = '1.5rem 1rem';
	body.style.overflowX = 'all';
	close.style.transform = 'translateX(200px)';
}

hamburger.addEventListener('click', showNav);
close.addEventListener('click', hideNav);
