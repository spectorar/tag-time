var TagView = function(write, value) {

	var tagElem;

	if (write) {
		tagElem = document.createElement("span");
		tagElem.className = "tag-r"
		// tagElem.placeholder = "A tag...";
		tagElem.contentEditable = true;
		if (value) {
			tagElem.value = value;
		}
	} else {
		tagElem = document.createElement("span");
		tagElem.className = "tag-r";
		tagElem.innerHTML = value;
	}

	tagElem.tabIndex = 0;

	tagElem.onclick = function(e) {
		this.contentEditable = true;
		e.stopPropagation();
	}

	tagElem.onblur = function(e) {

		console.log("blur: " + this.innerHTML);
		this.contentEditable = false;
		if (!this.isValidTag()) {
			this.getTime().removeChild(this);
		}
		e.stopPropagation();
	}

	tagElem.onkeydown = function(e) {
		// var KEY_TAB = 9;
		var KEY_BACKSPACE = 8;
		var KEY_ENTER = 13;
		var KEY_ESC = 27;

		var newTime,
			tempTime;

		console.log("keydown: " + this.innerHTML);

		if (e.keyCode === KEY_ENTER) {
			console.log("detected Enter");
			if (this.getTime().lastChild === this && this.getTime().children.length > 1) {
				if (this.isValidTag()) {
					this.getTime().createNewWriteTag();
				} else {
					this.blur();
					tempTime = document.getElementById("day").getTempTime();
					//before this, check if there is a temp time. if there is, add the a dt and focus it.
					if (tempTime) {
						tempTime.focus();
					} else {
						newTime = new TimeView(document);
						document.getElementById("time-list").appendChild(newTime);
					}
				}
			} else {
				if (document.activeElement === this) {
					this.blur();
				}
			}
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

	tagElem.isValidTag = function() {
		return this.innerHTML !== "";
	}

	// TODO use this everywhere
	tagElem.getTime = function() {
		return this.parentNode;
	}
	console.log(tagElem);
	return tagElem;
}
