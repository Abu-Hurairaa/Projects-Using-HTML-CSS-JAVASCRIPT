let string = '';
// let text = 'abcdefghijklmnopqrstuvwxyz'
let input = document.getElementById('inputt')
let buttons = document.querySelectorAll('.button');
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval (string);
            input.value = string; 
        }else if (e.target.innerHTML == 'C'){
            string= '';
            input.value = string;
        }else if (e.target.innerHTML == 'A'&& 'a'){
            string= '';
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})