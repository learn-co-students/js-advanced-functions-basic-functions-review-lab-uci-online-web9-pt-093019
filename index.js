// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adj="special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = {
    add: function(x,y) {
        return x+y;
    },
    subtract: function(x,y) {
        return x-y;
    },
    multiply: function(x,y) {
        return x*y;
    },
    divide: function(x,y) {
        return x/y;
    }
}

// function subOne(x) { return x-1 };
// function divThree(x) { return x/3 };
// const arr = [
//     subOne,
//     divThree
// ]

function actionApplyer(int, arr) {
    let x = int;
    // if (!arr.length) { return x };
    for (let i = 0; i < arr.length; i++) {
        x = arr[i](x);
    }
    return x;
}