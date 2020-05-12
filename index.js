function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(highlight = "*") {
    return function(param = 'special'){
        return `You are ${highlight}${param}${highlight}!`
    }
}

let Calculator = {
    add: function(num1, num2) {return num1+num2},
    subtract: function(num1, num2) {return num1-num2},
    multiply: function(num1, num2) {return num1*num2},
    divide: function(num1, num2) {return num1/num2}
}

function actionApplyer(startingNumber, arrayOfFunctions) {
    let currentValue = startingNumber
    for (let i = 0; i < arrayOfFunctions.length; i++) {
        currentValue = arrayOfFunctions[i](currentValue)
    }
    return currentValue
}