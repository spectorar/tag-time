
var DtView = function(document, write, value) {

	var tagIn;

	// create a "write" vs a "read" dt based on flag in constructor
	if (write) {
		tagIn = document.createElement("span");
		// tagIn.className = "dt-w";
		// tagIn.placeholder = "How much time?";
		tagIn.contentEditable = true;
		if (value) {
			tagIn.innerHTML = value;
		}
	} else {
		tagIn = document.createElement("span");
		tagIn.innerHTML = value;
	}
	tagIn.className = "dt-r";

	tagIn.write = write;
	tagIn.tabIndex = 0;

	var writeDt = function(el) {
		if (el.validTime()) {
			el.contentEditable = false;
			el.parentNode.setTemp(false);
			el.parentNode.addTempRowMaybe();
		} else {
			if (el.innerHTML !== "") {
				alert("Please enter time in the format hh:mm.");
			}
			if (el.parentNode.children.length === 1) {
				el.parentNode.removeDt(el);
			}
		}
	};


	tagIn.onblur = function(e) {
			writeDt(this);
		e.stopPropagation();
	};

	tagIn.onclick = function(e) {
		this.contentEditable = true;
		e.stopPropagation();
	}

	tagIn.validTime = function() {
		var r = /^[0-9]?[0-9]:[0-9][0-9]$/;
		return r.test(this.innerHTML);
	};

	return tagIn;

}
