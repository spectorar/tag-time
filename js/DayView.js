var DayView = function() {
	var wrap = document.createElement("div"),
		dateField = document.createElement("input"),
		timeList = document.createElement("table"),
		saveButton = document.createElement("button");

	// Set up various HTML attributes
	wrap.id = "day";

	dateField.type = "date";
	dateField.id = "date";

	timeList.id = "time-list";
	timeList.className = "time-list";

	saveButton.id = "save";
	saveButton.innerHTML = "Save";

	wrap.appendChild(dateField);
	wrap.appendChild(timeList);
	wrap.appendChild(saveButton);

	wrap.getTempTime = function() {
		// the first cell of the last row in the time list table
		var lastTime = timeList.children[timeList.children.length - 1].children[0];
		if (lastTime && lastTime.isTemp) {
			return lastTime;
		}
	}


	// TODO Figure out why this doesn't work - because the cell gets focus, not the table.. fix this
	// When the time-list focuses, if it's empty add the first time.
	// timeList.onFocus = function() {
	// 	if (timeList.children.length === 1
	// 			&& timeList.children[0].children.length === 1
	// 			&& timeList.children[0].children[0].innerHTML === "Click to tag new time...") {
	// 		timeList.children[0].children[0].click;
	// 	}
	// };





	return wrap;

};
