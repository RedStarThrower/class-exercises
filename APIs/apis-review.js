// Create a lookup table (object) that maps country names into demonyms. I should be able to use it like this:

// demonymTable['Malaysia']
// 'Malay'

// Variables

var countriesUrl = "https://restcountries.eu/rest/v1/all" // <= Step 1: Define url for the API data

window.demonymTable = {} // <= Creates a global variable as a window property that is available for robust inspection on the console (ex: manipulating object, trying new methods )

// Functions

var showData = function(jsonData) {	// <= Step 2: Create function that logs JSON data
	//console.log(jsonData)
	for (var i = 0; i < jsonData.length; i++) { // <= Step 5: Expand function to got into the array 
		var jsonObj = jsonData[i] // <= Step 6: Identify the needed variables in the objects
		var countryName = jsonObj['name']
		var countryDemonym = jsonObj['demonym']
		demonymTable[countryName] = countryDemonym // <= Step 7: Write new key=value pairs into new object
	}
	//console.log('demonym table built') // <= shows that the function is workin 
	//console.log(demonymTable) // <= Step 8: Your resulting object will appear in the console!
}


var countriesPromise = $.getJSON(countriesUrl) // <= Step 3: Create promise with your url
countriesPromise.then(showData) // <= Step 4: When data is ready, run the showData function

//console.log(demonymTable['Malaysia']) // <= JS doesn't wait! Console will try to log this when data is not yet there