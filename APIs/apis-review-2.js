// Morning exercise: ​
//   - Level I: Console-log a demonym object to the console. 
//   - Level II: Put your demonym object on the window so you can goof around with it. 
//   - Level III: Create an interactive translator for demonyms. An input bar on the page should take a country's name, and once enter is pressed, the demonym should be displayed on the page. 
//   - Level IV: Your input bar should come with two buttons, one to get the demonym, one to get the native orthography of the country name. 

// Variables

var countryUrl = "https://restcountries.eu/rest/v1/all" // <= Step 1: Set up variables

var container = document.querySelector('#container')

var inputEl = document.querySelector('input')
inputEl.value = "Search country..."

var denButton = document.querySelector('#demonym')
var orthButton = document.querySelector('#orthography')

window.demonymTable = {} // <= Creates a global variable as a window property that is available for robust inspection on the console (ex: manipulating object, trying new methods )

// Functions

var requester = function(countryUrl) { // <= Step 2: Set up request; returns a PROMISE, *not* data
	 return $.getJSON(countryUrl)
}

var handleData = function(jsonData) { // <= Step 3: Set up function to handle data and create the table
    //console.log(jsonData)
    for (var i = 0; i < jsonData.length; i++) {  
        var jsonObj = jsonData[i] 
        //console.log(jsonObj)
        var countryName = jsonObj['name']
        var countryDemonym = jsonObj['demonym']
        var nativeName = jsonObj['nativeName'] // <= store for Level IV (will have to build an object for each country)
         //console.log(nativeName)
        demonymTable[countryName] = countryDemonym         
    }
    console.log('demonym table built') // <= shows that the function is working 
    console.log(demonymTable) 
    inputEl.addEventListener("keydown", searchDemonym) //<= prevents user from entering query before data has gotten back
}

var searchDemonym = function(keyEvent) { // <= Step 4: Create a search function that take the country name searched and looks it up in the demonym table
    var inputEl = keyEvent.target
    if (keyEvent.keyCode === 13) {
        var countrySearched = inputEl.value
        inputEl.value = ""
        container.innerHTML = '<p class ="countryName">' + demonymTable[countrySearched] + '</p>'
    } // <= gootd practice to insert tags into HTML in order to style them later
}

var promise = requester(countryUrl) // <= everybody, get in the car to go get the data
promise.then(handleData) // <= takes the callback function and puts it into position 

