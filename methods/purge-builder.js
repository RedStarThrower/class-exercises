// Write a method on the array prototype called .purge(). Purge, like the in-built method .filter() will return a new array that has filtered the elements of the original array. It will take one input, a function that will serve as a rule for inclusion in the new array. 

var numbers = [1, 2, 5, 12, 17, 36]

var isEven = function(num) {
	return num % 2 === 0
}

var isBig = function(num) {
	if (num > 10) return true
		else return false
}

//PART I. WITH A "FOR" LOOP

Array.prototype.purge = function(cb) { //<= Array is the constructor function for all arrays
	var newArray = []
	for (var i = 0; i < this.length; i++) { //<= "this" refers to an instance of an array create from the Array constructor
		var element = this[i]
		//console.log(cb(element)) //<= test a function to see that it logs boolean statements
		if (cb(element)) { //<= evaluates as "true", so no need to write "if (cb(element)) === true)"
			newArray.push(element)
		}
	}
	return newArray
}

var evens = numbers.purge(isEven)
//console.log(evens) // logs: [2, 12, 36]

var biguns = numbers.purge(isBig)
//console.log(biguns) // logs: [12, 17, 36]

//PART II. WITH forEach

Array.prototype.purge = function(cb) {
	var newArray = []
	this.forEach(function(el){ //<= forEach is written to transform each element in the array, but give no return value. To create a new array, create an anonymous function that pushes the transformed values into the array. 
		if (cb(el)) newArray.push(el) //<= don't need brackets for "if" or "else" when there is only one line to execute
	})
	return newArray
}


