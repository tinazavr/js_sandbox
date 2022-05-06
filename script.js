/* Write the code that will ask login with prompt.
If user enter 'Admin' in login field, prompt ask password, 
    - if login field contain nothing anf push 'ok' or Esc button pushed - show 'Canceled', 
    - in other way show 'I don't know you'.
Password: 1) Right password is 'I am main' -> 'Hello!',
          2) Other -> 'Wrong password'
          3) When youser canseled prompt - 'Canceled' 
*/


let autorizationLogin = prompt('Enter your login', 'Your Login');
let rightUserLogin = 'Admin';
let rightUserPassword = 'I am main';

if (autorizationLogin === rightUserLogin){
    let autorizationPassword = prompt('Enter your password', 'Your Password');
    if (autorizationPassword === rightUserPassword){
        alert('Hello!');
    }else if(autorizationPassword === null || autorizationPassword === ''){
        alert('Canceled.');
    }else{
        alert('Wrong password.');
    }
} else if (autorizationLogin === null || autorizationLogin === ''){
    alert('Canceled.');
} else{
    alert('I don`t know you.');
}




