// PART I. Use .filter to create a subset of the books including only those published after 1990.

// .FILTER() is a method on an array.
//  INPUT -> A callback that takes a single element of the array as input and returns true if the elements should be included in the new array. OUTPUT -> A new array with length <= original.


// PART II. Then use .map on the filtered array to turn your array of book objects into an array of book titles (strings).

// .MAP() is a method on an array.
// INPUT -> A callback that takes a single el of the array as input and returns the transformed element that will replace the element in the new array. OUTPUT -> A new array, with each element transformed by the callback function above. 

// Final result should look like this: ["Harry Potter and the Sorcerer's Stone", "Could Atlas"]

var books = [{
    title: "Harry Potter and the Sorcerer's Stoned",
    year: 1998},

    {title: "The Idiot",
     year: 1836
    },

    {title: "Ender's Game",
    year: 1985},

    {title: "Cloud Atlas",
    year: 2004}
]

//console.log(books[2].year) // logs: 1985

var yearChecker = function(inputEl) { // <= need a function that will check each element against a filtering criteria and return a true value for those elements that pass the criteria
	return inputEl["year"] >= 1990 // <= another way of saying: if (inputEl["year"] >= 1990) {return true} else {return false}
}

// var filteredArr = books.filter(yearChecker)

// console.log(filteredArr) // logs an array with two objects, each object containing a title of a book and its publication year (greater than 1990)

var titleMaker = function(inputEl) { // <= need a function that will simply return the values for titles from the object 
	return inputEl["title"]
 }

 // var titleArr = filteredArr.map(titleMaker)

 // console.log(titleArr) // logs an array with two book titles, "Harry Potter" and "Could Atlas"

var recentTitles = books.filter(yearChecker).map(titleMaker) // <= can combine the methods one after another to skip the intermediary array, but have to enter them in correct order! 

// console.log(recentTitles) // logs ["Harry Potter and the Sorcerer's Stoned", "Cloud Atlas"]

