'use strict';

let money, time;

function start() {
    money = +prompt("What is your budget per month?", '');
    time = prompt("Put the date in format DD-MM-YY", '');  

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("What is your budget per month?", '');
    }
}
start();


var appData = {
     budget: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {}, 
     income: [], 
     savings: true,
     chooseExpenses: function() {
        for (var i = 0; i < 2; i++) {
            var a = prompt("What is a obligatory expenses for this month?", ''),
                b = prompt("How much will it cost?", '');
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) != null && a != '' && b != '' 
        && a.length < 50  ) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
            }
        }
     },

     detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Your daily budget is " + appData.moneyPerDay);
     },

     detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Low life quality") ;
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Medium life quality");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High life quality"); 
        } else {
            console.log("error error");
        } 
     },

     checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("What is your sum of nakopleniy?"),
                percent = +prompt("For what percent?");
            
            appData.monthIncome = save/100/12*percent;
            alert("You monthly revenue from deposit: " + appData.monthIncome);
        }
     },

     chooseOptExpenses: function() {
        for (var i = 1; i <= 2; i++) {
            var c = prompt("what is you optional expenses?", '');
        if ((typeof(c)) === 'string' && (typeof(c)) != null && (typeof(c)) != null && c != '' && c != '' 
        && c.length < 50  ) {
            console.log('doneCheck c');
            appData.optionalExpenses[i] = c;
        } else {}
        }
        console.log(appData);
     },

     chooseIncome: function() {
         let items = prompt('What will give you advanced profit? (answer with coma separator', '');

         if (typeof(items) != 'string' || items == '' || typeof(items) == null) {
             console.log('You put not correct data. Please retry');
         } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('May be something else?'));
            appData.income.sort();
         }

         appData.income.forEach(function (itemMassive, i) {
             alert('Options of advanced profit are: ' + (i+1) + ' - ' + itemMassive);
         });
         
     }

} ;

for (let key in appData) {
    console.log("Our program including the following items: " + key + ' - ' + appData[key]);
}


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
// var i = 0;
// do {
//     var a = prompt("What is a obligatory expenses for this month?", ''),
//         b = prompt("How much will it cost?", '');
    
//     if ( (typeof(a)) === 'integer' && (typeof(a)) != null && (typeof(a)) != null && a != '' && b != '' && a.length < 50  ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         alert("YOU PUT WRONG NUMBERS. TRY AGAIN!");
//     }
//         i++;
//     }
//     while (i < 3);












