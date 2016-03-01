// ----- Introducing Constructors and .this (reference to the object we're currently in) -----

var Person = function(inputName, inputGender) {
    this.homePlanet = "Earth"
    this.name = inputName
    this.gender = inputGender
    this.speak = function() {
        return "sup it's me " + this.name
    }
}

var michaelchurchill = new Person("michael", "male")
var student = {
    name: "thuy",
    speak: function() {
        console.log("hi my name is " + this.name)
    }
}

// Make a constructor for a robot. the constructor's input should be the robot's name. the robot created should have a method called greet. it will greet a humon and announce itself.give the Robot a starting battery level of 100. Every time he greets someone, his battery should drain by 25. if his battery is dead, he will no longer greet.

// Add a .charge() method to your robot. it should replenish the battery according to the input amount.

var Robot = function(inputName, inputCode) {
    this.name = inputName
    this.maxBatteryLevel = 100
    this.batteryLevel = this.maxBatteryLevel

    var readOnlyCode = inputCode // <= hidden
    this.getReadOnlyCode = function() {
        return readOnlyCode
    }  // <= Closure: function with narrower scope keeps memory of something with wider scope in its environment

    this.charge = function() { 
        var chargeIt = function() {
            if (this.batteryLevel < this.maxBatteryLevel) { // <= .this context is changed
                this.batteryLevel += 10
                console.log(this.name + " is charging. current battery level is " + this.batteryLevel)
            }
            else {
                clearInterval(this.chargingInterval)
            }
        }
        var boundChargerFunc = chargeIt.bind(this) // <== new function now has inflexible .this context, binding a function to whatever object i'm in now (Robot)

        this.chargingInterval = setInterval(boundChargerFunc, 1000) 
    }

    this.greet = function() { 

        if (this.batteryLevel > 0) { //<= battery level goes down with every greet

            this.batteryLevel -= 25

            return "hey humons. it is i, " + this.name + ". "

        } else {

            return "robot nap time."
        }

    }

}

var opty = new Robot('optimus prime', 911)

// console.log(opty.batteryLevel) // <= logs 100
// console.log(opty.greet()) // <= logs greeting
// console.log(opty.batteryLevel) // <= logs 75
// opty.charge() // <= continuously logs battery level until it reaches 100
