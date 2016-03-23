// Add a method to the array prototype called .mapIt(). mapIt will be like forEach (or forAll) but different. It will take a callback as input, but where forEach returned nothing, mapIt should return a new array. You can think of a callback to mapIt as a transformation rule. It should tell how each element in the input array should be transformed.

var myArray = [10,20,30]

var doubleNum = function(num) {
	return num * 2
}

Array.prototype.mapIt = function(cb) {
	var newArray = []
	for (var i = 0; i < this.length; i++) {
		var transfomedElement = cb(this[i])
		newArray.push(transfomedElement)
	}
	return newArray
}

var doubled = myArray.mapIt(doubleNum)

//console.log(doubled) //logs: [20, 40, 60]
//console.log(myArray) //logs: [10,20,30]


