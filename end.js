function keyHandler(e) {
	if (e.keyCode === 9) {
		var index = e.target.selectionStart;
		e.target.value = e.target.value.slice(0, index) + "    " + e.target.value.slice(index, e.target.value.length);
		e.preventDefault();
		e.target.setSelectionRange(index+4, index+4);
	}
}

var textAreas = document.querySelectorAll("textarea");

for(var i=0; i<textAreas.length; i++) {
	var area = textAreas[i];
	area.addEventListener("keydown", keyHandler, false);
}