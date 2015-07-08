
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


	tagIn.onkeydown = function(e) {
		// var KEY_TAB = 9;
		var KEY_BACKSPACE = 8;
		var KEY_ENTER = 13;
		var KEY_ESC = 27;

		var newTime,
			tempTime;

		// console.log("keydown: " + this.innerHTML);
		console.log("keydown on dt");
		if (e.keyCode === KEY_ENTER) {
			// console.log("detected Enter");
			// if (this.getTime().lastChild === this && this.getTime().children.length > 1) {
			// 	if (this.isValidTag()) {
			// 		this.getTime().createNewWriteTag();
			// 	} else {
			// 		this.blur();
			// 		tempTime = document.getElementById("day").getTempTime();
			// 		//before this, check if there is a temp time. if there is, add the a dt and focus it.
			// 		if (tempTime) {
			// 			tempTime.focus();
			// 		} else {
			// 			newTime = new TimeView(document);
			// 			document.getElementById("time-list").appendChild(newTime);
			// 		}
			// 	}
			// } else {
			// 	if (document.activeElement === this) {
			// 		this.blur();
			// 	}
			// }
			writeDt(this);
			this.parentNode.createNewWriteTag();
			// this.parentNode.setTabable(false);
			// return false to prevent default ENTER behavior (adding 2 br)
			return false;
		}

		// if (e.keyCode === KEY_BACKSPACE) {
		// 	if (this.value === "") {
		// 		console.log("Removing on backspace");
		// 		this.getTime().removeChild(this);
		// 		e.preventDefault();
		// 	}
		// }
	}

	tagIn.validTime = function() {
		var r = /^[0-9]?[0-9]:[0-9][0-9]$/;
		return r.test(this.innerHTML);
	};

	return tagIn;

}
