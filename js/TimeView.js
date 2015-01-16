var TimeView = function(document) {

	var newTimeListRow = document.createElement("tr"),
	    newTime = document.createElement("td");

	newTime.className = "time";
	newTime.id = "tm_";
	newTime.innerHTML = "Click to tag new time ...";
	newTime.isEdit = false;
	newTime.childBlur = false;
	newTime.isTemp = true;

	newTime.tabIndex = 0;

	newTimeListRow.getDt = function() {
		return newTime;
	}

	newTime.onclick = function() {
		if (!this.childBlur) {
			if (this.isEmpty()) {
				emptyTimeClicked(this);
			} else if (!this.isEdit) {
				this.createNewTag();
			}
		} else {
			this.childBlur = false;
		}
	};

	newTime.createNewTag = function() {
		var tagIn = new TagView(true, null);
		this.appendChild(tagIn);
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
		this.childBlur = true;
		this.isEdit = false;
	}

	newTime.commitDt = function(dt) {
		// create a read Dt
		var readDt = new DtView(document, false, dt.value),
		    timeListHasTemp = false,
		    timeList = document.getElementById("time-list").
            i;

		// replace the current write Dt with the new read Dt
		this.replaceChild(readDt, dt);
		this.isEdit = false;
		this.isTemp = false;

		// Check all the Dt in the time list to see if any is a temp Dt
		// TODO get rid of all these children references. Maybe time-list should be aware if it contains a temp Dt
		for (i=0; i<timeList.children.length; i++) {
			if (timeList.children[i].children[0].isTemp) {
				timeListHasTemp	= true;
				break;
			}
		}

		// if the time list doesn't have a temp Dt, add one
		if (!timeListHasTemp) {
			// var timeList = document.getElementById("time-list");
			timeList.appendChild(new TimeView(document));
		}
	}

	newTimeListRow.appendChild(newTime);
	
	return newTimeListRow;
}
