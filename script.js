'use strict';


// console.log (4/0);
// alert("pidorasina!");
// let answer = confirm("are you here?");
// console.log(answer);

// let answer = prompt("Are you 18 years old?", "");
// console.log(typeof(answer));

// let isOpened = true,
//     isClosed = false;
// console.log(isOpened && isClosed);

var money = prompt("What is your budget per month?", ''),
    time = prompt("Put the date in format DD-MM-YY", '');  

var appData = {
     budget: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {}, 
     income: [], 
     savings: false
} ;

var q1 = prompt("What is a obligatory expenses for this month?"),
    q2 = prompt("How much will it cost?"),
    q3 = prompt("What is a obligatory expenses for this month?"),
    q4 = prompt("How much will it cost?");

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;

console.log(appData.expenses);

alert("Your daily budget is " + (money / 30));




