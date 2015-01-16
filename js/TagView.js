var TagView = function(write, value) {
	
	var tagElem;

	if (write) {
		tagElem = document.createElement("input");
		tagElem.className = "tag-w"
		tagElem.placeholder = "A tag...";
		if (value) {
			tagElem.value = value;
		}
	} else {
		tagElem = document.createElement("span");
		tagElem.className = "tag-r";
		tagElem.innerHTML = value;
	}

	tagElem.tabIndex = 0;

	var writeTagOnBlur = function(el) {
		var time = el.getTime();
            nodeName = el.nodeName;
		if ((nodeName === "input" || nodeName === "INPUT") && el.validTag()) {
			var tag = new TagView(false, el.value);
			time.replaceChild(tag, el);
		} else if (el.className !== "removing") {
			el.className = "removing";
			time.removeChild(el);
		}

	}

	tagElem.onclick = function() {
		if (!this.write)
			startEditOnClick(this);
		window.event.stopPropagation();
	}

	var startEditOnClick = function(el) {
		var tagIn = new TagView(true, el.innerHTML);
		el.parentNode.replaceChild(tagIn, el);
		tagIn.focus();
	}
	
	tagElem.onblur = function() {
		writeTagOnBlur(this);
	}

	tagElem.onkeydown = function(e) {
		// var KEY_TAB = 9;
		var KEY_BACKSPACE = 8;
		var KEY_ENTER = 13;
		var KEY_ESC = 27;

		var newTime;
		// if (e.keyCode === KEY_ENTER) {
		// 	if (this.validTag() && this.getTime().lastChild === this) {
		// 		this.getTime().createNewTag();
		// 	} else {
		// 		if (document.activeElement === this) {
		// 			this.blur();
		// 		}
		// 	}
		// }

		if (e.keyCode === KEY_ENTER) {
			if (this.getTime().lastChild === this && this.getTime().children.length > 1) {
				if (this.validTag()) {
					this.getTime().createNewTag();
				} else {
					this.blur();
					newTime = new TimeView(document);
					document.getElementById("time-list").appendChild(newTime);
					newTime.getDt().onclick();
				}
			} else {
				if (document.activeElement === this) {
					this.blur();
				}
			}
		}




		// if (e.keyCode === KEY_BACKSPACE) {
		// 	if (this.value === "") {
		// 		console.log("Removing on backspace");
		// 		this.getTime().removeChild(this);
		// 		e.preventDefault();
		// 	}
		// }
	}

	tagElem.validTag = function() {
		return this.value !== "";
	}

	tagElem.getTime = function() {
		return this.parentNode;
	}

	return tagElem;
}

// module.exports = TagView;
