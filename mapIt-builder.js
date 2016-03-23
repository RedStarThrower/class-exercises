// Add a method to the array prototype called .mapIt(). mapIt will be like forEach (or forAll) but different. It will take a callback as input, but where forEach returned nothing, mapIt should return a new array. You can think of a callback to mapIt as a transformation rule. It should tell how each element in the input array should be transformed.

var myArray = [10,20,30]

var doubleNum = function(num) {
	return num * 2
}

Array.prototype.mapIt = function(cb) {
	var newArray = []
	for (var i = 0; i < this.length; i++) {
		var transfomedElement = cb(this[i])
		newArray.push(transfomedElement)
	}
	return newArray
}

var doubled = myArray.mapIt(doubleNum)

//console.log(doubled) //logs: [20, 40, 60]
//console.log(myArray) //logs: [10,20,30]

// Trey it with objects!

var peopleArray = [{
		person: "Sam",
		location: "Houston"
	}, {
		person: "Jen",
		location: "New York"
	}, {
		person: "Jack",
		location: "Miami"
	}
]

var getHTML = function(personObj) {
	return '<p class="name">${personObj.person} ${personObj.location}</p>'
}

var pTagArray = peopleArray.mapIt(getHTML)
//console.log(pTagArray) //<= logs: ["<p class="name">${personObj.person} ${personObj.location}</p>", "<p class="name">${personObj.person} ${personObj.location}</p>", "<p class="name">${personObj.person} ${personObj.location}</p>"]


