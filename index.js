// Your code here

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
    return function(param='special') {
        return `You are ${flair + param + flair}!`
    }
}

const Calculator = {
    add() {return 1 + 3},
    subtract() {return 1 - 3},
    multiply() {return 1 * 3},
    divide() {return 10 / 5}
}

function actionApplyer(int, arry) {
    if (arry.length === 0) {return int}
    else {
        for (const funct of arry) {
            int = funct(int)
        }
        return int
    }
}