let mail = document.querySelector('input[type="email"]');
let password = document.querySelector('input[type="password"]');
let consigne = document.getElementById('consigne');
const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;


mail.addEventListener("keyup", (event) => {
    if(regex.test(mail.value)== true){
        mail.style.color='green';
    } else if (regex.test(mail.value)== false){
        mail.style.color='red';
    }
});


let tropCourt = document.getElementById('tropCourt');
let pasNumber = document.getElementById('pasNumber');
let pasSpecial = document.getElementById('pasSpecial');

password.addEventListener("keyup", (event) => {
    if (password.value.length <= 6){
        tropCourt.innerText='Le Mot De Passe est trop court';
    } else {
        tropCourt.innerText='';
    }
    if(!password.value.match(charDecimal)){
        pasNumber.innerText = 'Le Mot De passe doit contenir 1 chiffre';
    } else {
        pasNumber.innerText = '';
    }
    if (!password.value.match(charSpecial)){
        pasSpecial.innerText = `Le Mot de passe doit contenir 1 caractère spécial (@,1,!,$)`;
    } else {
        pasSpecial.innerText = '';
    }
}); 

