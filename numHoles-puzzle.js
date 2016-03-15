// Interview Question: input - number; output = number of "holes" in the number
//Ex: numHoles (0) => 1 , numHoles(15) => 0 , numHoles (8847620)m => 5
var numObject = {
    0: 1,
    1: 0,
    2: 0,
    3: 0,
    4: 1,
    5: 0,
    6: 1,
    7: 0,
    8: 2,
    9: 1    
}

var count = 0
var numHoles = function(inputNumber) {
    var stringNum = inputNumber.toString()
  	//console.log(stringNum) // <= logs "222886"
    for (var i = 0; i < stringNum.length; i++) {
        count += parseInt(numObject[stringNum[i]])
    }    
    return count
}

console.log(numHoles(1239624)) // <= logs "3"
console.log(numHoles(1889616)) // <= logs "10"