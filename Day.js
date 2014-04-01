var Time = require("./Time.js");
var DataManager = require("./DataManager.js");
var TimeSeq = require("./TimeSeq");

var Day = function(date, timeMap) {
	this.date = date;
	if (timeMap) {
		this.timeMap = timeMap;
	} else {
		this.timeMap = {};
	}

	// this.addTime = function(time) {
	// };
};

Day.prototype.addTime = function(time) {
		this.timeMap[TimeSeq()] = time;
};

module.exports = Day;