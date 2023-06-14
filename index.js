// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
    let twoDriversArray = []
   
    for(let driver of driversArray) {
        if (twoDriversArray.length < 2) {
            twoDriversArray.push(driver)
        }
    }
    return twoDriversArray
}

const returnLastTwoDrivers = function(driversArray) {
    let lastTwoDrivers = [...driversArray]
    
    for(let i = 0; i < 2; i++) {
        lastTwoDrivers.shift()
    }
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare) {
    return function() {
        return fare **2
    }
}

const fareDoubler = function(fare) {
    return fare * 2
}

const fareTripler = function(fare) {
    return fare * 3
}

const selectDifferentDrivers = function(driversArray, twoDriversFunction){
    return (twoDriversFunction(driversArray))
}