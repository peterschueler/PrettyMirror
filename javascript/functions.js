function toggleDropdown(element, parent) {
	document.getElementById(element).classList.toggle("show");
	var men = document.getElementById(parent);
	men.classList.toggle('radius');
}

function toggleTab(type, color, tabcontainer) {
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
	
	var regex = new RegExp("pm-tab-.*\s?", "i");
	
	document.getElementById(tabcontainer).className = document.getElementById("maintab").className.replace(regex, "pm-tab-" + color);
}

function toggleSortOrder(element) {
	var link = document.getElementById(element);
	if (link.classList.contains("sortable-up") == true) {
		link.className = link.className.replace("sortable-up", "sortable-down");
	} else if (link.classList.contains("sortable-down") == true) {
		link.className = link.className.replace("sortable-down", "sortable-up");
	}
}

function toggleBadge(element, text) {
	var el = document.getElementById(element);
	if (text == "") {
		if (el.classList.contains("pm-notification-badge")) {
			el.classList.remove("pm-notification-badge");
		}	
	} else {
		el.setAttribute("note-data", text);
		if (!el.classList.contains("pm-notification-badge")) {
			el.classList.add("pm-notification-badge");
		}
	}
}

function displayMessage(element, text, color) {
	// element is the container the message appears in
	var el = document.getElementById(element);
	el.innerHTML += '<div class="pm-message pm-message-' + color + '" id=text>' + text + '<button class=pm-close-button type=button aria-label=Close onclick=dismissMessage("text")><span aria-hidden=true>X</span></button></div>';
}

function dismissMessage(element) {
	// element is the messages itself
	var el = document.getElementById(element);
	el.parentNode.removeChild(el);
}

function dismissAllMessages(element) {
	// element is the container the message appears in
	var el = document.getElementById(element);
	el.innerHTML = "";
}