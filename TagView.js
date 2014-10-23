var TagView = function(write, value) {

// Need to figure out how to create both read and write versions of this programmatically


	// var tagElem = document.createElement("input");

	// tagElem.className = "tag-w";
	// tagElem.value = "A tag..";

	var tagElem;

	if (write) {
		tagElem = document.createElement("input");
		tagElem.className = "tag-w"
		if (!value) {
			tagElem.value = "A tag..";
		} else {
			tagElem.value = value;
		}
	} else {
		tagElem = document.createElement("span");
		tagElem.className = "tag-r";
		tagElem.innerHTML = value;
	}

	var writeTagOnBlur = function(el) {
		if (el.validTag()) {
			// var tag = document.createElement("span");
			// tag.className = el.className.substring(0, el.className.length-2) + "-r";
			// tag.innerHTML = el.value;
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
		return this.value.indexOf("A tag..") === -1;
	}

	tagElem.getTime = function() {
		return this.parentNode;
	}

	return tagElem;
}

// module.exports = TagView;