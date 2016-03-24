// Write an algorithm that will decode "sze uzsy atwwzh" into a meaningful phrase.

// HINT: the method of encoding used here is what's known as a "shift cipher", wherein each letter is translated into another letter that is a fixed number of steps away down the alphabet.

// DOUBLE NIGHTMARE BLITZ MODE: write a version that will work on any string that was encoded with a shift/Caesar cipher. you may need a dictionary.
var getRandCipher = function() {
	return Math.floor(Math.random() * 26) //<= gets random number 0-25
}

var alphabet = "abcdefghaiklmnopqrstuvwxyz"

var decoder = function (inputString) {
	var cipher = getRandCipher()
	var decodedString = ""
		for (var i = 0; i < inputString.length; i++) {
			var character = inputString[i]
			//console.log(character)
			var newIndex = (alphabet.indexOf(character) + 15) % 26
			//console.log(newIndex)
			if (character === " ") {
				decodedString += " "
			}
			else decodedString += alphabet[newIndex]
				}			
	return decodedString
}

//console.log(decoder("sze uzsy atwwzh")) // logs "hot iohn pallow"