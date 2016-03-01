// ----- Introducing array-like objects (can interate over them, but do not have array methods) -----

var arrayLike = { //<= will brehave like an array
	0: "Jason",
	1: "Kaylan",
	2: "Josh",
	3: "Ari",
	4: "Thomas",
	5: "Michael",
	length: 6 // <= gives it length and allows you to loop over it like an array
}

//console.log(arrayLike[2]) // <= logs "Josh"

for (var i = 0; i < arrayLike.length; i++) {
	//console.log(arrayLike[i]) // <= logs all the values individually as strings
}

// ----- Adding methods through prototypes -----

//console.log(Array.prototype.pop.call(arrayLike)) //<= logs "Michael" 

//console.log(arrayLike) // <= .pop removes the highest indexed element, removes it from the object and changes the length to 5: Object {0: "Jason", 1: "Kaylan", 2: "Josh", 3: "Ari", 4: "Thomas", length: 5}

// ----- The .call() method on a function ----- 
//.call() : invokes a function, replacing any instances of .this (reference to the object we're currently within) to apply to the inputObject

var declareFaveFood = function() {
	return "I love " + this.faveFood //<= currently undefined
}

var dumplingLuvr = {
	hobby: "eating dumplings",
	faveFood: "dumplings"
}

//console.log(declareFaveFood.call(dumplingLuvr)) //< = logs "I love dumplings"
//console.log(declareFaveFood.call({faveFood: "slurry"})) //< = logs "I love slurry"

// ----- The .bind() method on a function ----- 
// .bind() : returns a new function with its .this (reference to the object we're currently within) set to the input object

var dumplingAnnouncer = declareFaveFood.bind(dumplingLuvr) // <= binds declareFaveFood specifically to dumplingLuvr; .this is no longer flexible

//console.log(dumplingAnnouncer()) // < a function that logs "I love dumplings"



