// PART I. Write a function called forEach that takes two inputs, an array and a function. The function shoulf be run on each element of the array
// Example: 
// var total = 0
// var arr = [100, 200, 300, 400]
// forEach(arr,function(element) {total += element})

var forEach = function(inputArray, cb) { // "cb" = "callback" aka function
	for (var i = 0; i < inputArray.length; i++) {
		cb(inputArray[i])
	}
}

var arr = [100, 200, 300, 400]
var total = 0
var incrementer = function(number) {
	total += number
}

forEach(arr, incrementer) // forEach has no return, so run function first, then console.log the affected global variable (total in this case)

//console.log(total) // logs "1000"

// Use it with any type of array and function!

var htmlString = ""

var objArray = [{
	name: "footie pajamas",
	price: "$200",
	},
		{
	name: "CD collection",
	price: "$50",
		}
]

var htmlBuilder = function(obj) {
	htmlString += '<p class="productName">' + obj.name + '</p>' // '<p class="productName">${obj.name}</p>'
	htmlString += '<p class="productPrice">' + obj.price + '</p>'
}

forEach(objArray, htmlBuilder) // forEach has no return, so run function first, then console.log the affected global variable (htmlString in this case)

//console.log(htmlString) // forEach-builder.js:44 <p class="productName">footie pajamas</p><p class="productPrice">$200</p><p class="productName">CD collection</p><p class="productPrice">$50</p>

// PART II: EXAMPLE of adding a "contains" method to the String prototype

var myString = "j$on"

String.prototype.contains = function(char) {
	for (var i = 0; i < this.length; i++) {
		var thisChar = this[i]
		if (thisChar === char) {
			return true
		}
	}
	return false
}

//console.log(myString.contains("$")) //<= logs "true"

// PART III. Add a method to the array prototype called forAll (instead of "forEach", which is a reserved word for an existing function). It should take on input, a function. It should run that function on each element in the array. 

var array = [2, 2345, 335, 283]
var result = 0

var incrementMore = function(number) {
	result += number
}

Array.prototype.forAll = function(cb) {
	for (var i = 0; i < this.length; i++) { //<= "this" refers to the future instance of an array to be built using the Array prototype
		cb(this[i])
	}
}
//console.log(Array.prototype) //<= forAll added as a method on the prototype

array.forAll(incrementMore)
//console.log(result) //<= logs: 2965

// PART IV. Test forAll by making a new array 

var newArray = []
var pusher = function(input) {
	newArray.push(input)
}

array.forAll(pusher)
//console.log(newArray) //<= logs: [2, 2345, 335, 283]

