//declaring array
let arr = ["first", 2, 3, "four", 5];

//remove from the end
arr.pop();

//add from the end
arr.push("5");

//remove 1st symbol from massive
arr.shift();

//add 1st symbol in massive
arr.unshift('1');

//perebor elements in massive
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//perebor elements with method for each

arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (massive: " + mass + ')');
});


console.log(arr);

//perebor elements with newest KEY OFF method
let mass = [1, 3, 4, 6, 7];
for(let key of mass) {
    console.log(key);
}



//SPLIT METHODS - get data from user in one line 
let ans = prompt("",""),
    array = [];

array = ans.split(',');
console.log(array);

//JOIN METHOD - joins all elements with setted razdelitel
let array2 = ["aawe", 'zza', 'pp', 'are'],
    i1 = array2.join(', ');   //set razdelital - zapyataya and space
console.log(i1);

//SORT METHOD - sort by alphabet
let array3 = ["aawe34", '3dzza', 'npp', 'qre'],
    k = array3.sort();   //
console.log(k);

//COMPARISON of elements function
let array4 = [1, 14, 3],
    l = array4.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}
console.log(l);


