var TimeView = function(document) {

	var newTimeListRow = document.createElement("tr")
	var newTime = document.createElement("td");
	newTime.className = "time";
	newTime.id = "tm_";
	newTime.innerHTML = "Click to tag new time ...";
	newTime.isEdit = false;
	newTime.childBlur = false;

	newTime.onclick = function() {
		console.log("clicked");
		console.log(this.childBlur);
		if (!this.childBlur) {
			console.log(this.isEmpty());
			if (this.isEmpty()) {
				emptyTimeClicked(this);
			} else if (!this.isEdit) {
				var tagIn = new TagView(true, null);
				this.appendChild(tagIn);
				tagIn.focus();
			}
		} else {
			this.childBlur = false;
		}
	};

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
		var readDt = new DtView(document, false, dt.value);
		// if this Dt is the only child, append a new Time to the list
		if (this.children.length === 1) {
			var timeList = document.getElementById("time-list");
			timeList.appendChild(new TimeView(document));
		}
		// replace the current write Dt with the new read Dr
		this.replaceChild(readDt, dt);
		this.isEdit = false;
	}

	newTimeListRow.appendChild(newTime);
	
	return newTimeListRow;
}