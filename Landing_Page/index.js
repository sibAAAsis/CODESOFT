function openNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "50%";
}
function closeNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "0%";
}


var typed = new Typed('#element', {
    strings: ['Online Class', 'Recordings of Classes','School Subjects','College Subjects','and Many More...'],
    typeSpeed: 50,
  });