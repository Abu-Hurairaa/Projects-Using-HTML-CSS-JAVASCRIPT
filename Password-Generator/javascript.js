let passWord = document.getElementById('password');
let length = 10;
let upperCase = "ABCDEFGHIJKLMNOPQRESTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrestuvwxyz";
let numbers = "0123456789";
let Symbol = "{;_!@#$%^&*()?/+=~`<,.";
let all = upperCase + lowerCase + numbers + Symbol;
function  Generatepassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    
    while(length > password.length){
        password += all[Math.floor(Math.random()*upperCase.length)];
    }
    passWord.value = password;
}
function Copy(){
    passWord.select();
    
}


document.querySelector('#button').addEventListener('click', Generatepassword);
document.querySelector('#copy').addEventListener('click', Copy)