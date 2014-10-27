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

	var writeTagOnBlur = function(el) {
		var time = el.getTime();
		if (el.validTag()) {
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
		var KEY_ENTER = 13;
		var KEY_ESC = 27;
		if (e.keyCode === KEY_ENTER) {
			if (this.validTag() && this.getTime().lastChild === this) {
				this.getTime().createNewTag();
			} else {
				this.blur();
			}
		}
	}

	tagElem.validTag = function() {
		return this.value != "";
	}

	tagElem.getTime = function() {
		return this.parentNode;
	}

	return tagElem;
}

// module.exports = TagView;