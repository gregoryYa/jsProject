// if (2*4 == 10) {
//     console.log("That's correct");˜˜˜
// } else {
//     console.log("Not correct234");
// }

var num = 50;

if (num < 49) {
     console.log('Not correct!')
 } else if (num > 100) {
     console.log('Too much!')
 } else {
     console.log('Correct!')
 };

switch (num) {
    case num < 49:
        console.log('Not correct!');
        break;
    case num > 100:
        console.log('Too much!');
        break;
    case 50:
        console.log('Correct!');
        break;
    default:
        console.log('Something went wrong');
        break;
}

