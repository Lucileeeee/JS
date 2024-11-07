//? Syntaxe de base et variables :
let number = 5;
let string = "j'adore js";
let bool = false;
//console.log(number, string, bool);

//? Exo 2 : Écrire un script qui convertit des degrés Celsius en Fahrenheit.
function convertFarenheit(tempCelsius){
    fareinheit = (tempCelsius - 32) / 1.8 ;
    return fareinheit;
}
//console.log(convertFarenheit(50));

//? Exo 3: Écrire une condition pour vérifier si un nombre est pair ou impair, et afficher un message correspondant.
function pairImpair(nombre){
    if(nombre %2 == 0){
        console.log('nombre paire', nombre);
    } else{
        console.log('nombre impaire', nombre);
    }
}

//? Exo 4 : Utiliser une boucle for pour afficher les nombres de 1 à 10, puis inverser la boucle pour les afficher de 10 à 1.
function compter10(){
    console.log('de 0 à 10 :')
    for (let i = 0; i < 10; i ++){
        console.log(i);
    }
    console.log('de 10 à 0 :')
    for (let i = 10; i > 0; i --){
        console.log(i);
    }
}
//compter10();

//? Exo 5 : créer une fonction simple qui prend deux nombres et renvoie leur somme.
function simple(nb1, nb2){
    return nb1 + nb2;
}
//console.log(simple(5,2));

//? Exo 6 : Créer une fonction pour vérifier si une chaîne de caractères contient un certain mot.
function trouveMot(mot, str){
    if(str.includes(mot)){
        console.log('le Mot :', mot, ', est dans la phrase');
    }
}
/* let str= 'bonjour la vie';
let mot = 'vie';
trouveMot(mot, str); */

//? Exo 7 : Créer un tableau de prénoms et afficher chacun avec une boucle.
let session = ['Maxime T', 'Yassine', 'Marjorie', 'Apolline', 'Maxime M', 'Romaric', 'Jordan', 'Alex', 'Sophie', 'Florian', 'Vincent','Kevin'];
for (let i = 0; i < session.length; i ++){
    //console.log(session[i]);
}

//? Exo 8: créer un objet simple représentant une personne (nom, âge, ville) et d'accéder aux propriétés. (On affiche en console)
let personne = {
    nom : 'Zilbermann',
    prenom : 'Lucile',
    age : '33 ans',
    ville : 'Toulouse'
}
//console.log(personne.nom, personne.prenom, personne.age, personne.ville);

//? Exo 9 :ajouter un élément de texte dans une page HTML via JavaScript.
function ajoutTexte(){
    let h1 = document.createElement('h1');
    h1.innerText = "Bonjour Toulouse!";
    document.body.append(h1);
}
//ajoutTexte();

//? Exo 10 : Créer un bouton via JS, on l’affiche dans la page et au click cela déclenche une alerte
function creerBouton(){
    let bouton = document.createElement('button');
    document.body.append(bouton);
    bouton.innerText='Clique sur moi si tu ose';
    bouton.addEventListener("click", ()=>{
        alert('Ouuuuuu il fallait pas !');
    })
}
creerBouton();

//? Exo 11 : Contactez une api qui génère des chuck Norris Facts , et  on affiche dans blague dans la page 
let appelChuck = async ()=>{
    const data = await fetch ('https://api.chucknorris.io/jokes/random');
    const dataObject = await data.json();
    let h1 = document.createElement("h1");
    document.body.append(h1);
    h1.innerText = dataObject.value;
}
appelChuck();


//? Exo 12 : dans la page web mettre en place un système de Dark Chartreuse Mode on click sur un bouton cela change le look de la page ambiance chartreuse 😉 de fait on peut rajouter du contenu côté HTML du h1, des img, des <p>
function chartreuseMode(){
    let bouton = document.createElement('button');
    document.body.append(bouton);
    bouton.innerText='Passer en Mode Chartreuse: Bang, Bang!';
    bouton.addEventListener("click", ()=>{
        document.body.style.backgroundColor = "chartreuse";
        let h1 = document.querySelector("h1");
        h1.style.color = "white";
        let img = document.createElement("img");
        img.setAttribute('src', "Chuck.jpeg");
        document.body.append(img);
    })
}
chartreuseMode();