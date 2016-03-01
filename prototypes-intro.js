// ------ Introducting Prototypes ------
//console.log(Array)

var names = ["bippo", "boaz", "binky"]

//console.log(names.sort())

Array.prototype.getFirstElement = function() {
	return this[0]
}

// console.log(names.getFirstElement())

// console.log([1,2,3].getFirstElement())

// ----- Adding Contains method for the array ----- 
// Objective: add method to the array prototype that will tell whether the array invoking the method contains a certain input

Array.prototype.contains = function(element) {
	if (this.indexOf(element) === -1) return false 
		else return true
}

//----- Shorter way -----

Array.prototype.contains = function(element) {
	return this.indexOf(element) !== -1
}

//console.log(names.contains('boaz'))

//----- Contains for string -----

String.prototype.contains = Array.prototype.contains

var string = "string"

//console.log(string.contains("t"))

//------ Adding methods to the constructor prototype -----

var Horse = function(inputName, inputBreed) {
	this.name = inputName
	this.breed = inputBreed
}

 
Horse.prototype = { // <= creating different methods for the Horse prototypes
	speak: function() {
		return ("Neeeigh, it is I, " + this.name)
	},
	 // <= don't forget the comma, since you are in an object
	playPiano: function() {
		return "sweet jams"
	}
}

var misterEd = new Horse("Ed", "mister")
console.log(misterEd.speak())
