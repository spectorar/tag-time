   /* TODO
	* add null day
	* add time with tags
	* add tag to existing time
	* 
	*/
	
var Day = require("./Day.js");
var Time = require("./Time.js");

var DataManager = function() {
	this.data = {};
	this.data.days = {};

	// this.data = { days : true };
	// this.data["days"] = { day1: true};
//	this.data = { };
//	this.data["days"] = {};
//	this.data["days"]["2014/03/12"] = new Time(10, ["kycms"]);
};

// Adds the day if it does not already exist
DataManager.prototype.checkAddDay = function(date) {
	if (!(date in this.data.days)) {
		this.data.days[date] = new Day(date, null);
	}
};

DataManager.prototype.addTime = function(date, time) {
	// Don't need to check for the existence of date here as it is built into addDay
	this.checkAddDay(date);
	this.data.days[date].addTime(time);
};

DataManager.prototype.addTagToTime = function(date, timeId, tag) {
	var timeTagArr = this.data.days[date].timeMap[timeId].tagArr;
	timeTagArr[timeTagArr.length] = tag;
};

DataManager.prototype.addTimeTags = function(date, dt, tagsArr) {
	this.addTime(date, new Time(dt, tagsArr));
};

DataManager.prototype.tagTime = function(date, timeId, dt, tagsArr) {
	this.checkAddDay(date);
	data.days[date].timeMap[timeId] = new Time(dt, tagsArr);
	// if (timeId in data.days[date].timeMap) {
	//	data.days[date].timeMap[timeId] = new Time(dt, tagsArr);
	// } else {
	//	data.days[date].timeMap[timeId] = new Time(dt, tagsArr);
	// }
};

DataManger.prototype.removeTime = function(date, timeId) {
	if (!(date in this.data.days)) {
		delete data.days[date].timeMap[timeId];
	}
};

module.exports = DataManager;




