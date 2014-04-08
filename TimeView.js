var TimeView = function(document) {

	var tagIn = document.createElement("input");
	tagIn.className = "dt-w";
	tagIn.value = "How much time?";

	var writeDtOnBlur = function(el) {
		if (el.validTime()) {
			var timeTag = document.createElement("span");
			timeTag.className = "dt-r";
			timeTag.innerHTML = el.value;

			var emptyRow = el.parentNode.parentNode.parentNode.insertRow(-1);
			var emptyTime = emptyRow.insertCell(-1);
			emptyTime.className = "time";
			emptyTime.id = "tm_";
			emptyTime.innerHTML = "Click to tag new time ...";

			el.parentNode.replaceChild(timeTag, el);
		} else if (el.className !== "removing") {
			if (el.value !== "How much time?") {
				alert("Please enter time in the format hh:mm.")
			}
			el.className = "removing";
			var parent = el.parentNode;
			parent.removeChild(el);
			parent.innerHTML = "Click to tag new time ...";
		}
	}


	tagIn.onblur = function() {
		writeDtOnBlur(this);
	}

	tagIn.validTime = function() {
		var r = /^[0-9]?[0-9]:[0-9][0-9]$/;
		return r.test(this.value);
	}

	return tagIn;

}