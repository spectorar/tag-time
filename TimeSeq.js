var TimeSeq = (function() {
	var timeSeq = -1;

	return function() { return ++timeSeq; };

})();

module.exports = TimeSeq;