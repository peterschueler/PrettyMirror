function toggleDropdown(element, parent) {
	document.getElementById(element).classList.toggle("show");
	var men = document.getElementById(parent);
	men.classList.toggle('radius');
}

function toggleTab(event, type) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("active", "");
	}
	document.getElementById(type).style.display = "block";
	evt.currentTarget.className += " active";
}