// Write a method on the array prototype called .purge(). Purge will return a new array that has filtered the elements of the original array. It will take one input, a function that will serve as a rule for inclusion in the new array. 

var numbers = [1, 2, 5, 12, 17, 36]

var isEven = function(num) {
	return num % 2 === 0
}

var isBig = function(num) {
	if (num > 10) return true
		else return false
}

Array.prototype.purge = function(cb) {
	var newArray = []
	for (var i = 0; i < this.length; i++) {
		var element = this[i]
		if (cb(element) === true) {
			newArray.push(element)
		}
	}
	return newArray
}

var evens = numbers.purge(isEven)
//console.log(evens) // logs: [2, 12, 36]

var biguns = numbers.purge(isBig)
//console.log(biguns) // logs: [12, 17, 36]


