var TagView = function() {
	var tagElem = document.createElement("input");

	tagElem.className = "tag-w";
	tagElem.value = "A tag..";

	var writeTagOnBlur = function(el) {
		if (el.validTag()) {
			var tag = document.createElement("span");
			tag.className = el.className.substring(0, el.className.length-2) + "-r";
			tag.innerHTML = el.value;
			el.parentNode.replaceChild(tag, el);
		} else if (el.className !== "removing") {
				el.className = "removing";
				var parent = el.parentNode;
				parent.removeChild(el);
		}
	}
	
	tagElem.onblur = function() {
		writeTagOnBlur(this);
	}

	tagElem.validTag = function() {
		return this.value.indexOf("A tag..") === -1;
	}

	return tagElem;
}

// module.exports = TagView;