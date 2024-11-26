//? récupérer les input de mail et password:
let mail = document.querySelector('input[type="email"]');
let password = document.querySelector('input[type="password"]');

//? définir les regex
const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

//? récupérer la liste de consignes:
let tropCourt = document.getElementById('tropCourt');
let pasNumber = document.getElementById('pasNumber');
let pasSpecial = document.getElementById('pasSpecial');

//? regex du mail:
mail.addEventListener("keyup", (event) => {
    if(regex.test(mail.value)){
        mail.style.color='green';
    } else if (!regex.test(mail.value)){
        mail.style.color='red';
    }
});

//? regex du password pour vérifier la longueur, qu'il contient un chiffre et un caractère spéciale
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

