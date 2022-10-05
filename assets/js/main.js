const nome= prompt("inserire nome:");
const cognome= prompt("inserire cognome:");
const colore= prompt("inserire colore:");
const password = nome+cognome+colore+"22";

alert (password);
document.getElementById('titlePassword1').innerHTML = password;


/* RANDOM */


let result = ' ';
for(let i=0; i<password.length; i++){
    result+= password.charAt(Math.random()*password.length);
}
alert (result);
document.getElementById('titlePassword2').innerHTML = result;


/* RANDOM WITH SAME WORDS */


let result1 = '';
let numeroCappello;
let lista = [];

for(let i=0; i<password.length; i++){
    numeroCappello = Math.floor(Math.random()*password.length);
    if (lista.includes(numeroCappello)){
        i--;
    }else{
    lista.push(numeroCappello);
    result1+= password.charAt(numeroCappello);
}
}
alert (result1);
document.getElementById('titlePassword3').innerHTML = result1;