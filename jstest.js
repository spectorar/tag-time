// JS Test

var TestObject = function() {
	var idx = -1;

	return function() {return ++idx; };
}()

// TestObject.val = 1;
// TestObject.prototype.getNext = function() {
// 	return ++TestObject.val;
// }

// var t = new TestObject();
// t;

// console.log(new Foo()) ;
console.log( TestObject() );
console.log( TestObject() );