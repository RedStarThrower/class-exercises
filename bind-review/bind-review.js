// Exercise I. Create a formatURLParams function that takes in an object and return a parameter string for a url

var paramObject = {
    query: "brazil",
    "api-key": "1297364783465"
}

var formatURLParams = function(inputObject) {
    var paramString = ""
    for (var key in inputObject) {
        paramString += '&' + key + '=' + inputObject[key]
    }
    return paramString.substring(1)
}

console.log(formatURLParams(paramObject)) // logs: "query=brazil&api-key=1297364783465"

// Exercise II. Step 1: Create a student object with a property called "subject" i.e. what they are studying. The student should have a method called "study" that return 'I am studying <the subject>'.

var studentObj = {
    subject: "javaScript",
    study: function() {
        return "I am studying " + this.subject // "this" refers to the student object
    }
}

var experimentObj = {
    subject: "chimps"
}

// Step 2: Now bind the student's study method to the "experiment object" which will yiels a new function. Invoke the new function.

// "Bind" Syntax: returnedGlobalBoundFunction = function.bind(newObject) <= function can be a method on an object (ex: oldObject.method.bind(newObject))

var boundStudy = studentObj.study.bind(experimentObj) // now "this" is fixed ot the experiment object. boundStudy is a global function that will always do the same thing:

// var boundStudy = function(experimentObj) {
// 	return "I am studying " + experimentObj.subject
// }

console.log(boundStudy()) //logs: "I am studying chimps"

// Step 3: Add a name and greet function to the student object. Create two new objects and bind student's greet function to each of these objects. Try out the new bound functions. 

var studentObj = {
    name: "Natalia",
    subject: "javaScript",
    study: function() {
        return "I am studying " + this.subject // "this" refers to the student object
    },
    greet: function() {
        return "Hi, my name is " + this.name // "this" refers to the student object
    }
}

var primeMinister = {
    name: "Tony Blair",
    occupation: "prime minister"
}

var windowWasher = {
    name: "Cletus Martin",
    occupation: "window washer"
}

var boundMinisterGreet = studentObj.greet.bind(primeMinister)
var boundWasherGreet = studentObj.greet.bind(windowWasher)

console.log(boundMinisterGreet()) // logs: "Hi, my name is Tony Blair"
console.log(boundWasherGreet()) // logs: "Hi, my name is Cletus Martin"
