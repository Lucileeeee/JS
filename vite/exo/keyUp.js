/*
*  on écoute les touches du clavier
* et on retranscrit tout de suite dans un p le contenu de l'input
*/
let input = document.getElementById('name');
/*addEventListener("keyup", (event) => {
    let p = document.createElement('p');
    p.innerText = input.value;
    document.body.append(p);
}); */

/*
*  on récupère le bouton du html
* on écoute le clavier
* si le mot tapé dans l'input est plus long que 5 caractères
* alors on désactive le bouton
* pour  buton.disabled = true on aurait pu faire: 
* (buton.setAttribute('disabled', 'true');
* et on retranscrit dans un p le contenu de l'input
*/
let buton = document.querySelector('button');
addEventListener("keyup", (event) => {
    if(input.value.length > 5){
        buton.disabled = true;
    }
});

/*
* Enregistrer en locaStorage la value de l'input et réstituer dans un p quand on clique sur entré
* la fonction restituerDansP récupère le paragraphe, le met en rouge 
* et y inscrit la valeur du localStorage
*/
function restituerDansP(){
    let p = document.getElementsByTagName('p');
    p[0].style.color = "red";
    p[0].innerText = localStorage.getItem('clef');
}
/*
*  On écoute le clavier
* on récupère du localStorage, on y enregistre l'input value
* si la touche Entrée est tapé alors on appelle la fonction précédente
*/
addEventListener("keyup", (event) => {
    localStorage.getItem('clef');
    localStorage.setItem('clef', input.value);
    if (event.key === "Enter") {
        restituerDansP(); 
    }
});
 

//! correction de Jeff avec Marked et DomPurify:
//!(le html n'est pas en cohérence, c'est juste pour l'exemple)
const zoneTxt = document.querySelector("textarea");
const zoneRender = document.querySelector("#formRender");
// Dès qu'on arrive sur la page,
//On va pré remplir le textarea avec ce que l'on récupère dans le localStorage
zoneTxt.value = localStorage.getItem('monSuperTexte');
//Si zoneTxt.value est définit alors on rempli la Div avec ce qu'on récupère dans le local storage
if(zoneTxt.value){
//    zoneRender.innerText = localStorage.getItem('monSuperTexte');
   zoneRender.innerHTML = marked(localStorage.getItem('monSuperTexte'));
};
//On détecte ce que tape l'utilisateur dans le textarea
zoneTxt.addEventListener("keyup", function() {
//On enregistre ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
localStorage.setItem('monSuperTexte',zoneTxt.value);
//On affiche ce que tape l'utilisateur traduit en marked dans la div     
//    zoneRender.innerHTML =marked(zoneTxt.value);
   zoneRender.innerHTML =DOMPurify.sanitize(marked(zoneTxt.value));
//    zoneRender.innerHTML =marked(zoneTxt.value);
});

