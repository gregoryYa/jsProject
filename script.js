'use strict';

var money = +prompt("What is your budget per month?", ''),
    time = prompt("Put the date in format DD-MM-YY", '');  

var appData = {
     budget: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {}, 
     income: [], 
     savings: false
} ;

// FOR CYCLE

// for (var i = 0; i < 2; i++) {
//     var a = prompt("What is a obligatory expenses for this month?", ''),
//         b = prompt("How much will it cost?", '');
    
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) != null && a != '' && b != '' 
//     && a.length < 50  ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//     }
// };

// WHILE CYCLE

// var i = 0;
// while (i < 2) {
//     var a = prompt("What is a obligatory expenses for this month?", ''),
//         b = prompt("How much will it cost?", '');
    
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) != null && a != '' && b != '' && a.length < 50  ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//     }
//     i++;
// }

//DO CYCLE
var i = 0;
do {
    var a = prompt("What is a obligatory expenses for this month?", ''),
        b = prompt("How much will it cost?", '');
    
    if ( (typeof(a)) === 'integer' && (typeof(a)) != null && (typeof(a)) != null && a != '' && b != '' && a.length < 50  ) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        alert("YOU PUT WRONG NUMBERS. TRY AGAIN!");
    }
        i++;
    }
    while (i < 3);

appData.moneyPerDay = appData.budget / 30;

alert("Your daily budget is " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Low life quality") ;
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Medium life quality");
} else if (appData.moneyPerDay > 2000) {
    console.log("High life quality"); 
} else {
    console.log("error error");
}




