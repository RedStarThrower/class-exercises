// PART I. Write a countdown function that takes a number and counts down to 0

var countdown = function (startingNumber) {
	for (var i = startingNumber; i >=0; i-- ) {
		return i
	}
}

//console.log(countdown(12)) // logs: 12, 11 ... 0



// PART II. RECUSRION
//Write a function countdown2, that replicates this behavior without using any loop

var countdown2 = function (startingNumber) {	
	console.log(startingNumber)
	if (startingNumber >= 0) countdown2(startingNumber - 1)
}

//countdown2(5) // logs 5, 4, 3, 2, 1, 0...
