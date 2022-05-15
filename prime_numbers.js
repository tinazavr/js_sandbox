// Display prime numbers

let num = 10;
let arrayNumbers = [];

returnHere: 
for(let i = 2; i <= num; i++){
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            continue returnHere;
        }
    }
    arrayNumbers.push(i);
}
alert(arrayNumbers);
