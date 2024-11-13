/*
*  on écoute les touches du clavier
* et on retranscrit dans un p le contenu de l'input
*/
let input = document.getElementById('name');
addEventListener("keyup", (event) => {
    let p = document.createElement('p');
    p.innerText = input.value;
    document.body.append(p);
});

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
* Enregistrer en locaStorage la value de l'input 
* et réstituer dans un p 
*/
let p = document.getElementsByTagName('p');
addEventListener("keyup", (event) => {
    let aVenir = localStorage.getItem('clef');
    localStorage.setItem('clef', input.value);
    p[0].innerText = aVenir;
});