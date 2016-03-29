// Write a function called isPalindrome() that will take a string as input and return true if that string is a palindrome. Otherwise, it will return false.

// Intestinal fortitude mode: use recursion to write your solution

// RECURSION SOLUTION

// Pseudocode: isPalindrome(word)
//					If word.length <= 1, return true
// 					Are first and last characters equal?
// 						If yes, strip off the characters
//						return isPalindrome(word) <= will evaluate the function before returning, going through the callstack of strings to evaluate until it reaches the top level 
// 						...
// 					If no, return false				

var noon = "noon"
var racecar = "racecar"
var phrase = "A man a plan a canal Panama"



var isPalindrome = function(inputString) {
	var inputString = inputString.toLowerCase().split(" ").join('') //<= normalizes the string by lowering capital letters, then removes spaces by splitting the string into an array by space, then joining it back into one string with no spaces
	if (inputString.length <= 1) return true
	if (inputString[0] === inputString[inputString.length - 1]) {
		inputString = inputString.substr(1, inputString.length - 2)
		//console.log(inputString) //<= test to see how the string is being manipulated
		return isPalindrome(inputString)  
	} 
	else return false	
}

var result = isPalindrome(racecar)
//console.log(result) // logs true

var anotherResult = isPalindrome(phrase)
//console.log(anotherResult) //logs true

