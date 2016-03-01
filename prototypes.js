//console.log(Array)

var names = ["bippo", "boaz", "binky"]

//console.log(names.sort())

Array.prototype.getFirstElement = function() {
	return this[0]
}


// console.log(names.getFirstElement())

// console.log([1,2,3].getFirstElement())

// Add method to the array prototype that will tell whether the array invoking th emethod contains a certain input

Array.prototype.contains = function(element) {
	if (this.indexOf(element) === -1) return false 
		else return true
}

//Shorter way 

Array.prototype.contains = function(element) {
	return this.indexOf(element) !== -1
}

console.log(names.contains('boaz'))

//Contain for string

String.prototype.contains = Array.prototype.contains

var string = "string"

console.log(string.contains("t"))
