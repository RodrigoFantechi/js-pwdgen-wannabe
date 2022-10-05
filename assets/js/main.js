const nome= prompt("inserire nome:");
const cognome= prompt("inserire cognome:");
const colore= prompt("inserire colore:");
const password = nome+cognome+colore+"22";

alert (password);
document.getElementById('titlePassword').innerHTML = password;
document.querySelector('h2').innerHTML = password;



/* RANDOM */


const nome1= prompt("inserire nome:");
const cognome1= prompt("inserire cognome:");
const colore1= prompt("inserire colore:");
const password1 = nome1+cognome1+colore1+"22";
let result = ' ';

for(let i=0; i<password1.length; i++){
    result+= password1.charAt(Math.random()*password1.length);
}
alert (result);
document.getElementById('titlePassword2').innerHTML = result;

