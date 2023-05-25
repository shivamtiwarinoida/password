const passwordEl=document.querySelector('#password');
const lengthEl=document.querySelector('#length');
const uppercase=document.querySelector('#uppercase');
const lowercase=document.querySelector('#lowercase');
const numbers=document.querySelector('#number');
const symbols=document.querySelector('#symbol');


const generateBtn=document.querySelector('#generate');
generateBtn.addEventListener('click',GeneratePass);

const copyBtn=document.querySelector('#copy');
copyBtn.addEventListener('click',CopyPass);

const uppercase_chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars="abcdefghijklmnopqrstuvwxyz";
const number_chars="0123456789";
const symbol_chars="!@#$%^&*()";


function GeneratePass(){
    let password="";
    let length=lengthEl.value;
    let chars="";
    chars += uppercase.checked ? uppercase_chars : "";
    chars += lowercase.checked ? lowercase_chars : "";
    chars += numbers.checked ? number_chars : "";
    chars += symbols.checked ? symbol_chars : "";

    for(let i=0;i<length;i++){
        let rand=Math.floor(Math.random()*chars.length);
        password+=chars.substring(rand,rand+1);
    }

    passwordEl.value=password;
}

async function CopyPass(){
    if(navigator.clipboard){
        await navigator.clipboard.writeText(passwordEl.value);
        alert("password copied to clipboard");
    }
}