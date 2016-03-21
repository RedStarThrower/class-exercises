// Write a function called forEach that takes two inputs, an array and a function. The function shoulf be run on each element of the array
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


