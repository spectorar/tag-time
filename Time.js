var Tag = require("./Tag.js");

var Time = function(dt, tagArr) {
	// this.id = id;
	this.dt = dt;
	this.tagArr = tagArr;
}

Time.prototype.addTag = function(tag) {
	tagArr[tagArr.length] = tag;
}

// Time.seq = -1;
// Time.prototype.nextId = function() {
// 	return this.seq++;
// }


module.exports = Time;