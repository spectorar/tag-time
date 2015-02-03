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

	// var writeTagOnBlur = function(el) {
	// 	console.log("bluring tag: " + (el.value ? el.value : el.innerHTML) +
	// 		"; nodeName=" + el.nodeName + ";" + el.isValidTag() + "; class= " + el.className);
	// 	var time = el.getTime();
 //            nodeName = el.nodeName;
	// 	if ((nodeName === "input" || nodeName === "INPUT") && el.isValidTag()) {
	// 		var tag = new TagView(false, el.value);
	// 		time.replaceChild(tag, el);
	// 	} else if (el.isValidTag()) {
	// 		return;
	// 	} else if (el.className !== "removing") {
	// 		// hack for double removes throwing error
	// 		el.className = "removing";
	// 		time.removeChild(el);
	// 	}
	// }

	// tagElem.onclick = function(e) {
	// 	console.log(this.nodeName);
	// }

	// tagElem.onclick = function(e) {
	// // tagElem.onmousedown = function(e) {
	// 	console.log(document.activeElement);
	// 	console.log("clicking tag: " + (this.value ? this.value : this.innerHTML));
	// 	if (!this.write)
	// 		startEditOnClick(this);
	// 	e.stopPropagation();
	// 	// this.focus();
	// }

	// tagElem.onmouseup = function(e) {
	// 	this.focus();
	// }

	// tagElem.onmousedown = function(e) {
	// 	console.log("mousedown. activeElem: " + document.activeElement);
	// }

	var startEditOnClick = function(el) {
		console.log("clicking tag: " + (el.value ? el.value : el.innerHTML)
			+ "; nodeName=" + el.nodeName + ";" + el.isValidTag() + "; class= " + el.className);
		var tagIn = new TagView(true, el.innerHTML);
		// Reuse hack in writeTagOnBlur;
		el.className = "removing";
		el.parentNode.replaceChild(tagIn, el);
		tagIn.focus();
	}
	
	// tagElem.onblur = function(e) {
		
	// 	writeTagOnBlur(this);
	// 	e.stopPropagation();
	// }

	tagElem.onkeydown = function(e) {
		// var KEY_TAB = 9;
		var KEY_BACKSPACE = 8;
		var KEY_ENTER = 13;
		var KEY_ESC = 27;

		var newTime;

		if (e.keyCode === KEY_ENTER) {
			if (this.getTime().lastChild === this && this.getTime().children.length > 1) {
				if (this.isValidTag()) {
					this.getTime().createNewWriteTag();
				} else {
					this.blur();
					//before this, check if there is a temp time. if there is, add the a dt and focus it.
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

	// tagElem.onfocus = function() {
	// 	console.log("focus tag: " + (this.value ? this.value : this.innerHTML));
	// }

	tagElem.isValidTag = function() {
		return this.value !== "";
	}

	tagElem.getTime = function() {
		return this.parentNode;
	}

	return tagElem;
}

// module.exports = TagView;
