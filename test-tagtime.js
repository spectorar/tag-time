var DataManager = require("./DataManager.js");
// var Tag = require("./Tag.js");

var dm = new DataManager();
// var test = { { } }
// dm.addDay("2014/03/12");
// dm.tagTime("2014/03/12", 120, [new Tag("bnym"), new Tag("java")])

dm.addTimeTags("2014/03/12", 120, ["bnym"]);


console.log(dm);
console.log(dm.data);
console.log(dm.data.days);
console.log(dm.data.days["2014/03/12"]);
console.log(dm.data.days["2014/03/12"].timeMap);
console.log(dm.data.days["2014/03/12"].timeMap[0]);
console.log(dm.data.days["2014/03/12"].timeMap[0].dt);
console.log(dm.data.days["2014/03/12"].timeMap[0].tagArr);
console.log(dm.data.days["2014/03/12"].timeMap[0].tagArr[0]);

dm.addTagToTime("2014/03/12", 0, "billable");
console.log(dm.data.days["2014/03/12"].timeMap[0].tagArr);