// colorTranslator() should take as input one of six different colors in the language of your choice. It should output the English name of that color.
var colorObj = {
	red: "krasniy",
	green: "zelyonyi",
	blue: "siniy",
	yellow: "zheltiy",
	black: "chernyi",
	white: "beliy",
	purple: "fioletoviy",
	pink: "rozoviy",
}

var engToRus = function(engColor) {
	return colorObj[engColor]
}

//console.log(engToRus("green"))

// Reverse color translator

var reverseObj = function(anyObj) {
	var reversedObj = {}
	for (var prop in anyObj) {
		var value = anyObj[prop]
		reversedObj[value] = prop	
	}
	return reversedObj
}

//console.log(reverseObj(colorObj))

var reversedColorObj = reverseObj(colorObj)

var rusToEng = function(rusColor) {
	return reversedColorObj[rusColor]
}

//console.log(rusToEng("siniy"))

