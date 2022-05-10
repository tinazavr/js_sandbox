const arrayNumbers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
let userNumber;
    do{
   userNumber = prompt('Enter the number that is greather than or equal to 1023', '');
    if(userNumber === null){
       alert('canceled');
    }
    if(userNumber === ''){
        alert('aa');
    }
}while(userNumber === '');
