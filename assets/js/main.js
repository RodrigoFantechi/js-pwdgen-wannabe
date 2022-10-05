const nome= prompt("inserire nome:");
const cognome= prompt("inserire cognome:");
const colore= prompt("inserire colore:");
const password = nome+cognome+colore+"22";

alert (password);
document.getElementById('titlePassword').innerHTML = password;
document.querySelector('h2').innerHTML = password;

