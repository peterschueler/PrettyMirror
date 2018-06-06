function toggleDropdown(element, parent) {
	document.getElementById(element).classList.toggle("show");
	var men = document.getElementById(parent);
	men.classList.toggle('radius');
}