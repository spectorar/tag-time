var TimeView = function(document) {

	var newTimeListRow = document.createElement("tr"),
	    newTime = document.createElement("td");

	newTime.className = "time";
	newTime.id = "tm_";
	newTime.innerHTML = "Click to tag new time ...";
	newTime.isEdit = false;
	newTime.isTemp = true;

	// make tabable on empty times so that onfocus we can add a dt
	// when the a dt is commited we will remove this tabIndex
	// newTime.setTabable(true);
	newTime.tabIndex = 0;

	newTimeListRow.getDt = function() {
		return newTime;
	};

	newTime.onfocus = function(e) {
		console.log("time click");
		if (this.isEmpty()) {
			createDt(this);
		} else {
			this.createNewWriteTag();
		}
	}

	newTime.onkeydown = function(e) {
		// var KEY_TAB = 9;
		// var KEY_BACKSPACE = 8;
		var KEY_ENTER = 13;
		// var KEY_ESC = 27;


		console.log("keydown: " + this.innerHTML);

		if (e.keyCode === KEY_ENTER) {
			console.log("detected Enter");
			if (this.isEmpty()) {
				createDt(this);
			}
			// return false to prevent default ENTER behavior
			return false;
		}
	};

	newTime.createNewWriteTag = function() {
		var tagIn = new TagView(true, null);
		this.appendChild(tagIn);
		tagIn.focus();
		console.log(tagIn.innerHTML);
		return tagIn;
	}

	newTime.isEmpty = function() {
		return this.children.length === 0;
	};

	var createDt = function(el) {
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
			tempTime = document.getElementById("day").getTempTime();

		// if the time list doesn't have a temp Dt, add one
		if (!tempTime) {
			timeList.appendChild(new TimeView(document));
		}
	}

	newTime.setTabable = function(tabable) {
		this.tabIndex = tabable ? 0 : -1;
	}

	newTimeListRow.appendChild(newTime);

	return newTimeListRow;
}
