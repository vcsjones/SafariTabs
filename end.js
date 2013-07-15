function keyHandler(e) {
	if (e.keyCode === 9 && e.target.nodeName === "TEXTAREA") {
		var index = e.target.selectionStart;
		e.target.value = e.target.value.slice(0, index) + "    " + e.target.value.slice(index, e.target.value.length);
		e.preventDefault();
		e.target.setSelectionRange(index+4, index+4);
	}
}

var bodyElement = document.querySelector("body");
bodyElement.addEventListener("keydown", keyHandler, false);
