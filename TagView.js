var TagView = function(document) {
	alert("here");
	var tagElem = document.createElement("input");

	tagElem.className = "tag-w";
	tagElem.value = "A tag..";

	tagElem.writeTagOnBlur = function(el) {
	// alert("here1");

		if (el.validTag()) {
			var tag = document.createElement("span");
			tag.className = el.className.substring(0, el.className.length-2) + "-r";
			tag.innerHTML = el.value;
			el.parentNode.replaceChild(tag, el);
		} else {
			el.parentNode.removeChild(el);
		}
	}
	
	tagElem.onblur = function() {
		this.writeTagOnBlur(this);
	}

	tagElem.validTag = function() {
		return this.value.indexOf("A tag..") === -1;

	return tagElem;
}

// writeTagOnBlur = function(el) {
// 	// alert("here1");

// 	if (el.validTag()) {
// 		var tag = document.createElement("span");
// 		tag.className = el.className.substring(0, el.className.length-2) + "-r";
// 		tag.innerHTML = el.value;
// 		el.parentNode.replaceChild(tag, el);
// 	} else {
// 		el.parentNode.removeChild(el);
// 	}
// }

// module.exports = TagView;