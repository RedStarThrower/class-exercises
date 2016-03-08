// Morning exercise: ​
//   - Level I: Console-log a demonym object to the console. 
//   - Level II: Put your demonym object on the window so you can goof around with it. 
//   - Level III: Create an interactive translator for demonyms. An input bar on the page should take a country's name, and once enter is pressed, the demonym should be displayed on the page. 
//   - Level IV: Your input bar should come with two buttons, one to get the demonym, one to get the native orthography of the country name. 

// Variables

var countryUrl = "https://restcountries.eu/rest/v1/all"

var container = document.querySelector('#container')

var inputEl = document.querySelector('input')
inputEl.value = "Search country..."

var demButton = document.querySelector('#dem-button')
var orthButton = document.querySelector('#name-button')

window.demonymTable = {} // <= Creates a global variable as a window property that is available for robust inspection on the console (ex: manipulating object, trying new methods )

// Functions

var requester = function(countryUrl) { // <= Set up request; returns a PROMISE, *not* data
    return $.getJSON(countryUrl)
}

function Country(inputDemonym, inputNativeName) { // <= create a function to make an object for each country
    this.demonym = inputDemonym;
    this.nativeName = inputNativeName;
}

var handleData = function(jsonData) { // <= Set up function to handle data and create the table
    //console.log(jsonData)
    for (var i = 0; i < jsonData.length; i++) {
        var jsonObj = jsonData[i]
        //console.log(jsonObj)
        var countryName = jsonObj['name']
        var countryDemonym = jsonObj['demonym']
        var nativeName = jsonObj['nativeName'] //<=  Identify key/value for the native name
        var countryObj = new Country(countryDemonym, nativeName) //<= create an object for each country in the loop 
        demonymTable[countryName] = countryObj //<=  Place all the objects into the demonym table 
    }
    console.log('demonym table built') // <= shows that the function is working 
    console.log(demonymTable) // <= enjoy tour new table!
    inputEl.addEventListener("focus", function() { inputEl.value = "" }) // <= gets rid of initial value when clicked
    inputEl.addEventListener("mouseout", processInput)
    //<= processes search when the mouse is out of the search bar
}

//Search Table for Country

var demSearch = function(countrySearched) {
    container.innerHTML = '<p class="demonym">' + demonymTable[countrySearched].demonym + "</p>"
}

var nativeNameSearch = function(countrySearched) {
    container.innerHTML = '<p class="demonym">' + demonymTable[countrySearched].nativeName + "</p>"
}
var processInput = function(keyEvent) { // <= Create a search function that takes the country name searched and looks it up in the demonym table
    var inputEl = keyEvent.target
    var countrySearched = inputEl.value
    //console.log(countrySearched) // <= Make sure the query is being grabbed
    demButton.addEventListener("click", function() {
        demSearch(countrySearched) //<= call this function with the country searched as input, but only after the button clicked
    })
    orthButton.addEventListener("click", function() {
        nativeNameSearch(countrySearched) 
    })    
}

var promise = requester(countryUrl) // <= everybody, get in the car to go get the data
promise.then(handleData) // <= takes the callback function and puts it into position

