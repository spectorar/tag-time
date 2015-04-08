var TimeView = function(document) {

	var newTimeListRow = document.createElement("tr"),
	    newTime = document.createElement("td"),
	    currWriteTag;

	newTime.className = "time";
	newTime.id = "tm_";
	newTime.innerHTML = "Click to tag new time ...";
	newTime.isEdit = false;
	newTime.isTemp = true;

	newTimeListRow.getDt = function() {
		return newTime;
	};

	newTime.onclick = function(e) {
			if (this.isEmpty()) {
				emptyTimeClicked(this);
			} else {
				this.createNewWriteTag();
			}
	};

	newTime.createNewWriteTag = function() {
		var tagIn = new TagView(true, null);
		this.appendChild(tagIn);
		currWriteTag = tagIn;
		tagIn.focus();
		return tagIn;
	}

	newTime.isEmpty = function() {
		return this.children.length === 0;
	};

	var emptyTimeClicked = function(el) {
		var dtIn = new DtView(document, true, null);
		el.innerHTML = null;
		el.isEdit = true;
		el.appendChild(dtIn);
		dtIn.focus();
	};

	newTime.removeDt = function(dt) {
		this.removeChild(dt);
		this.innerHTML = "Click to tag new time ...";
		// this.childBlur = true;
		this.isEdit = false;
	}

	newTime.setTemp = function(temp) {
		this.isTemp = temp;
	}

	newTime.addTempRowMaybe = function() {
		var timeList = document.getElementById("time-list"),
			timeListHasTemp = false;

		for (i=0; i<timeList.children.length; i++) {
			if (timeList.children[i].children[0].isTemp) {
				timeListHasTemp	= true;
				break;
			}
		}

		// if the time list doesn't have a temp Dt, add one
		if (!timeListHasTemp) {
			timeList.appendChild(new TimeView(document));
		}
	}

	newTimeListRow.appendChild(newTime);

	return newTimeListRow;
}
