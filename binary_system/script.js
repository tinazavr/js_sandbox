/*
Steps:
    1. Enter the number
    2. if the user clicked "cancel" (null), notify about canceled
    3. If the user did not enter anything and clicked "OK" -> notify that value contain mistake and repeat step 1;
    4. If the NaN value is entered -> notify that value contain mistake and repeat step 1;

    Otherwise
    5. If the entry number  is greater than the maximum number (1024)  -> notify that value contain mistake and repeat step 1
    6. Check whether the entered number is an integer, 
        if number is not integer  -> notify that value contain mistake and repeat step 1

    7. If the number which user entered is < 0   -> notify that value contain mistake and  repeat step 1
    8. if the entered number is 0, the result is also 0
    9. compare the entered number (a) with the last number of the array (b).
        1. if a > = b, then 1) in the new array the last element is written ‚1‘. 
                            2) assign the value  a = a - b
        2. if a <  b, then 1) in the new array the last element is written ‚0‘
    10. Repeat the step 9
    11. check if there are "0" elements at the end of the array. delete them
    12. Reverse an array with new numbers
    13. convert an array of new numbers to string
    14. show the user a number in binary.

    You are good! You can treat yourself to something delicious :)
*/


const arrayNumbers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
const maxNumber = 1024;
let userNumber;
do{
   userNumber = prompt('Enter the number that is less than or equal to 1023', '');
    if(userNumber === null){
       alert('canceled');
       break;
    }
    if(userNumber === '' || isNaN(userNumber)){
        alert(`Please enter a number. The number must consist of digits and be no more than ${maxNumber}`);
    }else if(userNumber >= maxNumber){
        alert('your number is more then 1024');
    }else if(!Number.isInteger(Number(userNumber))){
        alert('number is integer')
    }else if(userNumber < 0){
        alert('must be positive');
    }
}while(userNumber === '' || isNaN(userNumber) || userNumber >= maxNumber || !Number.isInteger(Number(userNumber)) || userNumber < 0);

let resultArray = [];
let copyUserNumber = userNumber;
for(let i = arrayNumbers.length-1; i >= 0; i--){
    if(copyUserNumber >= arrayNumbers[i]){
        resultArray.unshift(1);
        copyUserNumber = copyUserNumber - arrayNumbers[i];
    }else{
        resultArray.unshift(0);
    }
}
let reverseArray = resultArray.reverse();
for(let i = 0; i < arrayNumbers.length-1; i++){
    if(reverseArray[i] !== 1){
        reverseArray[i] = '';
    }else{
        break
    }
}

let result = resultArray.reverse().join('');
console.log(result);
alert(`You enter number ${userNumber} it will be ${result} in binary system. Thank you!`)