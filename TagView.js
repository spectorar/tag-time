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
		if (el.validTag()) {
			var tag = new TagView(false, el.value);
			el.getTime().replaceChild(tag, el);
		} else if (el.className !== "removing") {
			el.className = "removing";
			el.getTime().removeChild(el);
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

	tagElem.validTag = function() {
		return this.value != "";
	}

	tagElem.getTime = function() {
		return this.parentNode;
	}

	return tagElem;
}

// module.exports = TagView;